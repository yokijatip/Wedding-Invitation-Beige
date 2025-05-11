<script setup>
import { ref } from "vue";
import { useSound } from "@vueuse/sound";

import HeroSection from "./components/HeroSection.vue";
import LocationSection from "./components/LocationSection.vue";
import QuotesSection from "./components/QuotesSection.vue";
import MeetTheCoupleSection from "./components/MeetTheCoupleSection.vue";
import ScheduleSection from "./components/ScheduleSection.vue";
import CountdownSection from "./components/CountdownSection.vue";
import GiftSection from "./components/GiftSection.vue";
import Footer from "./components/Footer.vue";

// Sound
const { play } = useSound("/audio/Agape.mp3", {,
  loop: true,
});
const isOpened = ref(false);

const openInvitation = () => {
  isOpened.value = true;
  play();
};
</script>

<template>
  <!-- Opening Section -->
  <transition name="fade" mode="out-in">
    <div
      v-if="!isOpened"
      key="opening"
      class="bg-[#fefaee] flex flex-col md:flex-row items-center justify-center px-6 text-center md:text-left"
    >
      <div class="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="/images/opening_flower.png"
          alt="Bunga"
          class="w-[100%] md:w-[90%] object-contain"
        />
      </div>
      <div class="md:w-1/2 items-center flex flex-col">
        <h1 class="text-5xl md:text-9xl text-dark-green font-frunchy">
          Ramdan <br />
          <span class="text-[#b57b45]">&</span>
          Nurul
        </h1>
        <p
          class="text-[#5e5e5e] text-lg md:text-xl tracking-wide font-tenor my-4"
        ></p>

        <button
          @click="openInvitation"
          class="mt-4 inline-block bg-[#b57b45] hover:bg-[#a86f3c] text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 font-new-icon text-2xl"
        >
          Buka Undangan
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else key="main-content">
      <HeroSection />
      <LocationSection />
      <QuotesSection />
      <MeetTheCoupleSection />
      <ScheduleSection />
      <CountdownSection />
      <GiftSection />
      <Footer />
    </div>
  </transition>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

h1 {
  font-family: "Playfair Display", serif;
}
</style>
