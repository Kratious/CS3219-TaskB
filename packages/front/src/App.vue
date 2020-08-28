<template>
  <div id="app">
    <div class="container-sm">
      <h1 class="display-3">To-do list</h1>
      <ToDoInput class="mt-4" />
      <ToDoItemList class="mt-4" :taskList="taskList" />
    </div>
  </div>
</template>

<script>
import ToDoInput from '@/components/ToDoInput';
import ToDoItemList from '@/components/ToDoItemList';

export default {
  name: 'App',
  components: {
    ToDoInput,
    ToDoItemList,
  },
  data() {
    return {
      taskList: [],
    };
  },
  mounted() {
    this.$http
      .get('/')
      .then((response) => {
        this.taskList = response.data;
        console.log(this.taskList[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
