<template>
  <div class="bg-beige min-h-screen overflow-hidden relative">
    <!-- Image Corner Left Bottom -->
    <div
      class="absolute bottom-0 left-0 w-1/2 md:w-1/4 max-w-xs z-10 rotate-45"
    >
      <img :src="imageFlower1" alt="flower" class="w-full h-auto" />
    </div>

    <!-- Image Corner Right Top -->
    <div class="absolute top-0 right-0 w-1/3 md:w-1/4 max-w-xs z-10 rotate-200">
      <img :src="imageFlower2" alt="flower" class="w-full h-auto" />
    </div>

    <Content>
      <section class="">
        <div class="flex flex-col items-center md:py-6 py-28">
          <!-- Title Start -->
          <h1 class="font-tenor text-4xl md:text-7xl text-dark-green">
            THE WEDDING
          </h1>
          <!-- Title End -->

          <!-- Description Start -->
          <p
            class="text-center font-tenor text-md md:text-2xl px-6 mt-8 md:w-2xl text-dark-green"
          >
            Kp.Babakan Cijeruk Rt/02 Rw/13 Desa Sukawening Kecamatan Ciwidey,
            Kabupaten Bandung
          </p>
          <!-- Description End -->

          <!-- Google Maps Start -->
          <!-- Google Maps End -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";

let imageFlower1 = "/src/assets/location_flowe_1.png";
let imageFlower2 = "/src/assets/location_flowe_2.png";
</script>

<style></style>
