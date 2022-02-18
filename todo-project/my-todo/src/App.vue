<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :propsdata="todoItems" @removeTodo="removeTodo" ></TodoList>
    <TodoFooter @removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import TodoFooter from "../components/TodoFooter";

export default {
  name: 'app',

  data() {
    return {
      todoItems: []
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }

  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if(!localStorage.key(i).includes('log'))
          this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
