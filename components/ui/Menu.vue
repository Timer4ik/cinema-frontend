<template>
  <div class="menu-points" @click="toggleActive">
    <span></span>
    <span></span>
    <span></span>
    <UiPopover :active="active" @click.stop="() => {}">
      <slot />
    </UiPopover>
  </div>
</template>

<script setup>
const active = useUniqueState(false);

const toggleActive = () => {
  active.value = !active.value;
};
</script>
