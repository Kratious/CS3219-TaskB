<template>
  <div>
    <b-form-group>
      <b-list-group class="task-list">
          <!-- TODO: convert to ToDoItem component -->
          <b-list-group-item class="p-3"
            :class="{ completed: task.completed}"
            v-for="task in taskList" :key="task.id">
              <div class="d-flex align-items-center">
                  <b-form-checkbox
                    @change="complete(task.id, !task.completed)"
                    v-model="task.completed"
                    name="completed"
                  />
                  <p class="h5 m-0">{{ task.name }}</p>
                  <div class="ml-auto">
                    <b-button title="Edit" variant="link" class="mr-1"
                      @click="edit(task.id,'name')" >
                      <b-icon-pencil variant="primary" />
                    </b-button>
                    <b-button title="Edit" variant="link" @click="remove(task.id)">
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
    edit: { type: Function },
    complete: { type: Function },
    remove: { type: Function },
  },
};
</script>

<style scoped>
.task-list > .completed {
  color: #d9d9d9;
  text-decoration: line-through;
}
</style>
