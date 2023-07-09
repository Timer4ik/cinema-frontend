<template>
  <div class="row" style="margin-bottom:20px;">
    <div class="col-5">
      <input
        v-model="coordinates"
        type="text"
        @change="setCoordsByHand"
        class="form-control form-control-sm"
      />
    </div>
    <div class="col-4">
      <button
        class="btn btn-sm btn-primary"
        type="button"
        @click="setCoordsByHand"
      >
        Установить Координаты
      </button>
    </div>
  </div>
  <YandexMap
    :coordinates="coordinates"
    @click="setCoords"
    v-if="showMap && coordinates"
  >
    <YandexMarker :coordinates="coordinates" :marker-id="123" />
  </YandexMap>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps([
  "name",
  "setFieldValue",
  "values",
  "value",
  "type",
  "class",
  "coordinates",
]);
const coordinates = useUniqueState(props.coordinates);

const getString = (cords) => {
  return Array.isArray(cords) ? cords.join(",") : cords;
};

const setCoordsByHand = (e) => {
  showMap.value = false;

  if (!coordinates.value){
    return
  }

  coordinates.value = Array.isArray(coordinates.value)
    ? coordinates.value
    : coordinates.value?.split(",");

  if (coordinates.value.length !== 2) {
    return;
  }

  nextTick(() => {
    showMap.value = true;
  });
};

const setCoords = (e) => {
  coordinates.value = e.get("coords");
  e.originalEvent.map.panTo(e.get("coords"), 8, 1);
  e.originalEvent.map.geoObjects
    .get(0)
    .geometry.setCoordinates(e.get("coords"));
};

const showMap = useUniqueState(true);

onMounted(() => {
  coordinates.value = props.value;
  setCoordsByHand();
  props.setFieldValue(props.name, getString(props.value));
});

watch(
  () => props.values[props.name],
  () => {
    if (props.values[props.name] == "") {
      coordinates.value = [0, 0];
    }
  }
);
watch(
  () => coordinates.value,
  () => {
    props.setFieldValue(props.name, getString(coordinates.value));
  }
);
</script>

<style>
.yandex-container {
  height: 400px;
}

.yandex-balloon {
  height: 200px;
  width: 200px;
}
</style>
