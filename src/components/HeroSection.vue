<template>
  <div class="bg-maroon">
    <section
      class="md:items-center flex flex-col md:gap-4 md:flex-row justify-between min-h-screen md:min-h-screen"
    >
      <!-- LEFT CONTENT START -->
      <div
        class="w-full flex flex-col items-center py-4 md:py-12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <!-- Name Start -->
        <div
          class="text-beige"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <h1 class="text-6xl md:text-[8rem] font-pinyon">
            <span class="text-[8rem] md:text-[12rem] font-pinyon">G</span>hani
          </h1>
          <br />
          <p class="text-4xl md:text-6xl font-pinyon -mt-12">
            and
            <span class="text-6xl md:text-[8rem] font-pinyon">
              <span class="text-[8rem] md:text-[12rem] font-pinyon">W</span>
              <span>iwit</span>
            </span>
          </p>
        </div>
        <!-- Name End -->

        <!-- Location Start -->
        <div
          class="text-gray-200 font-tenor md:text-lg text-sm text-center items-center flex flex-col px-6 md:px-0"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h2>WE INVITE YOU TO CELEBRATE OUR MARRIAGE</h2>
        </div>

        <!-- Venue -->
        <div
          class="flex flex-row font-tenor text-beige md:text-lg text-lg mt-4 items-center justify-evenly px-6 md:px-0 w-full"
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="1000"
        >
          <!-- Left -->
          <div class="text-center">
            <p>MINGGU <br /></p>
            <p>06 JULI 2025</p>
          </div>

          <div class="border-l border-beige h-12"></div>

          <!-- Right -->
          <div class="text-center">
            <p>CIPTAHARJA <br /></p>
            <p>BANDUNG BARAT</p>
          </div>
        </div>
        <!-- Location End -->
      </div>
      <!-- LEFT CONTENT END -->

      <!-- RIGHT CONTENT START -->
      <div class="w-full h-full flex flex-col items-center">
        <!-- Image Container -->
        <!-- <div
            class="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
            data-aos="slide-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          > -->
        <img
          src="/images/pengantin2.jpg"
          alt="Pengantin"
          class="w-full h-auto object-cover rounded-t-[100%] md:pt-8"
        />
        <!-- </div> -->
        <!-- Image End -->
      </div>
      <!-- RIGHT CONTENT END -->
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    once: true, // animasi hanya berjalan sekali saat scroll
    offset: 120, // offset ketika animasi dimulai
    duration: 1000, // durasi default
    easing: "ease-in-out", // efek easing default
    delay: 0, // delay default
  });
});
</script>

<style></style>
