<script setup lang="ts">
//@ts-nocheck

type Product = {
  name: string;
  image: string;
  price: number;
  presentation: string;
  saleType: string;
  phase: string;
  measure: string;
}

defineProps<{
  product: Product  
}>()
</script>
<template>
  <div class="bg-blue-100">
    <div class="flex bg-blue-300">
      <span class="flex-auto m-1 p-1 self-center text-red-700">{{ product.name.toUpperCase() }}</span>
      <span v-if="product.phase" class="flex-auto m-1 p-1 self-center text-sm text-gray-700"><i>{{ product.phase }}</i></span>
      <span class="flex-auto m-1 p-1 self-center text-blue-500 text-sm">{{ product.presentation }}</span>
    </div>
    
    <div class="flex bg-blue-200">
      <span class="flex-auto m-1 p-1 self-center text-sm text-yellow-800">{{product.saleType}}</span>
      <span v-if="product.spec" class="flex-auto m-1 p-1 self-center text-sm">{{product.spec}}</span>
    </div>
    
    <div class="flex mx-20">      
      <span class="flex-auto m-1 p-1 self-center">{{product.measure}}</span>
      <span class="flex-auto m-1 p-1 self-center">por</span>
      <span class="flex-auto m-1 p-1 self-center text-green-500">${{product.price}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>

