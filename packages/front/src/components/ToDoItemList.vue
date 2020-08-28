<template>
  <div>
    <b-form-group>
      <b-list-group>
          <!-- TODO: convert to ToDoItem component -->
          <b-list-group-item class="p-3" v-for="task in taskList" :key="task.id">
              <div class="d-flex align-items-center">
                  <span>{{ task.name }}</span>
                  <div class="ml-auto">
                    <b-button title="Edit" variant="link" class="mr-1" @click="edit" >
                      <b-icon-pencil variant="primary" />
                    </b-button>
                    <b-button title="Edit" variant="link" @click="remove">
                      <b-icon-dash-circle-fill variant="danger" />
                    </b-button>
                  </div>
              </div>
          </b-list-group-item>
      </b-list-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'ToDoItemList',
  props: {
    taskList: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  watch: {
    taskList(n, o) {
      console.log(n, o); // n is the new value, o is the old value.
    },
  },
  methods: {
    edit() {
      alert('test');
    },
    remove() {
      alert('remove');
    },
  },
};
</script>
