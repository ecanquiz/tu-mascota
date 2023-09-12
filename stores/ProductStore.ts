import { defineStore } from "pinia";

type Product = {
  name: string;
  image: string;
  price: number;
  presentation: string;
  saleType: string;
}

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default;
    },
  },
  // getters
});




