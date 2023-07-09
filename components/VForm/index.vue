<template>
  <form :class="props.class" @submit="handleSubmition">
    <slot
      v-bind:field="vform"
      :clearForm="clearForm"
      :formChecked="formChecked"
      :values="vform.values"
    />
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";
const emit = defineEmits(["submit"]);
const props = defineProps(["class", "requiredFields"]);
const formChecked = useUniqueState(false);

const vform = useForm();
const clearForm = () => {
  for (let key in vform.values) {
    if (vform.values[key]) {
      vform.setFieldValue(key, "");
    }
  }
};

const handleSubmition = vform.handleSubmit((values, params) => {
  formChecked.value = false;
  if (props?.requiredFields?.length) {
    for (let key of props.requiredFields) {
      if (!values[key]?.length && !values[key]) {
        formChecked.value = true;
        return;
      }
    }
  }
  emit("submit", values, { ...vform, resetForm: clearForm });
});
</script>
