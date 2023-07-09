<template>
  <div class="popover" :class="{ active: active }">
    <slot />
  </div>
</template>

<script setup>
defineProps(["active"]);
</script>
