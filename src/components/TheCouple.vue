<template>
  <section
    class="relative py-20 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden"
  >
    <!-- Traditional Javanese/Sundanese Background Patterns -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Batik-inspired patterns -->
      <div class="absolute top-10 left-10 opacity-8">
        <svg
          class="w-48 h-48 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <pattern
            id="batik1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="3"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
            />
            <circle
              cx="10"
              cy="10"
              r="6"
              fill="none"
              stroke="currentColor"
              stroke-width="0.3"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#batik1)" opacity="0.3" />
        </svg>
      </div>

      <div class="absolute top-16 right-12 opacity-8">
        <svg
          class="w-40 h-40 text-amber-600"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <pattern
            id="batik2"
            x="0"
            y="0"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M7.5,0 L15,7.5 L7.5,15 L0,7.5 Z"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#batik2)" opacity="0.4" />
        </svg>
      </div>

      <!-- Traditional ornaments -->
      <div class="absolute bottom-20 left-16 opacity-12">
        <svg
          class="w-32 h-32 text-yellow-700"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path
            d="M50,10 Q60,20 70,30 Q60,40 50,50 Q40,40 30,30 Q40,20 50,10 Z"
            opacity="0.6"
          />
          <path
            d="M50,50 Q60,60 70,70 Q60,80 50,90 Q40,80 30,70 Q40,60 50,50 Z"
            opacity="0.4"
          />
        </svg>
      </div>

      <div class="absolute bottom-12 right-8 opacity-10">
        <svg
          class="w-36 h-36 text-amber-700"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            opacity="0.3"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            opacity="0.4"
          />
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <!-- Scattered traditional elements -->
      <div class="absolute top-1/3 left-1/4 opacity-20">
        <svg
          class="w-6 h-6 text-yellow-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12,2 L15,9 L22,9 L17,14 L19,21 L12,17 L5,21 L7,14 L2,9 L9,9 Z"
          />
        </svg>
      </div>
      <div class="absolute top-1/2 right-1/3 opacity-15">
        <svg
          class="w-8 h-8 text-amber-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12,2 L15,9 L22,9 L17,14 L19,21 L12,17 L5,21 L7,14 L2,9 L9,9 Z"
          />
        </svg>
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Title -->
      <div
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          class="text-6xl md:text-5xl font-cinzel text-red-900 mb-4 tracking-wide"
        >
          The Couple
        </h2>
        <div class="flex items-center justify-center mb-6">
          <div
            class="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-600"
          ></div>
          <div class="mx-6">
            <!-- Traditional Javanese ornament -->
            <svg
              class="w-12 h-12 text-yellow-600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path
                d="M50,10 Q70,30 50,50 Q30,30 50,10 Z M50,50 Q70,70 50,90 Q30,70 50,50 Z"
                opacity="0.8"
              />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
            </svg>
          </div>
          <div
            class="w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-600"
          ></div>
        </div>
        <p class="text-lg text-red-800 max-w-2xl mx-auto font-light italic">
          "In all the world, there is no heart for me like yours"
        </p>
      </div>

      <!-- Photo Gallery -->
      <div class="grid md:grid-cols-3 gap-4 md:gap-12">
        <!-- Photo 1 - The Bride -->
        <div
          class="group relative"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div
            class="relative overflow-hidden transform transition-all duration-700 group-hover:scale-105"
          >
            <!-- Traditional frame background with batik-inspired pattern -->
            <div
              class="absolute -inset-6 bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 rounded-lg opacity-30 blur-sm"
            ></div>
            <div
              class="absolute -inset-3 bg-gradient-to-br from-red-100 to-red-50 rounded-lg opacity-40"
            ></div>

            <!-- Ornate Javanese-style frame -->
            <div
              class="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 p-2 rounded-lg shadow-2xl"
            >
              <!-- Inner decorative border -->
              <div
                class="bg-gradient-to-br from-red-900 to-red-800 p-1 rounded-lg"
              >
                <div class="bg-white p-0 rounded-lg">
                  <div class="aspect-[3/4] rounded-lg relative overflow-hidden">
                    <!-- Actual photo -->
                    <img
                      src="/images/pengantin1.jpg"
                      alt="Pengantin Putri - The Bride in Traditional Javanese Attire"
                      class="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            ></div>
          </div>

          <!-- Caption with Javanese touch -->
          <div class="text-center mt-8">
            <h3
              class="text-2xl font-serif text-red-900 mb-3 tracking-wide"
            ></h3>
            <div class="flex items-center justify-center mb-3">
              <div class="w-12 h-0.5 bg-yellow-600"></div>
              <div class="mx-2 w-2 h-2 bg-yellow-600 rounded-full"></div>
              <div class="w-12 h-0.5 bg-yellow-600"></div>
            </div>
          </div>
        </div>

        <!-- Photo 2 - Together (Center) -->
        <div
          class="group relative md:-mt-8"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div
            class="relative overflow-hidden transform transition-all duration-700 group-hover:scale-105"
          >
            <!-- Premium traditional frame background -->
            <div
              class="absolute -inset-8 bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-400 rounded-xl opacity-25 blur-lg"
            ></div>
            <div
              class="absolute -inset-4 bg-gradient-to-br from-red-100 to-red-50 rounded-xl opacity-50"
            ></div>

            <!-- Elaborate Javanese-style frame -->
            <div
              class="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 p-2.5 rounded-xl shadow-2xl"
            >
              <!-- Ornate inner border -->
              <div
                class="bg-gradient-to-br from-red-900 to-red-800 p-1.5 rounded-xl"
              >
                <div class="bg-white p-0 rounded-xl">
                  <div class="aspect-[3/4] rounded-xl relative overflow-hidden">
                    <!-- Actual photo -->
                    <img
                      src="/images/pengantin4.jpg"
                      alt="Pengantin Bersama - Couple in Traditional Javanese Wedding Attire"
                      class="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            ></div>
          </div>

          <!-- Caption with traditional elements -->
          <div class="text-center mt-8">
            <div class="flex items-center justify-center mb-3">
              <div class="w-16 h-0.5 bg-yellow-600"></div>
              <div class="mx-3">
                <svg
                  class="w-4 h-4 text-yellow-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12,2 L15,9 L22,9 L17,14 L19,21 L12,17 L5,21 L7,14 L2,9 L9,9 Z"
                  />
                </svg>
              </div>
              <div class="w-16 h-0.5 bg-yellow-600"></div>
            </div>
          </div>
        </div>

        <!-- Photo 3 - The Groom -->
        <div
          class="group relative"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="600"
        >
          <div
            class="relative overflow-hidden transform transition-all duration-700 group-hover:scale-105"
          >
            <!-- Traditional frame background -->
            <div
              class="absolute -inset-6 bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 rounded-lg opacity-30 blur-sm"
            ></div>
            <div
              class="absolute -inset-3 bg-gradient-to-br from-red-100 to-red-50 rounded-lg opacity-40"
            ></div>

            <!-- Javanese-style frame -->
            <div
              class="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 p-2 rounded-lg shadow-2xl"
            >
              <!-- Inner decorative border -->
              <div
                class="bg-gradient-to-br from-red-900 to-red-800 p-1 rounded-lg"
              >
                <div class="bg-white p-0 rounded-lg">
                  <div class="aspect-[3/4] rounded-lg relative overflow-hidden">
                    <!-- Actual photo -->
                    <img
                      src="/images/pengantin3.jpg"
                      alt="Pengantin Pria - The Groom in Traditional Javanese Attire"
                      class="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            ></div>
          </div>
        </div>
      </div>

      <!-- Bottom Traditional Element -->
      <div
        class="text-center mt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <div class="flex items-center justify-center space-x-6 mb-6">
          <div
            class="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-600"
          ></div>
          <div class="flex items-center space-x-3">
            <svg
              class="w-6 h-6 text-yellow-600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path
                d="M50,10 Q70,30 50,50 Q30,30 50,10 Z M50,50 Q70,70 50,90 Q30,70 50,50 Z"
                opacity="0.8"
              />
            </svg>
            <div class="w-3 h-3 bg-amber-600 rounded-full"></div>
            <svg
              class="w-6 h-6 text-yellow-600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path
                d="M50,10 Q70,30 50,50 Q30,30 50,10 Z M50,50 Q70,70 50,90 Q30,70 50,50 Z"
                opacity="0.8"
              />
            </svg>
          </div>
          <div
            class="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-600"
          ></div>
        </div>
        <p class="text-red-800 font-serif italic text-lg mb-2 tracking-wide">
          "Siji bae loro, loro bae siji"
        </p>
        <p class="text-red-700 text-sm font-light">
          "Satu menjadi dua, dua menjadi satu dalam ikatan cinta suci"
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCouple",
  mounted() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1200,
        once: true,
        offset: 100,
      });
    }
  },
};
</script>

<style scoped>
/* Custom luxury transitions with traditional touch */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Traditional Javanese/Sundanese inspired typography */
.font-serif {
  font-family: "Playfair Display", "Crimson Text", "Times New Roman", serif;
}

/* Enhanced shadow effects for traditional luxury feel */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Custom animation for traditional elements */
@keyframes traditional-glow {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.9;
  }
}

.animate-traditional-glow {
  animation: traditional-glow 3s ease-in-out infinite;
}

/* AOS custom styles */
[data-aos] {
  pointer-events: none;
}
[data-aos].aos-animate {
  pointer-events: auto;
}

/* Responsive enhancements */
@media (max-width: 768px) {
  .grid.md\\:grid-cols-3 > div.md\\:-mt-8 {
    margin-top: 0;
  }
}
</style>
