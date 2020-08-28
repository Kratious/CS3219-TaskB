<template>
  <div id="app">
    <div class="container-sm">
    <!-- <HelloWorld msg="Hello World!" /> -->
    <ToDoInput />
    <ToDoItemList class="mt-4" :taskList="taskList" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld';
import ToDoInput from '@/components/ToDoInput';
import ToDoItemList from '@/components/ToDoItemList';

export default {
  name: 'App',
  components: {
    // HelloWorld,
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
