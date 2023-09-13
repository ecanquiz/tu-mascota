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
  <div class="">
    <div>{{ product.name }} - {{ product.presentation }} - {{ product.phase }}</div>
    <div>{{product.saleType}} - {{product.measure}} - <span class="text-green-500">${{product.price}}</span></div>
  </div>
</template>

<style scoped>

</style>

