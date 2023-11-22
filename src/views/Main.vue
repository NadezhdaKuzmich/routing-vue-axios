<template>
  <div class="main-intro">
    <h1>Welcome to our Shop!</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.main-intro {
  font-size: 58px;
  text-align: center;
  padding: 25vh 0;
}
</style>