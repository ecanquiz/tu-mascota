<script setup>
defineProps({
  product: { type: Object },
});
</script>
<template>
  <div class="">
    <div>{{ product.name }} - {{ product.presentation }}</div>
    <div>{{product.saleType}} - <span class="text-green-500">${{product.price}}</span></div>
  </div>
</template>

<style scoped>

</style>

