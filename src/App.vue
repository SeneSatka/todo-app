<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/static/Navbar.vue";
import Settings from "./components/static/Settings.vue";
import { Ref, ref } from "vue";
const res: Ref<{ settinsIsOpen: Ref<boolean> } | undefined> = ref();
res.value?.settinsIsOpen;
</script>

<template>
  <div id="main" class="dark:bg-black w-dvw h-dvh p-3 dark:text-white">
    <Navbar ref="res" />
    <div
      class="bg-gray-200 dark:bg-bgDark p-4 rounded-xl border-gray-300 dark:border-borderDark border h-[calc(100dvh-92px)]"
    >
      <RouterView />
    </div>
  </div>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    leave-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <Settings v-if="res?.settinsIsOpen" />
  </Transition>
</template>
