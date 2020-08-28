<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello World!" />
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    console.log(process.env.BASE_URL);
    axios
      .get('http://localhost:5000/')
      .then((response) => {
        this.info = response.data;
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
