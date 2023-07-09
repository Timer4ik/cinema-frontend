<template>
  <div class="row">
    <div class="col-6">
      <div
        class="
          rounded
          border-2 border-dashed border-primary-hover
          position-relative
        "
      >
        <div class="d-flex justify-content-center px-5 py-5">
          <label
            class="position-absolute w-full h-full top-0 start-0 cursor-pointer"
            ><VFormFile
              class="visually-hidden"
              :name="name"
              :value="image"
              v-bind="field"
              :onSelect="onSelect"
          /></label>
          <div class="text-center">
            <div class="text-2xl text-muted">
              <i class="bi bi-upload"></i>
            </div>
            <div class="d-flex text-sm mt-3">
              <p class="font-semibold">Перетащите картинку</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" v-if="src ?? image?.file">
      <div class="adaptive-img">
        <video :src="image?.source ?? src" alt="" />
        <div class="list-group-item py-3 d-flex align-items-center">
          <div class="flex-fill">
            <span class="d-block h6 text-sm font-semibold mb-1">
              {{ image?.file?.name ?? imageName }}
            </span>
            <span class="d-block text-xs text-muted"
              >{{ Math.round((image?.file?.size ?? size) / 1024) }} kb</span
            >
          </div>
          <ElementsBtnRemove @removeImage="removeImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  size: Number,
  field: Object,
  name: String,
  values:Object,
  imageName: String,
});

const { image, setImage, removeImage } = useImage();

onMounted(() => {
  image.value = "init";
});

watch(
  () => props.field.values[props.name],
  () => {
    if (props.field.values[props.name] == "") {
      image.value = "init";
    }
  }
);

const onSelect = (e) => {
  setImage(e);
};
</script>
