<style src="todomvc-app-css/index.css" scoped>
</style>

<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <section class="todoapp">
          <header class="header">
            <h1>Todos</h1>
            <input
              class="new-todo"
              placeholder="What needs to be done?"
              autofocus
              @keydown.enter="addTodo"
            />
          </header>
          <!-- This section should be hidden by default and shown when there are todos -->
          <section class="main">
            <input
              id="toggle-all"
              class="toggle-all"
              type="checkbox"
              :checked="allChecked"
              @change="toggleAll({ done: !allChecked })"
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
              <!-- These are here just to show the structure of the list items -->
              <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
              <Todo
                v-for="(todo, index) in filteredTodo"
                :key="index"
                :todo="todo"
              />
            </ul>
          </section>
          <!-- This footer should be hidden by default and shown when there are todos -->
          <footer class="footer">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"
              ><strong>{{ remining }}</strong> item left</span
            >
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
              <li v-for="(val, key) in filters" :key="key">
                <a
                  :class="{ selected: visibility === key }"
                  :href="`#/` + key"
                  @click="visibility = key"
                  >{{ key }}</a
                >
              </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed" @click="clearCompleted">
              Clear completed
            </button>
          </footer>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Todo from "./Todo.vue";
const filters = {
  all: (todo) => todo,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done),
};
export default {
  name: "TodoList",
  components: { Todo },
  data() {
    return {
      visibility: "all",
      filters: filters,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodo() {
      return filters[this.visibility](this.todos);
    },
    remining() {
      return this.todos.filter((todo) => !todo.done).length;
    },
    allChecked() {
      return this.todos.every((todo) => todo.done);
    },
  },
  methods: {
    ...mapMutations(["clearCompleted","toggleAll"]),
    addTodo(e) {
      let text = e.target.value;
      if (text.trim()) {
        this.$store.commit("addTodo", { text });
      }
      e.target.value = "";
    },
  },
};
</script>

<style >
.footer[data-v-3de47834] {
  height: 40px !important;
}
</style>

