<template>
  <div class="bg-beige md:min-h-screen text-dark-green">
    <Content>
      <section>
        <div class="flex flex-col py-24 md:py-16 px-6 items-center w-full">
          <!-- Title Start -->
          <div class="w-full items-center text-center md:text-start">
            <h1 class="font-new-icon text-6xl md:text-8xl">
              SCHEDULE <br /><span class="font-sloop mr-16 md:mr-32">of</span
              >EVENTS
            </h1>
          </div>
          <!-- Title End -->

          <!-- Description Start -->
          <div class="w-full flex flex-col" data-aos="fade-up">
            <h2
              class="text-xl font-tenor tracking-widest mb-8 text-center md:text-start md:text-2xl"
            >
              MINGGU, 06 JULI 2025
            </h2>

            <!-- Schedule Table -->
            <div class="w-full flex justify-center md:justify-end">
              <div class="w-full md:w-1/2">
                <!-- Schedule Item - AKAD -->
                <div
                  class="schedule-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    class="flex justify-between items-center pb-2 border-b-2 border-dark-green"
                  >
                    <div class="text-md md:text-xl font-tenor">8:30 PAGI</div>
                    <div class="text-md md:text-xl font-tenor">AKAD</div>
                  </div>
                </div>

                <!-- Schedule Item - WEDDING CEREMONY -->
                <div
                  class="schedule-item mt-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div
                    class="flex justify-between items-center pb-2 border-b-2 border-dark-green"
                  >
                    <div class="text-md md:text-xl font-tenor">11:00 SIANG</div>
                    <div class="text-md md:text-xl font-tenor">RECEPTION</div>
                  </div>
                </div>

                <!-- Schedule Item - RECEPTION -->
                <div
                  class="schedule-item mt-8"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div
                    class="flex justify-between items-center pb-2 border-b-2 border-dark-green"
                  >
                    <div class="text-md md:text-xl font-tenor">14:00 SIANG</div>
                    <div class="text-md md:text-xl font-tenor">
                      WEDDING CEREMONY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Description End -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";
</script>

<style scoped>
.schedule-item {
  transition: all 0.3s ease;
}

.schedule-item:hover {
  transform: translateX(10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .schedule-item {
    margin-top: 1.5rem;
  }
}
</style>
