<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      contain
      :src="productItem.image"
    >
    </v-img>
    <v-card-title>{{ productItem.title }}</v-card-title>
    <v-card-text class="text--primary">
      <div class="my-4 text-subtitle-1">$ {{ productItem.price }}</div>
      <div class="my-4 text-subtitle-1"> {{ productItem.inventory }}</div>
      <v-btn
        rounded
        color="success"
        :disabled="productItem.inventory === 0 ? true : false"
        @click="addToCard(productItem)"
        >Add to cart</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "ProductList",
  data() {
    return {};
  },
  props: ["productItem"],
  methods:{
    ...mapActions(['addToCard'])
  }
};
</script>

<style>
</style>