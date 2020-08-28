<template>
  <div class="d-flex">
    <b-form-input v-model="name" placeholder="Create a new to-do..."
        size="lg" class="mr-2 flex-grow-0" />
    <b-button class="px-5" size="lg" variant="primary">Add</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
};
</script>
