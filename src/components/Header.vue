<template>
  <header>
    <nav class="header-nav">
      <ul>
        <li v-for="page in pages" :key="page.path">
          <router-link :to="page.path">{{ page.title }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const pages = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Products",
        path: "/products",
      },
      {
        title: "Contact",
        path: "/contact",
      },
    ];
    return {
      pages,
    };
  },
});
</script>

<style scoped>
.header-nav {
  padding: 40px 0;
}
.header-nav ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  justify-items: center;
  align-content: center;
  gap: 30px;
}
</style>