<template>
  <div class="custom-layout">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomLayout",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>