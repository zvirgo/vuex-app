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
              autocomplete="off"
              @keypress="addTodo"
            />
          </header>
          <!-- This section should be hidden by default and shown when there are todos -->
          <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
              <Todo v-for="todo in todos" :key="todo.index" :todo="todo" />
            </ul>
          </section>
          <!-- This footer should be hidden by default and shown when there are todos -->
          <footer class="footer">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"><strong>0</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
              <li>
                <a class="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed">Clear completed</button>
          </footer>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  name: "TodoList",
  components: { Todo },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
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

