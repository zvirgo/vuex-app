
<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label v-text="todo.text"></label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Rule the web" />
  </li>
</template>

<script>
export default {
    name:"Todo",
    props:['todo'],
    data(){
        return{}
    }
};
</script>

<style>
</style>