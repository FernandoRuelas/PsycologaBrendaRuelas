<template>
  <v-app>
    <v-app-bar 
      :elevation="2" 
      color="surface"
      app
      height="80"
      class="app-bar"
    >
      <v-container class="d-flex align-center justify-space-between">
        <div class="logo">
          <span class="logo-text">Dra. Brenda Ruelas</span>
          <span class="logo-subtitle">Psicología Clínica</span>
        </div>
        
        <v-spacer></v-spacer>
        
        <!-- Desktop Menu -->
        <div class="d-none d-md-flex align-center nav-links">
          <a href="#inicio" class="nav-link">Inicio</a>
          <a href="#sobre-mi" class="nav-link">Sobre Mí</a>
          <a href="#servicios" class="nav-link">Servicios</a>
          <a href="#renta-consultorios" class="nav-link">Renta de Consultorios</a>
          <a href="#instalaciones" class="nav-link">Instalaciones</a>
          <a href="#testimonios" class="nav-link">Testimonios</a>
          <v-btn 
            color="primary" 
            variant="flat" 
            rounded="pill"
            href="#contacto"
            class="ml-4"
          >
            Contactar
          </v-btn>
        </div>

        <!-- Mobile Menu -->
        <v-app-bar-nav-icon 
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      class="mobile-drawer"
    >
      <v-list nav>
        <v-list-item 
          v-for="item in menuItems" 
          :key="item.href"
          :href="item.href"
          @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RentaConsultorio />
        <FacilitiesSection /> 
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import RentaConsultorio from './components/RentaConsultorio.vue'
import TestimonialsSection from './components/TestimonialSection.vue'
import FacilitiesSection from './components/FacilitiesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const drawer = ref(false)

const menuItems = [
  { title: 'Inicio', href: '#inicio' },
  { title: 'Sobre Mí', href: '#sobre-mi' },
  { title: 'Servicios', href: '#servicios' },
  { title: 'Renta de Consultorios', href: '#renta-consultorios' },
  { title: 'Instalaciones', href: '#instalaciones' },
  { title: 'Testimonios', href: '#testimonios' },
  { title: 'Contacto', href: '#contacto' }
]
</script>

<style scoped>
.app-bar {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95) !important;
}

.logo {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 400;
}

.nav-links {
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover::after {
  width: 100%;
}
</style>