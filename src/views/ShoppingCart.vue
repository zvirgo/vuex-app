<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>shopping Cart</h1>
        <hr />
        <h2>Products</h2>
      </v-col>
      <v-col cols="3" v-for="productItem in allProducts" :key="productItem.id">
        <ProductList :productItem="productItem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "../components/ProductList.vue";
export default {
  components: { ProductList },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  created() {
    this.$store.dispatch("getAllProducts");
  },
};
</script>

<style>
</style>