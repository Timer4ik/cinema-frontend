<template>
  <client-only>
    <Datepicker :min-date="min" :max-date="max" v-model="field" locale="ru-RU" format="dd.MM.yyyy" select-text="Выбрать" cancel-text="Отменить" position="left">
      <template v-slot="{ inputValue, inputEvents }">
        <div class="input-group input-group-sm input-group-inline datepicker">
          <span class="input-group-text pe-2">
            <i class="bi bi-calendar"></i>
          </span>
          <input
            type="text"
            class="form-control form-control-sm"
            :value="inputValue"
            v-on="inputEvents"
          />
        </div>
      </template>
    </Datepicker>
  </client-only>
</template>


<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps([
  "name",
  "setFieldValue",
  "value",
  "type",
  "class",
  "date",
  "values",
  "min",
  "max"
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
