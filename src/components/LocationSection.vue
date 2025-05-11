<template>
  <div class="bg-beige min-h-screen overflow-hidden relative">
    <!-- Image Corner Left Bottom -->
    <div
      class="absolute -bottom-8 -left-8 w-1/2 md:w-1/4 max-w-xs z-10 rotate-45"
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

          <!-- Leaflet Map Start -->
          <div data-aos="fade-up" class="w-full max-w-4xl mt-8 px-8">
            <div class="bg-white rounded-xl shadow-lg p-4">
              <div
                class="map-container h-80 rounded-lg overflow-hidden"
                ref="mapContainer"
              ></div>
              <div
                class="mt-4 flex flex-col md:flex-row justify-between items-center"
              >
                <div class="mb-4 md:mb-0">
                  <h3 class="font-tenor text-xl text-dark-green">
                    Lokasi Pernikahan
                  </h3>
                  <p class="text-gray-600">
                    Kp.Babakan Cijeruk, Desa Sukawening, Ciwidey
                  </p>
                </div>
                <a
                  :href="googleMapLink"
                  target="_blank"
                  class="px-6 py-2 bg-dark-green text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center"
                >
                  <span>Buka di Google Maps</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <!-- Leaflet Map End -->
        </div>
      </section>
    </Content>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Content from "/layout/Content.vue";
import "leaflet/dist/leaflet.css";

let imageFlower1 = "/public/images/location_flowe_1.png";
let imageFlower2 = "/public/images/location_flowe_2.png";

// Map reference
const mapContainer = ref(null);
let map = null;

// Sukawening, Ciwidey coordinates (you should verify and update these)
const lat = -7.101; // Example coordinates for Ciwidey area
const lng = 107.506; // Example coordinates for Ciwidey area
const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

onMounted(() => {
  // We need to import Leaflet dynamically on client-side only
  import("leaflet").then((L) => {
    // Fix Leaflet's icon paths
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });

    // Initialize the map
    map = L.map(mapContainer.value).setView([lat, lng], 15);

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add marker for the wedding location
    const marker = L.marker([lat, lng]).addTo(map);
    marker
      .bindPopup(
        "<b>Lokasi Pernikahan</b><br>Kp.Babakan Cijeruk, Desa Sukawening"
      )
      .openPopup();
  });
});
</script>

<style>
/* Need to explicitly set the CSS for the Leaflet container */
.map-container {
  width: 100%;
  height: 300px;
  z-index: 1; /* Ensure map is visible over background decorations */
}
</style>
