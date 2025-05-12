<template>
  <div class="min-h-screen bg-white overflow-hidden relative">
    <!-- Image Corner Left Bottom (bergerak kiri-kanan) -->
    <div
      class="absolute -bottom-3 md:-bottom-5 left-28 md:left-58 w-1/3 md:w-1/6 max-w-xs z-10 scale-x-[-1] animate-sway-slow flower-animation-left rotate-40 md:rotate-50"
    >
      <img :src="imageFlower1" alt="flower" class="w-full h-auto" />
    </div>

    <!-- Image Corner Right Top (bergerak kiri-kanan) -->
    <div
      class="absolute -top-85 md:top-50 md:-bottom-20 -right-48 md:-right-30 w-[50%] md:w-1/3 max-w-xs z-10 rotate-120 md:rotate-310 animate-sway-slow flower-animation-left"
    >
      <img :src="imageFlower2" alt="flower" class="w-full h-auto" />
    </div>

    <!-- Content Section -->
    <Content>
      <section>
        <div
          class="flex flex-col items-center h-screen justify-center py-4 md:py-12"
        >
          <!-- Title -->
          <h1
            class="font-maharlika text-4xl md:text-8xl text-center text-dark-green"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Assalamu'alaikum<br />wr.wb
          </h1>

          <!-- Description -->
          <div
            class="flex flex-col md:flex-row items-center gap-4 justify-evenly text-dark-green w-full mt-12"
          >
            <!-- Left: Bride -->
            <div
              class="text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 class="font-tenor text-3xl md:text-5xl">Nurul Fauziah</h2>
              <p class="font-cinzel text-sm md:text-lg my-4 md:my-8">
                Putri dari
              </p>
              <h3 class="font-maharlika text-lg md:text-3xl">
                Bpk. Dama Koswara
              </h3>
              <p>&</p>
              <h3 class="font-maharlika text-lg md:text-3xl">
                Ibu. Tuti Kurniawati
              </h3>
            </div>

            <!-- Middle: Dengan -->
            <div data-aos="zoom-in" data-aos-duration="1000">
              <p class="font-pinyon text-3xl">Dengan</p>
            </div>

            <!-- Right: Groom -->
            <div
              class="text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 class="font-tenor text-3xl md:text-5xl">
                Ramdan Faisal<br />Faturohman
              </h2>
              <p class="font-cinzel text-sm md:text-lg my-4 md:my-8">
                Putra dari
              </p>
              <h3 class="font-maharlika text-lg md:text-3xl">Bpk. Sumarna</h3>
              <p>&</p>
              <h3 class="font-maharlika text-lg md:text-3xl">
                Ibu. Kokom Komariah
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Content from "/layout/Content.vue";

let imageFlower1 = "/images/meet_the_couple_flower_1.png";
let imageFlower2 = "/images/meet_the_couple_flower_2.png";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
/* Jika butuh tambahan custom style */
/* Flower animation styles */
.flower-animation-left {
  animation: floatLeft 6s ease-in-out infinite;
  transform-origin: bottom left;
}

.flower-animation-right {
  animation: floatRight 7s ease-in-out infinite;
  transform-origin: top right;
}

@keyframes floatLeft {
  0% {
    transform: rotate(45deg) translate(0, 0);
  }
  50% {
    transform: rotate(43deg) translate(5px, -5px);
  }
  100% {
    transform: rotate(45deg) translate(0, 0);
  }
}

@keyframes floatRight {
  0% {
    transform: rotate(200deg) translate(0, 0);
  }
  50% {
    transform: rotate(202deg) translate(-5px, 5px);
  }
  100% {
    transform: rotate(200deg) translate(0, 0);
  }
}
</style>
