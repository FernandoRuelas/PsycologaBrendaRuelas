<template>
  <section id="servicios" class="services-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Servicios</span>
        <h2 class="section-title">¿Cómo puedo ayudarte?</h2>
        <p class="section-description">
          Ofrezco una variedad de servicios terapéuticos adaptados a tus
          necesidades específicas
        </p>
      </div>

      <v-row class="services-grid">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <div class="service-card">
            <div
              class="service-icon"
              :style="{ backgroundColor: service.color }"
            >
              <v-icon :icon="service.icon" size="40" color="white"></v-icon>
            </div>

            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>

            <ul class="service-list">
              <li v-for="(item, i) in service.items" :key="i">
                <v-icon size="16" color="primary">mdi-check</v-icon>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <span style="color: var(--text-light)">Las sesiones tienen un costo que oscila entre $500 y $1,200 MXN, según el servicio.</span>
      </v-row>

      <div class="cta-box">
        <div class="cta-content">
          <h3>¿No estás seguro de qué servicio necesitas?</h3>
          <p>
            Agenda una consulta inicial y juntos encontraremos el mejor
            camino para ti
          </p>
        </div>
        <v-btn
          color="primary"
          size="large"
          rounded="pill"
          variant="flat"
          href="#contacto"
        >
          Consulta 
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "mdi-account-heart",
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas para abordar tus desafíos emocionales",
    color: "#A8DADC",
    items: ["Ansiedad y estrés", "Depresión", "Autoestima", "Duelo y pérdida"],
  },
  {
    icon: "mdi-account-group",
    title: "Terapia de Pareja",
    description: "Fortalece tu relación y mejora la comunicación",
    color: "#E9C9C9",
    items: [
      "Comunicación",
      "Resolución de conflictos",
      "Intimidad emocional",
      "Crisis de pareja",
    ],
  },
  {
    icon: "mdi-head-heart",
    title: "Manejo de Ansiedad",
    description: "Técnicas efectivas para controlar la ansiedad",
    color: "#B8A8DC",
    items: ["Ataques de pánico", "Ansiedad social", "TOC", "Fobias"],
  },
{
  icon: "mdi-home-heart", // más representativo para familia
  title: "Terapia Familiar",
  description:
    "Fortalece los vínculos familiares, mejora la comunicación y construye un ambiente de apoyo mutuo.",
  color: "#A8DCB8",
  items: [
    "Resolución de conflictos",
    "Crisis y cambios importantes",
    "Fortalecimiento de la unión y confianza",
    "Orientación en roles y límites"
  ],
},

  {
    icon: "mdi-briefcase-account",
    title: "Orientación Vocacional",
    description: "Descubre tu camino profesional ideal",
    color: "#DCC9A8",
    items: [
      "Evaluación de intereses",
      "Planificación de carrera",
      "Toma de decisiones",
      "Desarrollo profesional",
    ],
  },
  {
    icon: "mdi-emoticon-happy",
    title: "Crecimiento Personal",
    description: "Alcanza tu máximo potencial",
    color: "#DCA8C9",
    items: [
      "Autoconocimiento",
      "Inteligencia emocional",
      "Hábitos saludables",
      "Propósito de vida",
    ],
  },
];
</script>

<style scoped>
.services-section {
  background: linear-gradient(180deg, white 0%, #f1faee 100%);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-top: var(--spacing-sm);
}

.services-grid {
  margin-top: var(--spacing-lg);
}

.service-card {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  height: 100%;
  transition: var(--transition);
  border: 1px solid #f1f1f1;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.service-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.service-description {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.service-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.cta-box {
  margin-top: var(--spacing-xl);
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.cta-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
}
.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
}
@media (max-width: 960px) {
  .cta-box {
    flex-direction: column;
    text-align: center;
  }
  .cta-box .v-btn {
    width: 100%;
  }
}
</style>
