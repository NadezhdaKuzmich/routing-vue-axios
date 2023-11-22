<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p>
      If you have any questions, comments, or concerns, please feel free to
      reach out of us!
    </p>
    <div v-if="loading">
      <p>Loading contact information...</p>
    </div>
    <div v-else>
      <ul class="contact-list">
        <li><span class="bold">Email:</span> {{ contact?.email }}</li>
        <li><span class="bold">Phone:</span> {{ contact?.phone }}</li>
        <li>
          <span class="bold">Address:</span> {{ contact?.address?.city }},
          {{ contact?.address?.street }}, {{ contact?.address?.suite }}
        </li>
        <li><span class="bold">Zip:</span> {{ contact?.address?.zipcode }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Contact",
  setup() {
    const loading = ref(true);
    const contact = ref({});

    onMounted(async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        contact.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error(error);
        loading.value = false;
      }
    });
    return {
      loading,
      contact,
    };
  },
});
</script>

<style scoped>
.contact-container {
  display: flex;
  max-width: 460px;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  padding: 18vh 0;
  margin: auto;
  gap: 30px;
}
.contact-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px 0 0;
  gap: 20px;
}

.bold {
  font-weight: bold;
}
</style>