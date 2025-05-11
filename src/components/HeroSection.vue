<template>
  <div class="bg-maroon">
    <Content>
      <section
        class="md:items-center flex flex-col md:gap-4 md:flex-row justify-between min-h-screen md:min-h-screen"
      >
        <!-- LEFT CONTENT START -->
        <div class="w-full flex flex-col items-center py-4 md:py-12">
          <!-- Name Start -->
          <div class="text-beige">
            <h1 class="text-6xl md:text-[8rem] font-pinyon">
              <span class="text-[8rem] md:text-[12rem] font-pinyon">R</span
              >amdan
            </h1>
            <br />
            <p class="text-4xl md:text-6xl font-pinyon -mt-12">
              and
              <span class="text-6xl md:text-[8rem] font-pinyon">
                <span class="text-[8rem] md:text-[12rem] font-pinyon">N</span>
                <span>urul</span>
              </span>
            </p>
          </div>
          <!-- Name End -->

          <!-- Location Start -->
          <div
            class="text-gray-200 font-tenor md:text-lg text-sm text-center items-center flex flex-col px-6 md:px-0"
          >
            <h2>WE INVITE YOU TO CELEBRATE OUR MARRIAGE</h2>
          </div>

          <!-- Venue -->
          <div
            class="flex flex-row font-tenor text-beige md:text-lg text-lg mt-4 items-center justify-evenly px-6 md:px-0 w-full"
          >
            <!-- Left -->
            <div class="text-center">
              <p>SELASA <br /></p>
              <p>17 JUNI 2025</p>
            </div>

            <div class="border-l border-beige h-12"></div>

            <!-- Right -->
            <div class="text-center">
              <p>SUKAWENING <br /></p>
              <p>CIWIDEY</p>
            </div>
          </div>
          <!-- Location End -->
        </div>
        <!-- LEFT CONTENT END -->

        <!-- RIGHT CONTENT START -->
        <div class="w-full h-full flex flex-col items-center">
          <!-- Image Start -->
          <div class="w-1/2 rotate-270">
            <img src="/src/assets/hero-flower.svg" alt="hero" />
          </div>
          <!-- Image End -->

          <!-- Button RSVP Start -->
          <p
            class="font-tenor text-3xl font-extralight text-beige mt-4 underline"
          >
            RSVP
          </p>
          <!-- Button RSVP End -->
        </div>
        <!-- RIGHT CONTENT END -->
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";
</script>

<style></style>
