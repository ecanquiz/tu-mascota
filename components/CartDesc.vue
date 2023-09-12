<script setup lang="ts">
//@ts-nocheck

type Product = {
  name: string;
  image: string;
  price: number;
  presentation: string;
  saleType: string;
}

defineProps<{
  product: Product  
}>()
</script>
<template>
  <div class="">
    <div>{{ product.name }} - {{ product.presentation }}</div>
    <div>{{product.saleType}} - <span class="text-green-500">${{product.price}}</span></div>
  </div>
</template>

<style scoped>

</style>

