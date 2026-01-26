<template>
  <!-- precarga con excel -->
  <!-- <section id="testimonios" class="testimonials-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Testimonios</span>
        <h2 class="section-title">Lo que dicen mis pacientes</h2>
      </div>

      <v-row>
        <v-col
          v-for="(review, index) in reviews"
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
             
              <v-rating
                    hover
                    readonly
                    :length="5"
                    :size="32"
                    :model-value="review.calificacion"
                    active-color="#FFB800"
                    />
            </div>

            <p class="testimonial-text">{{ review.comentario }}</p>

            <div class="testimonial-author">
              <div class="author-avatar">
                {{ review.initials }}
              </div>
              <div class="author-info">
                <h4>{{ review.nombre }}</h4>
                <span>{{ review.fecha }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="align-center" justify="center" >
      <v-btn color="primary" rounded>Agregar reseña</v-btn>
      </v-row>
    </v-container>
  </section> -->

  <section id="testimonios" class="testimonials-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Testimonios</span>
        <h2 class="section-title">Lo que dicen mis pacientes</h2>
      </div>

      <v-row>
        <v-col
          v-for="(review, index) in testimonials"
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
             
              <v-rating
                    hover
                    readonly
                    :length="5"
                    :size="32"
                    :model-value="review.calification"
                    active-color="#FFB800"
                    />
            </div>

            <p class="testimonial-text">{{ review.text }}</p>

            <div class="testimonial-author">
              <div class="author-avatar">
                {{ review.initials }}
              </div>
              <div class="author-info">
                <h4>{{ review.name }}</h4>
                <span>{{ review.role }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="align-center" justify="center" >
      <!-- <v-btn color="primary" rounded>Agregar reseña</v-btn> -->
      </v-row>
    </v-container>
  </section> 
</template>

<script setup>
import { ref, onMounted } from "vue";
const testimonials = [
  {
    text: "La Dra. Brenda Ruelas me ayudó a superar mis miedos al emprender mi negocio. Gracias a su acompañamiento pude romper las barreras que me detenían y hoy me siento con la confianza y claridad necesarias para crecer profesionalmente.",
    name: "Fernando Rodriguez",
    role: "01/12/2023",
    initials: "FR",
    calification: 5,

  },
  
];
//   const reviews = ref([]);

// async function loadReviews() {
//   const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4zcDaNGwjBwuVtrVIG0LzVfjPoEm-9wNw_4YY7zXIHrdn5-SrXn3Lx8H4VLwU1AFUOqfezYLn1lsx/pub?gid=0&single=true&output=csv";


//   const res = await fetch(url);
//   console.log("response", res);
//   const csv = await res.text();
// console.log("csv", csv);
//   const rows = csv.split("\n").map(r => r.split(","));
// console.log("rows", rows);
//   rows.shift();

//   reviews.value = rows.map(row => ({
//     nombre: row[0]?.replace(/"/g, "") || "Anónimo",
//     comentario: row[1]?.replace(/"/g, "") || "",
//     fecha: row[2]?.replace(/"/g, "") || "",
//     calificacion: parseInt(row[3]?.replace(/"/g, "")) || 5,
//     initials: row[0]
//       ? row[0]
//           .split(" ")
//           .map(n => n[0])
//           .join("")
//           .toUpperCase()
//       : "A",
//   }));
// }

// onMounted(loadReviews);

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
