<script setup lang="ts"></script>
<template>
  <div
    class="z-50 w-dvw dark:text-white text-gray-900 h-dvh flex items-center justify-center absolute right-0 top-0 p-40"
  >
    <div
      id="modal"
      class="z-50 w-96 h-auto gap-3 bg-gray-200 dark:bg-bgDark border-gray-300 dark:border-borderDark border p-4 rounded-xl flex flex-col shadow-2xl"
    >
      <slot></slot>
    </div>
  </div>
</template>
