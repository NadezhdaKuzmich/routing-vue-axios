<template>
  <div class="container">
    <Header />
    <CustomLayout>
      <router-view />
    </CustomLayout>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CustomLayout from "./components/CustomLayout.vue";

export default {
  name: "App",
  components: { Header, CustomLayout },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif;
  font-size: 18px;
  color: #313151;
  min-height: 100vh;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  background-repeat: no-repeat;
}

ul {
  list-style: none;
}

a {
  font-weight: bold;
  color: #313151;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: #489cc6;
}

img {
  max-width: 100%;
  object-fit: cover;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
}
</style>