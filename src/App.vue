<script setup lang="ts">
import Navbar from "./components/static/Navbar.vue";
import Settings from "./components/static/Settings.vue";
import { Ref, provide, ref } from "vue";
import TaskCreateModal from "./components/Tasks/TaskCreateModal.vue";
import Home from "./views/Home.vue";
import ModalContainer from "./components/Modal/ModalContainer.vue";
import TaskEditModal from "./components/Tasks/TaskEditModal.vue";
import TaskDeleteModal from "./components/Tasks/TaskDeleteModal.vue";

const navres: Ref<{ settinsIsOpen: Ref<boolean> } | undefined> = ref();
const homeRes: Ref<{ refreshTasks: () => void } | undefined> = ref();
const refreshTasks = () => {
  close();
  homeRes.value?.refreshTasks();
};

const modalIsOpen = ref(false);
const modalContent = ref("");
const open = (contentName: string) => {
  const body = document.getElementById("main");
  if (body) {
    modalContent.value = contentName;
    body.classList.add("overflow-hidden", "blur-sm");
    body.style.webkitFilter = "blur(2px)";
    modalIsOpen.value = true;
  }
};
const close = () => {
  const body = document.getElementById("main");
  if (body) {
    modalContent.value = "";
    body.classList.remove("overflow-hidden", "blur-sm");
    body.style.webkitFilter = "none";
    modalIsOpen.value = false;
  }
};

window.addEventListener("click", (e) => {
  const taskModal = document.getElementById("modal");
  const taskCloseBtn = document.getElementById("modal-close");
  if (
    ((!(taskModal?.contains(e.target as Node) || taskModal == e.target) &&
      modalIsOpen.value) ||
      taskCloseBtn == e.target ||
      taskCloseBtn?.contains(e.target as Node)) &&
    !(e?.target as HTMLElement).matches(".modal-btn") &&
    !(e?.target as HTMLElement).parentElement?.matches(".modal-btn")
  ) {
    close();
  }
});
const editingTaskId = ref(0);
provide("editingTaskId", editingTaskId);
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    leave-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <ModalContainer v-if="modalIsOpen">
      <TaskEditModal :func="refreshTasks" v-if="modalContent == 'edit'" />
      <TaskDeleteModal :func="refreshTasks" v-if="modalContent == 'delete'" />
      <TaskCreateModal :func="refreshTasks" v-if="modalContent == 'create'" />
    </ModalContainer>
  </Transition>
  <div id="main" class="dark:bg-black w-dvw h-dvh dark:text-white">
    <Navbar ref="navres" />
    <div class="bg-gray-200 dark:bg-bgDark p-4 h-[calc(100dvh-56px)]">
      <Home ref="homeRes" :open="open" />
    </div>
  </div>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    leave-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <Settings v-if="navres?.settinsIsOpen" />
  </Transition>
  <!-- <Transition
    enter-active-class="transition duration-500 ease-out"
    leave-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <TaskCreateModal v-if="tcRes?.modalIsOpen" :func="taskCreated" />
  </Transition> -->
</template>
