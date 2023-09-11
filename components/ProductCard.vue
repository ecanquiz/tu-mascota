<script setup>
// imports
import { ref } from "vue";
//import AppCountInput from "./AppCountInput.vue";

// props
const props = defineProps({
  product: Object,
});

// emits
defineEmits(["addToCart"])

// data
const count = ref(0);
</script>
<template>
  <li class="card">
    <!--img :src="`/images/${product.image}`" class="mb-3" width="300" /-->
    <NuxtImg
    class="bg-blue-500"
    :src="`/images/${product.image}`"
    width="300"
    height="300"
    fit="contain"
    />
    <div>
      <CartDesc :product="product"/>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
        <AppButton
          class="ml-2 primary py-1"
          @click="$emit('addToCart', count), (count = 0)"
        >
            Añadir al carrito
        </AppButton>
      </div>
      
    </div>
  </li>
</template>


<style scoped>
.card {
  @apply shadow rounded-lg p-4 text-center text-lg font-normal text-gray-700 bg-white sm:w-1/3 lg:w-1/4 flex-grow border;
}
.card img {
  @apply mx-auto;
}
</style>
