<script setup lang="ts">
import { ref } from "vue";

const settinsIsOpen = ref(false);
defineExpose({ settinsIsOpen });
const settings = () => {
  const body = document.getElementById("main");
  if (body)
    if (settinsIsOpen.value) {
      body.classList.remove("overflow-hidden", "blur-sm");
      body.style.webkitFilter = "none";
      settinsIsOpen.value = false;
    } else {
      body.classList.add("overflow-hidden", "blur-sm");
      body.style.webkitFilter = "blur(2px)";
      settinsIsOpen.value = true;
    }
};
window.addEventListener("click", (e) => {
  const settingsModal = document.getElementById("settings-modal");
  const settingsBtn = document.getElementById("settings-btn");
  const settingsCloseBtn = document.getElementById("settings-close");

  if (
    (!(
      settingsModal?.contains(e.target as Node) || settingsModal == e.target
    ) &&
      settinsIsOpen.value &&
      !(settingsBtn?.contains(e.target as Node) || settingsBtn == e.target)) ||
    settingsCloseBtn == e.target ||
    settingsCloseBtn?.contains(e.target as Node)
  ) {
    settings();
  }
});
</script>
<template>
  <div
    class="h-14 bg-gray-200 dark:bg-bgDark flex items-center p-4 border-b-gray-300 dark:border-b-borderDark border-b"
  >
    <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
      $t("nav.title")
    }}</span>
    <div class="m-auto" />
    <span class="cursor-pointer" id="settings-btn" @click="settings"
      ><i
        class="fa-solid fa-gear fa-2xl dark:text-gray-300 text-gray-900 hover:text-gray-500 hover:dark:text-gray-100 duration-500 ease-in-out"
      ></i
    ></span>
  </div>
</template>
