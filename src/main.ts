import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./utils/router";
import languageSystem from "./utils/languageSystem";

const app = createApp(App);
const theme = localStorage.getItem("theme");
if (theme == "dark") {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
app.use(languageSystem);
app.use(router);

app.mount("#app").$nextTick(() => {
  window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
  });
});
