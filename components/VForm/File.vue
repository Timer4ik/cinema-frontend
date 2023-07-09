<template>
  <input :class="props.class" :accept="accept" type="file" @change="onFileLoad" :name="name" />
</template>

<script setup>
const props = defineProps([
  "name",
  "setFieldValue",
  "value",
  "onSelect",
  "onUpdate",
  "onDelete",
  "class",
  "values",
  "accept"
]);

const field = useUniqueState(props.value);

const onFileLoad = (e) => {
  field.value = e.target.files[0];
  if (props.onSelect) {
    props?.onSelect(e);
  }
};

onMounted(() => {
  props.setFieldValue(props.name, field.value);
});
watch(
  () => props.values[props.name],
  () => {
    if (props.values[props.name] == "") {
      field.value = undefined;
    }
  }
);
watch(
  () => props.value,
  () => {
    if (!props.value) {
      return props.setFieldValue(props.name, undefined);
    }
  }
);

watch(
  () => field.value,
  () => {
    props.setFieldValue(props.name, field.value);
  }
);
</script>