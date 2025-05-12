import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount("#app");

AOS.init({
  // Konfigurasi global
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
