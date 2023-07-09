<template>
  <input
    type="checkbox"
    :class="props.class"
    :checked="field"
    @change="onChange"
    :name="name"
  />
</template>

<script setup>
const props = defineProps([
  "name",
  "setFieldValue",
  "values",
  "value",
  "type",
  "class",
  "field",
]);

const field = useUniqueState(props.value);

const onChange = () => {
  field.value = !field.value;
};

onMounted(() => {
  props.setFieldValue(props.name, field.value);
});

watch(
  () => props.values[props.name],
  () => {
    if (props.values[props.name] == false) {
      field.value = false;
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