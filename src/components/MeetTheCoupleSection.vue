<template>
  <div class="min-h-screen bg-white overflow-hidden relative">
    <!-- Image Corner Left Bottom -->
    <div
      class="absolute bottom-0 md:left-12 w-1/3 md:w-1/6 max-w-xs z-10 scale-x-[-1]"
    >
      <img :src="imageFlower1" alt="flower" class="w-full h-auto" />
    </div>

    <!-- Image Corner Right Top -->
    <div
      class="absolute -top-6 right-8 w-1/3 md:w-1/3 max-w-xs z-10 rotate-180"
    >
      <img :src="imageFlower2" alt="flower" class="w-full h-auto" />
    </div>

    <Content>
      <section>
        <div class="flex flex-col items-center py-4 md:py-12">
          <!-- Title Start -->
          <h1
            class="font-maharlika text-4xl md:text-8xl text-center text-dark-green"
          >
            Assalamu'alaikum<br />wr.wb
          </h1>
          <!-- Title End -->

          <!-- Description Start -->
          <div
            class="flex flex-col md:flex-row items-center gap-4 justify-evenly text-dark-green w-full mt-12"
          >
            <!-- Left Content Start -->
            <div class="text-center">
              <h2 class="font-tenor text-3xl md:text-5xl">
                Nurul<br />Fauziah
              </h2>
              <p class="font-cinzel text-sm md:text-lg my-4 md:my-8">
                Putri dari
              </p>
              <h3 class="font-maharlika text-xl md:text-3xl">Dama Koswara</h3>
              <p>&</p>
              <h3 class="font-maharlika text-xl md:text-3xl">
                Tuti Kurniawati
              </h3>
            </div>
            <!-- Left Content End -->

            <!-- Middle Content Start -->
            <div>
              <p class="font-pinyon text-3xl">Dengan</p>
            </div>
            <!-- Middle Content End -->

            <!-- Right Content Start -->
            <div class="text-center z-30">
              <h2 class="font-tenor text-3xl md:text-5xl">
                Ramdan Faisal<br />Faturohman
              </h2>
              <p class="font-cinzel text-sm md:text-lg my-4 md:my-8">
                Putra dari
              </p>
              <h3 class="font-maharlika text-xl md:text-3xl">Sumarna</h3>
              <p>&</p>
              <h3 class="font-maharlika text-xl md:text-3xl">Kokom Komariah</h3>
            </div>
            <!-- Right Content End -->
          </div>
          <!-- Description End -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";

let imageFlower1 = "/images/meet_the_couple_flower_1.png";
let imageFlower2 = "/images/meet_the_couple_flower_2.png";
</script>

<style></style>
