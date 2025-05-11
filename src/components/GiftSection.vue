<template>
  <div class="bg-[#083a50] min-h-screen">
    <Content>
      <section>
        <div
          class="flex flex-col px-6 md:px-0 items-center w-full justify-between min-h-screen"
        >
          <!-- TOP CONTENT START -->
          <div
            class="w-full h-full flex flex-row items-start justify-between pt-16"
          >
            <h1 class="font-new-icon text-6xl md:text-8xl text-gray-200">
              GIFT
            </h1>
            <div class="w-1/2 md:w-1/4">
              <img src="/public/images/gift_flower_1.svg" alt="flower" />
            </div>
          </div>
          <!-- TOP CONTENT END -->

          <!-- BOTTOM CONTENT START -->
          <div
            class="w-full h-full flex flex-col md:flex-row items-start gap-12 md:gap-12 pb-6"
          >
            <!-- CASHLESS -->
            <div class="w-full md:w-1/3">
              <h1 class="font-tenor text-2xl md:text-2xl text-beige">
                CASHLESS
              </h1>

              <div class="flex flex-row md:flex-col gap-16 md:gap-0">
                <p class="font-tenor text-sm md:text-lg text-beige mt-6">
                  Dana <br />0896-0000-0000 <br />
                  Nurul Fauziah
                </p>

                <p class="font-tenor text-sm md:text-lg text-beige mt-6">
                  Bank BJB <br />1231231231 <br />
                  Nurul Fauziah
                </p>
              </div>
            </div>

            <!-- KIRIM KADO -->
            <div class="w-full md:w-1/3">
              <h1 class="font-tenor text-2xl md:text-2xl text-beige">
                KIRIM KADO
              </h1>

              <p class="font-tenor text-sm md:text-lg text-beige mt-6">
                Anda Dapat Mengirim kado ke Alamat Dibawah Ini
              </p>

              <p class="font-tenor text-sm md:text-lg text-beige mt-6">
                Kp. Babakan Cijeruk, Sukawening, Desa Ciwidey, Kabupaten Bandung
              </p>
            </div>
          </div>
          <!-- BOTTOM CONTENT END -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import Content from "/layout/Content.vue";
</script>

<style></style>
