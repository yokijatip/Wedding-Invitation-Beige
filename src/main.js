import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

AOS.init({
  // Konfigurasi global
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
