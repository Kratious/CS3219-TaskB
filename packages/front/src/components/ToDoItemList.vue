<template>
  <div>
    <b-form-group>
      <b-list-group class="task-list">
          <!-- TODO: convert to ToDoItem component -->
          <b-list-group-item v-for="task in taskList" :key="task.id"
            class="p-3 task-item"
            :class="{ completed: task.completed, editing: task == editedTask }">
              <div class="align-items-center view">
                  <b-form-checkbox
                    @change="complete(task.id, !task.completed)"
                    v-model="task.completed"
                    name="completed"
                  />
                  <label class="h5 m-0 task-name" @dblclick="editTask(task)">{{ task.name }}</label>
                  <div class="ml-auto options">
                    <b-button title="Edit" variant="link" class="mr-1 edit"
                      @click="editTask(task)" >
                      <b-icon-pencil />
                    </b-button>
                    <b-button title="Remove" variant="link" class="remove"
                      @click="remove(task.id)" >
                      <b-icon-x-circle />
                    </b-button>
                  </div>
              </div>
              <b-form-input
                class="edit-input"
                type="text"
                v-model="task.name"
                v-todo-focus="todo == editedTodo"
                size="lg"
                @blur="doneEdit(task)"
                @keyup.enter="doneEdit(task)"
                @keyup.esc="cancelEdit(task)"
              />
          </b-list-group-item>
      </b-list-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'ToDoItemList',
  data() {
    return {
      editedTask: null,
    };
  },
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
  methods: {
    editTask(task) {
      this.editedTask = task;
    },

    doneEdit(task) {
      if (!this.editedTask) {
        return;
      }
      this.editedTask = null;
      this.edit(task.id, task.name.trim());
      // retrieve new.
      task.name = task.name.trim(); // eslint-disable-line no-param-reassign
      if (!task.name) {
        this.remove(task.id);
        // this.removeTask(task);
      }
    },

    cancelEdit() {
      this.editedTask = null;
    },
  },
  directives: {
    'todo-focus': (el, binding) => {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<style scoped>
.task-list .task-item .view {
  display: flex;
}

.task-list .task-item .options {
  visibility: hidden;
}

.task-list .task-item .task-name {
  padding: 10px 5px;
  flex-grow: 1;
}

.task-list .task-item .options .edit {
  color: dodgerblue;
}

.task-list .task-item .options .edit:hover {
  color: royalblue;
}

.task-list .task-item .options .remove {
  color: red;
}

.task-list .task-item .options .remove:hover {
  color: darkred;
}

.task-list .task-item:hover .options {
  visibility: visible
}

.task-list .task-item .edit-input {
  display: none;
}

.task-list .task-item.editing .edit-input {
  display:block;
  flex-grow: 1;
}

.task-list .task-item.editing .view {
  display: none;
}

.task-list .task-item.completed {
  color: gray;
  text-decoration: line-through;
}

</style>
