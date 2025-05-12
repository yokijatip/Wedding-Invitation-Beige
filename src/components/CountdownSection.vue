<template>
  <div class="bg-white md:min-h-screen relative overflow-hidden">
    <!-- Left Flower Image -->
    <div
      class="absolute left-0 top-0 w-1/3 md:w-4/12 z-10 rotate-180"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <img
        :src="imageFlower1"
        alt="Left flower decoration"
        class="w-full h-auto"
      />
    </div>

    <!-- Right Flower Image -->
    <div
      class="absolute -right-10 md:-right-30 -top-10 w-1/2 md:w-[40%] z-80 rotate-90"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img
        :src="imageFlower2"
        alt="Right flower decoration"
        class="w-full h-auto"
      />
    </div>

    <Content>
      <section
        class="py-16 px-6 flex flex-col items-center justify-between md:h-screen"
      >
        <div
          data-aos="fade-up"
          class="w-full md:h-screen justify-between flex flex-col max-w-4xl text-center z-20"
        >
          <!-- Countdown Title -->
          <h1 class="font-new-icon text-burgundy text-4xl md:text-8xl mb-12">
            COUNTDOWN
          </h1>

          <!-- Thank You Message -->
          <p
            class="text-dark-green text-sm md:text-2xl font-tenor tracking-wider mb-16"
          >
            THANK YOU FOR BEING A PART OF<br />
            OUR SPECIAL DAY
          </p>

          <!-- Countdown Timer -->
          <div class="grid grid-cols-4 gap-4 md:gap-8 mt-8">
            <!-- Days -->
            <div
              class="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="text-3xl md:text-5xl font-tenor text-burgundy">
                {{ days }}
              </div>
              <div class="text-sm md:text-2xl font-tenor text-dark-green mt-2">
                DAYS
              </div>
            </div>

            <!-- Hours -->
            <div
              class="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="text-3xl md:text-5xl font-tenor text-dark-green">
                {{ hours }}
              </div>
              <div class="text-sm md:text-2xl font-tenor text-dark-green mt-2">
                HOURS
              </div>
            </div>

            <!-- Minutes -->
            <div
              class="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="text-3xl md:text-5xl font-tenor text-burgundy">
                {{ minutes }}
              </div>
              <div class="text-sm md:text-2xl font-tenor text-dark-green mt-2">
                MINUTES
              </div>
            </div>

            <!-- Seconds -->
            <div
              class="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="text-3xl md:text-5xl font-tenor text-dark-green">
                {{ seconds }}
              </div>
              <div class="text-sm md:text-2xl font-tenor text-dark-green mt-2">
                SECONDS
              </div>
            </div>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Content from "/layout/Content.vue";

import AOS from "aos";
import "aos/dist/aos.css";

// Konfigurasi AOS
AOS.init({
  duration: 1000, // Durasi animasi default (dalam milidetik)
  easing: "ease", // Kurva interpolasi
  once: true, // Setiap elemen hanya di-animate sekali saat masuk ke dalam viewport
});

let imageFlower1 = "/images/countdown_flower_1.png";
let imageFlower2 = "/images/countdown_flower_2.png";

// Set your wedding date (format: year, month [0-11], day, hour, minute)
const weddingDate = new Date(2025, 5, 17, 12, 0, 0); // June 17, 2025 at 12:00

// Countdown timer values
const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

// Timer interval
let countdownInterval = null;

// Calculate remaining time
const calculateTimeRemaining = () => {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference > 0) {
    // Calculate days, hours, minutes, seconds
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Format the values to always display two digits
    days.value = d < 10 ? `0${d}` : `${d}`;
    hours.value = h < 10 ? `0${h}` : `${h}`;
    minutes.value = m < 10 ? `0${m}` : `${m}`;
    seconds.value = s < 10 ? `0${s}` : `${s}`;
  } else {
    // Wedding day has arrived!
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";

    // Clear the interval once the countdown is complete
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
  }
};

onMounted(() => {
  // Calculate initial time
  calculateTimeRemaining();

  // Update the countdown every second
  countdownInterval = setInterval(calculateTimeRemaining, 1000);
});

onBeforeUnmount(() => {
  // Clear the interval when component is unmounted to prevent memory leaks
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style scoped>
.text-burgundy {
  color: #800020;
}

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
