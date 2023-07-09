<template>
  <input v-maska :data-maska="mask" :data-maska-tokens="maskaTokens" :class="props.class" :type="type" v-model="field" :name="name" />
</template>

<script setup>
import { vMaska } from "maska"
const props = defineProps([
  "name",
  "setFieldValue",
  "values",
  "value",
  "type",
  "class",
  "field",
  "mask",
  "maskaTokens"
]);

const field = useUniqueState(props.value);

onMounted(() => {
  props.setFieldValue(props.name, field.value);
});

watch(
  () => props.values[props.name],
  () => {
    if (props.values[props.name] == "") {
      field.value = "";
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