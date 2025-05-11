<template>
  <div class="bg-[#4b5151] md:min-h-screen">
    <Content>
      <section class="">
        <div class="flex flex-col items-center py-12 gap-6">
          <!-- Flower Start -->
          <div class="w-1/4 md:w-1/6">
            <img
              src="/src/assets/quotes-flower.svg"
              alt="flower"
              class="w-full h-auto"
            />
          </div>
          <!-- Flower End -->

          <!-- Surah Start -->
          <h1 class="text-beige font-new-icon text-4xl md:text-8xl">
            SURAH AR-RUM: 21
          </h1>
          <!-- Surah End -->

          <!-- Bismillah Start -->
          <h1
            class="text-[#b4b49f] font-pinyon text-4xl md:text-8xl md:-mt-12 -mt-10"
          >
            Bismillah
          </h1>
          <!-- Bismillah End -->

          <!-- Quotes Start -->
          <p class="w-3/4 md:w-1/2 text-gray-200 text-center font-tenor">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih
            dan sayang"
          </p>
          <!-- Quotes End -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";
</script>

<style></style>
