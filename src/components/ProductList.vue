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
      <div>{{ productItem.category }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name:'ProductList',
  data(){
    return{

    }
  },
  props:['productItem']
};
</script>

<style>
</style>