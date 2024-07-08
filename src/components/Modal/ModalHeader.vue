<script setup lang="ts">
defineProps<{ title: string }>();
</script>
<template>
  <div class="w-full flex">
    <span class="text-xl font-bold text-gray-900 dark:text-white">{{
      title
    }}</span>
    <div class="m-auto" />
    <span id="modal-close"
      ><i
        class="fa-solid fa-xmark fa-xl dark:text-gray-300 text-gray-900 hover:text-gray-500 hover:dark:text-gray-100 duration-500 ease-in-out"
      ></i
    ></span>
  </div>
</template>
