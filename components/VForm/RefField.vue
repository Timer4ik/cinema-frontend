<template>
  <input
    v-maska
    :data-maska="mask"
    :data-maska-tokens="maskaTokens"
    :class="props.class"
    :type="type"
    v-model="field"
    :name="name"
  />
</template>

<script setup>
import { vMaska } from "maska";
const props = defineProps([
  "name",
  "refName",
  "valueView",
  "setFieldValue",
  "values",
  "value",
  "type",
  "class",
  "field",
  "mask",
  "maskaTokens",
]);

const firstLoad = useUniqueState(true);
const field = useUniqueState(props.valueView(props.value));

onMounted(() => {
  props.setFieldValue(props.name, props.value);
});

watch(
  () => field.value,
  () => {
    if (field.value == "") {
      field.value = "";
    } else {
      props.setFieldValue(props.name, props.valueView(field.value));
      field.value = props.valueView(field.value);
    }
  }
);

watch(
  () => props.values[props.refName],
  () => {
    if (firstLoad.value) {
      firstLoad.value = false;
      return;
    }
    if (props.values[props.refName] == "") {
      field.value = "";
    } else {
      props.setFieldValue(
        props.name,
        props.valueView(props.values[props.refName])
      );
      field.value = props.valueView(props.values[props.refName]);
    }
  }
);
</script>