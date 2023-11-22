<template>
  <section>
    <h1>Our Products</h1>
    <div v-if="loading">
      <p>Loading product information...</p>
    </div>
    <div v-else>
      <ul class="product-list">
        <template v-for="product in products" :key="product.id">
          <li>
            <div class="product-visual">
              <img
                class="product-img-sm"
                :src="product?.image"
                alt="`image-${product.id}`" />
            </div>
            <div class="link-container">
              <router-link :to="`/products/${product.id}`">
                {{ product.title }}
              </router-link>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProductList",
  setup() {
    const loading = ref(true);
    const products = ref({});

    onMounted(async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      products.value = response.data;
      loading.value = false;
    });

    return {
      loading,
      products,
    };
  },
});
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
  gap: 20px;
}

.product-list li {
  display: flex;
  width: calc(100% / 3 - 14px);
  min-height: 365px;
  min-width: 300px;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 1px 4px 12px #4a4d5a42;
  border-radius: 8px;
  padding: 20px 40px;
  gap: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.product-list li:hover {
  transform: scale(1.02);
}

.product-visual {
  width: 100%;
  height: 250px;
  background: #fff;
  overflow: hidden;
}

.product-img-sm {
  height: 100%;
  object-fit: contain;
}

.link-container {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>