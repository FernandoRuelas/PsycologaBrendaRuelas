<template>
  <section id="testimonios" class="testimonials-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Testimonios</span>
        <h2 class="section-title">Lo que dicen mis pacientes</h2>
      </div>

      <v-row>
        <v-col
          v-for="(testimonial, index) in testimonials"
          :key="index"
          cols="12"
          md="4"
        >
          <div class="testimonial-card">
            <div class="quote-icon">
              <v-icon size="40" color="primary" opacity="0.3"
                >mdi-format-quote-close</v-icon
              >
            </div>

            <div class="rating">
              <v-icon v-for="i in 5" :key="i" size="18" color="#FFB800">
                mdi-star
              </v-icon>
            </div>

            <p class="testimonial-text">{{ testimonial.text }}</p>

            <div class="testimonial-author">
              <div class="author-avatar">
                {{ testimonial.initials }}
              </div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const testimonials = [
  {
    text: "La Dra. Brenda Ruelas me ayudó a superar mis miedos al emprender mi negocio. Gracias a su acompañamiento pude romper las barreras que me detenían y hoy me siento con la confianza y claridad necesarias para crecer profesionalmente.",
    name: "Fernando Rodriguez",
    role: "Paciente desde 2023",
    initials: "FR",

  },
  {
    text: "Gracias a la terapia de pareja, mi relación mejoró significativamente. Aprendimos a comunicarnos mejor y a resolver conflictos de manera saludable.",
    name: "Carlos y Laura",
    role: "Terapia de pareja",
    initials: "C&L",
  },
  {
    text: "Un espacio seguro donde pude explorar mis emociones sin juicios. La Dra. me dio las herramientas necesarias para mi crecimiento personal.",
    name: "Roberto Silva",
    role: "Paciente desde 2021",
    initials: "RS",
  },
];
</script>

<style scoped>
.testimonials-section {
  background-color: white;
}

.testimonial-card {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  height: 100%;
  border: 2px solid var(--secondary-color);
  transition: var(--transition);
  position: relative;
}

.testimonial-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(168, 218, 220, 0.2);
}

.quote-icon {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
}

.rating {
  display: flex;
  gap: 4px;
  margin-bottom: var(--spacing-md);
}

.testimonial-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--secondary-color);
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.author-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 2px;
}

.author-info span {
  font-size: 0.85rem;
  color: var(--text-light);
}
</style>
