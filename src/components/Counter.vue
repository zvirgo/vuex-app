<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Clicked: {{ count }} times, count is {{evenOrOdd}}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn @click="increment" color="primary" fab small dark class="mr-2">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn @click="decrement" color="warning" fab small dark class="mr-2">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn @click="incrementOfOdd" rounded color="pink" dark class="mr-2"
          >Increament if Odd
        </v-btn>
        <v-btn @click="incrementAsync" rounded color="teal" dark class="mr-2">
          Increament async
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Counter",
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    ...mapMutations(["decrement", "increment"]),
    ...mapActions(['incrementOfOdd','incrementAsync'])
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize !important;
}
</style>
