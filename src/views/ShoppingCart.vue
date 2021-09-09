<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>shopping Cart</h1>
        <hr />
        <h2>Products</h2>
      </v-col>
      <v-col
        cols="4"
        v-for="productItem in shoppingItems"
        :key="productItem.id"
      >
        <ProductList :productItem="productItem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { shoppingItems } from "../assets/data/db";
import ProductList from "../components/ProductList.vue";
export default {
  components: { ProductList },
  data() {
    return {
      shoppingItems: shoppingItems,
    };
  },
};
</script>

<style>
</style>