<script setup lang="ts">
import { Ref, ref } from "vue";
import TaskItem from "../components/Tasks/TaskItem.vue";
defineProps<{ open: (a: string) => void }>();
const getTasks = () => {
  const tasks = window.utils.db.getAll().map((d) => d.data) as Array<{
    title: string;
    completed: boolean;
    date: number;
  }>;
  tasks.sort((x, y) => y.date - x.date);
  return tasks;
};
const tasks: Ref<Array<{ title: string; completed: boolean; date: number }>> =
  ref(getTasks());

const refreshTasks = () => {
  tasks.value = getTasks();
};
defineExpose({ refreshTasks });
</script>
<template>
  <div class="h-16 mx-16 py-3">
    <button
      class="modal-btn text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 p-2 rounded-lg dark:hover:bg-blue-700"
      @click="() => open('create')"
    >
      {{ $t("addTask") }}
    </button>
  </div>

  <div
    class="bg-[#ecedf6] dark:bg-[#202324] min-h-16 flex flex-col gap-2 p-4 rounded-lg mx-16"
  >
    <TaskItem
      v-for="task in tasks"
      :completed="task.completed"
      :date="task.date"
      :title="task.title"
      :open="open"
    />
  </div>
</template>
