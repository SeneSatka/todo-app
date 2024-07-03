import i18next from "i18next";
import i18NextVue from "i18next-vue";
import { Plugin } from "vue";
import * as tr from "../locales/tr.json";
import * as en from "../locales/en.json";
const plugin: Plugin = {
  install(app) {
    let lng = localStorage.getItem("lng");
    if (!lng) {
      localStorage.setItem("lng", "en");
      lng = "en";
    }
    i18next.init({
      lng: lng,
      interpolation: {
        escapeValue: false,
      },
      fallbackLng: false,
      resources: {
        tr: { translation: tr },
        en: { translation: en },
      },
    });
    app.use(i18NextVue, { i18next: i18next });
  },
};

export default plugin;
