<template>
  <div id="app">
    <div class="container-sm">
      <h1 class="display-3">To-do list</h1>
      <ToDoInput class="mt-4" :add="add" />
      <ToDoItemList class="mt-4" :taskList="taskList" :edit="edit"
        :complete="complete" :remove="remove" />
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
    this.retrieve();
  },
  methods: {
    retrieve() {
      this.$http
        .get('/')
        .then((response) => {
          this.taskList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit(taskId, name) {
      this.$http.put('/', { id: taskId, name }).then((res) => {
        if (res.data.statusCode === 204) {
          this.retrieve();
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    complete(taskId, updateComplete) {
      this.$http.put('/complete', { id: taskId, completed: updateComplete }).then((res) => {
        if (res.data.statusCode === 204) {
          this.retrieve();
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    remove(taskId) {
      this.$http.delete('/', { params: { id: taskId } })
        .then((res) => {
          if (res.data.statusCode === 204) {
            this.retrieve();
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    add(name) {
      this.$http.post('/', { name }).then((res) => {
        if (res.data.statusCode === 204) {
          this.retrieve();
        }
      }).catch((error) => {
        console.log(error);
      });
    },
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
