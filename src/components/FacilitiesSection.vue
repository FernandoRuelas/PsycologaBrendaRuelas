<template>
  <section id="instalaciones" class="facilities-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Nuestro Espacio</span>
        <h2 class="section-title">Un lugar diseñado para tu bienestar</h2>
        <p class="section-description">
          En nuestro consultorio, hemos diseñado un entorno cálido y acogedor
          pensado para brindarte comodidad y tranquilidad. Cada rincón ha sido
          creado con especial cuidado, para que te sientas en un lugar seguro
          donde puedes compartir tus pensamientos y emociones.
        </p>
        <p class="section-description">
          Creemos que un espacio armonioso y profesional es clave para facilitar
          el proceso terapéutico. Desde nuestras áreas de espera hasta nuestras
          salas de consulta, todo está preparado para que tengas una experiencia
          única y enriquecedora.
        </p>
      </div>

      <!-- Galería de Fotos -->
      <div class="gallery-container">
        <v-row>
          <v-col cols="12" md="8">
            <div class="gallery-main">
              <img
                :src="selectedImage"
                alt="Consultorio principal"
                class="main-image"
              />
              <div class="image-overlay">
                <v-btn
                  icon
                  variant="elevated"
                  color="white"
                  size="large"
                  @click="openGallery"
                >
                  <v-icon>mdi-fullscreen</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="gallery-thumbs">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="thumb-item"
                :class="{ active: selectedImage === image.url }"
                @click="selectedImage = image.url"
              >
                <img :src="image.url" :alt="image.alt" />
                <div class="thumb-overlay">
                  <v-icon color="white">mdi-eye</v-icon>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Amenidades -->
      <div class="amenities-section">
        <h3 class="amenities-title">Nuestras Instalaciones</h3>

        <v-row>
          <v-col
            v-for="(amenity, index) in amenities"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <div class="amenity-card">
              <div class="amenity-icon-wrapper">
                <div
                  class="amenity-icon"
                  :style="{ backgroundColor: amenity.color }"
                >
                  <v-icon :icon="amenity.icon" size="32" color="white"></v-icon>
                </div>
              </div>

              <h4 class="amenity-title">{{ amenity.title }}</h4>
              <p class="amenity-description">{{ amenity.description }}</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- CTA Section -->
      <div class="facilities-cta">
        <div class="cta-content">
          <v-icon size="48" color="primary" class="mb-4"
            >mdi-map-marker-check</v-icon
          >
          <h3>¿Te gustaría conocer nuestras instalaciones?</h3>
          <p>
            Agenda una visita sin compromiso y conoce el espacio donde
            trabajaremos juntos
          </p>
        </div>
        <v-btn
          color="primary"
          size="x-large"
          rounded="pill"
          variant="flat"
          href="#contacto"
        >
          Agendar Visita
          <v-icon end>mdi-calendar</v-icon>
        </v-btn>
      </div>
    </v-container>

    <!-- Modal de Galería -->
    <v-dialog v-model="galleryDialog" max-width="1200">
      <v-card class="gallery-modal">
        <v-btn icon class="close-btn" @click="galleryDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-carousel
          v-model="carouselIndex"
          hide-delimiters
          height="600"
          show-arrows="hover"
        >
          <v-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image.url" :alt="image.alt" class="carousel-image" />
            <div class="carousel-caption">
              <p>{{ image.alt }}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Importa las imágenes desde src/assets



// Reemplaza estas URLs con las rutas reales de tus imágenes
const images = ref([
  {
    url: "/consultorio1.png",
    alt: "Sala de consulta principal",
  },
  {
    url: "/consultorio2.png",
    alt: "Interior del consultorio",
  },
  {
    url: "/entradaConsultorio.png",
    alt: "Entrada del consultorio",
  },
 
]);

const selectedImage = ref(images.value[0].url);
const galleryDialog = ref(false);
const carouselIndex = ref(0);

const amenities = [
  {
    icon: "mdi-coffee",
    title: "Área de Café",
    description:
      "Disfruta de una bebida caliente mientras esperas en un ambiente relajante",
    color: "#A8DADC",
  },
  {
    icon: "mdi-car",
    title: "Estacionamiento",
    description:
      "Contamos con estacionamiento gratuito y seguro para tu comodidad",
    color: "#E9C9C9",
  },
  {
    icon: "mdi-sofa",
    title: "Sala de Espera",
    description: "Espacios cómodos y tranquilos diseñados para tu relajación",
    color: "#B8A8DC",
  },
  {
    icon: "mdi-lock-check",
    title: "Privacidad",
    description:
      "Salas completamente privadas con aislamiento acústico garantizado",
    color: "#A8DCB8",
  },
];

const openGallery = () => {
  const currentIndex = images.value.findIndex(
    (img) => img.url === selectedImage.value
  );
  carouselIndex.value = currentIndex >= 0 ? currentIndex : 0;
  galleryDialog.value = true;
};
</script>

<style scoped>
.facilities-section {
  background: white;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}

.section-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-top: var(--spacing-md);
}

/* Galería de Fotos */
.gallery-container {
  margin-bottom: var(--spacing-xl);
}

.gallery-main {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 500px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: var(--transition);
}

.gallery-main:hover .image-overlay {
  opacity: 1;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.gallery-main:hover .main-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.gallery-thumbs {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  height: 500px;
}

.thumb-item {
  position: relative;
  flex: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  border: 3px solid transparent;
}

.thumb-item.active {
  border-color: var(--primary-color);
}

.thumb-item:hover {
  transform: scale(1.02);
}

.thumb-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(168, 218, 220, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.thumb-item:hover .thumb-overlay {
  opacity: 1;
}

/* Amenidades */
.amenities-section {
  margin-top: var(--spacing-xl);
}

.amenities-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: var(--spacing-lg);
}

.amenity-card {
  text-align: center;
  padding: var(--spacing-md);
  transition: var(--transition);
}

.amenity-card:hover {
  transform: translateY(-8px);
}

.amenity-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.amenity-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.amenity-card:hover .amenity-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.amenity-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-xs);
}

.amenity-description {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

/* CTA */
.facilities-cta {
  margin-top: var(--spacing-xl);
  background: linear-gradient(135deg, var(--secondary-color) 0%, white 100%);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  text-align: center;
  border: 2px solid var(--primary-color);
}

.cta-content {
  margin-bottom: var(--spacing-md);
}

.cta-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* Modal de Galería */
.gallery-modal {
  position: relative;
  background-color: #000;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: var(--spacing-md);
  color: white;
  text-align: center;
}

.carousel-caption p {
  font-size: 1.1rem;
  margin: 0;
}

@media (max-width: 960px) {
  .gallery-main {
    height: 300px;
    margin-bottom: var(--spacing-sm);
  }

  .gallery-thumbs {
    flex-direction: row;
    height: auto;
  }

  .facilities-cta {
    padding: var(--spacing-lg) var(--spacing-md);
  }
}
</style>
