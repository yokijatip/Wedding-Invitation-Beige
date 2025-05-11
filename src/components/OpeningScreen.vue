<template>
  <div
    v-if="!isOpened"
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#801336] text-white relative overflow-hidden"
  >
    <!-- Floral Hiasan -->
    <img src="/floral-top.png" class="absolute top-0 left-0 w-32 md:w-48" />
    <img
      src="/floral-bottom.png"
      class="absolute bottom-0 right-0 w-32 md:w-48"
    />

    <!-- Isi Undangan -->
    <h1 class="text-4xl md:text-6xl font-[Cinzel] tracking-wider mb-2">
      Ramdan & Nurul
    </h1>
    <p class="text-lg uppercase tracking-widest mb-6">
      We Invite You To Celebrate Our Marriage
    </p>
    <p class="text-sm tracking-wider">
      Selasa, 17 Juni 2025 - Sukawening, Ciwidey
    </p>

    <!-- Tombol -->
    <button
      @click="openInvitation"
      class="mt-10 px-6 py-3 bg-white text-[#801336] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
    >
      Buka Undangan
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSound } from "@vueuse/sound";

const isOpened = ref(false);

const { play } = useSound("/audio/Agape.mp3", {
  volume: 0.5,
  loop: true,
});

const openInvitation = () => {
  isOpened.value = true;
  play();
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap");
</style>
