<script setup>
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";

const productStore = useProductStore();
const cartStore = useCartStore();

cartStore.$onAction(({ name, store, args, after, onError }) => {
  if (name === "addItems") {
    after(() => {
      console.log(args[0]);
    });
    onError((error) => {
      console.log("Hello error: ", error.message);
    });
  }
});
productStore.fill();
</script>

<template>
  <div class="container p-10">
    <!--TheHeader /-->
    <!--div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.undo">Undo</AppButton>
      <AppButton class="ml-2" @click="cartStore.redo">Redo</AppButton>
    </div-->
    <ClientOnly v-if="productStore.products">
      <ul class="sm:flex flex-wrap gap-5">
        <ProductCard
          v-for="product in productStore.products"
          :key="product.name"
          :product="product"
          @addToCart="cartStore.addItems($event, product)"
        />
      </ul>
    </ClientOnly>
  </div>
</template>
