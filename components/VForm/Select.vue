<template>
  <select :name="name" :class="props.class" @change="selectValue">
    <option value="NOT_SELECTED" :selected="selectedValue === 'NOT_SELECTED'">Не выбрано</option>
    <slot />
  </select>
</template>

<script setup>
const props = defineProps([
  "name",
  "setFieldValue",
  "value",
  "type",
  "class",
  "values",
]);

const selectedValue = useUniqueState(props.value);

const selectValue = (e) => {
  selectedValue.value = e.target.value;
};

onMounted(() => {
  props.setFieldValue(props.name, selectedValue.value);
});

watch(
  () => props.values[props.name],
  () => {
    if (props.values[props.name] == "") {
      selectedValue.value = "NOT_SELECTED";
    }
  }
);

watch(
  () => selectedValue.value,
  () => {
    props.setFieldValue(props.name, selectedValue.value);
  }
);
</script>