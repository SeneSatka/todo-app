<script setup lang="ts">
import i18next from "i18next";
import { useTranslation } from "i18next-vue";
import { ref } from "vue";

const themeIsDark = ref(localStorage.getItem("theme") == "dark");
const lng = ref(localStorage.getItem("lng") ?? "en");
const theme = () => {
  const checkbox = document.getElementById("themeCheckbox") as HTMLInputElement;
  if (checkbox.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  themeIsDark.value = localStorage.getItem("theme") == "dark";
};
const { t } = useTranslation();
const language = () => {
  const select = document.getElementById("language") as HTMLInputElement;
  localStorage.setItem("lng", select.value);
  lng.value = localStorage.getItem("lng") ?? "en";

  i18next.changeLanguage(lng.value);

  console.log(t("title"));
  document.title = t("title");
};
const github = () => {
  window.utils.openBrowser("https://github.com/SeneSatka");
};
</script>
<template>
  <div class="">
    <div
      class="w-dvw dark:text-white text-gray-900 h-dvh flex items-center justify-center absolute right-0 top-0 p-40 transition-[visibility]"
    >
      <div
        id="settings-modal"
        class="w-96 h-60 gap-3 bg-gray-200 dark:bg-bgDark border-gray-300 dark:border-borderDark border p-4 rounded-xl flex flex-col shadow-2xl"
      >
        <div class="w-full flex">
          <span class="text-xl font-bold text-gray-900 dark:text-white">{{
            $t("settings.title")
          }}</span>
          <div class="m-auto" />
          <span id="settings-close"
            ><i
              class="fa-solid fa-xmark fa-xl dark:text-gray-300 text-gray-900 hover:text-gray-500 hover:dark:text-gray-100 duration-500 ease-in-out"
            ></i
          ></span>
        </div>

        <label class="inline-flex items-center cursor-pointer px-2">
          <span
            class="mr-3 text-sm font-medium text-gray-900 dark:text-white"
            >{{ $t("settings.darkTheme") }}</span
          >
          <div class="m-auto" />
          <input
            type="checkbox"
            value=""
            id="themeCheckbox"
            class="sr-only peer"
            @change="theme"
            :checked="themeIsDark"
          />
          <div
            class="relative w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
        <div class="flex flex-row px-2 items-center">
          <label
            for="language"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {{ $t("settings.language.title") }}</label
          >
          <div class="m-auto" />
          <select
            @change="language"
            id="language"
            class="w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :selected="lng == 'en'" value="en">
              {{ $t(`settings.language.en`) }}
            </option>
            <option :selected="lng == 'tr'" value="tr">
              {{ $t(`settings.language.tr`) }}
            </option>
          </select>
        </div>
        <div class="m-auto" />
        <div id="footer">
          <span
            @click="github"
            class="underline cursor-pointer text-gray-900 dark:text-white"
            >{{ $t("settings.footer") }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
