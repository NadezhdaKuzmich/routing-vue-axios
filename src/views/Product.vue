<template>
  <section>
    <div v-if="loading">
      <p>Loading product information...</p>
    </div>
    <div v-else>
      <article class="product">
        <div class="product-description">
          <h3>{{ product?.title }}</h3>
          <div class="product-ditails">
            <p>
              Price: <span class="accent">{{ product?.price }}$</span>
            </p>
            <p>
              Rate: <span class="accent">{{ product?.rating?.rate }}</span>
            </p>
          </div>
          <p>
            <span class="bold">Description:</span>{{ product?.description }}
          </p>
        </div>
        <div class="product-visual">
          <img class="product-img" :src="product?.image" alt="`image-${id}`" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Product",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const loading = ref(true);
    const product = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${props.id}`
        );
        product.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error(error);
        loading.value = false;
      }
    });

    return {
      loading,
      product,
    };
  },
});
</script>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px 0;
  gap: 40px;
}

.product div {
  max-width: calc(100% / 2 - 20px);
  min-width: 300px;
  width: 100%;
}

.product-visual {
  display: flex;
  max-height: 500px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
}
.product-img {
  display: block;
  width: 80%;
  height: 80%;
  min-height: 400px;
  object-fit: contain;
  margin: auto;
}

.product-description {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 0 40px;
  gap: 40px;
}

.product-description h3 {
  font-size: 36px;
}

.product-ditails {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.product-ditails p,
.bold {
  font-weight: 600;
  font-size: 22px;
}

.accent {
  font-size: 22px;
  color: #2d7395;
}

.bold {
  display: block;
  margin: 0 0 20px;
}
</style>