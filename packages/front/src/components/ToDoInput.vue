<template>
  <b-form id="newTodo" @submit.prevent="add(name); resetName();">
    <div class="d-flex">
      <b-form-input v-model="name" placeholder="Create a new to-do..."
          size="lg" class="mr-2 flex-grow-0" />
      <b-button class="px-5" size="lg" variant="primary" type="submit">Add</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  props: {
    add: { type: Function },
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    resetName() {
      this.name = '';
    },
  },
};
</script>
