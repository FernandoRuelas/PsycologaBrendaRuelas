<template>
  <section id="renta-consultorios" class="rent-section section-padding">
    <v-container>
      <div class="section-header">
        <span class="section-label">Renta de Consultorios</span>
        <h2 class="section-title">
          ¿Buscas un espacio profesional para atender?
        </h2>
        <p class="section-description">
          Si eres profesionista del ámbito terapéutico o de la salud mental,
          puedes rentar un consultorio por hora y trabajar en un ambiente
          cómodo, privado y totalmente equipado.
        </p>
      </div>

      <div class="rent-box">
        <div class="rent-content">
          <h3>Tu espacio para crecer profesionalmente</h3>
          <p>
            ¿Te interesa contar con un consultorio para tus sesiones? Comunícate
            conmigo y podemos adaptar un espacio ideal para ti.
          </p>

          <ul class="benefits-list">
            <li v-for="(item, i) in benefits" :key="i">
              <v-icon size="18" color="primary">mdi-check-circle</v-icon>
              <span>{{ item }}</span>
            </li>
          </ul>

          <p class="extra-note">
            *La renta está disponible únicamente para profesionistas del área
            psicológica, terapéutica o afín.
          </p>
        </div>

        <v-row justify="space-around">
           <v-btn
            color="secondary"
            size="large"
            rounded="pill"
            variant="flat"
            href="#instalaciones"
            class="rent-btn"
          >
            Conoce las instalaciones
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn
            color="primary"
            size="large"
            rounded="pill"
            variant="flat"
            href="#contacto"
            class="rent-btn"
          >
            Comunícate conmigo
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>


        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const benefits = [
  "Ambiente profesional y tranquilo",
  "Consultorio equipado y listo para trabajar",
  "Disponibilidad por hora",
  "Cero contratos largos",
  "Flexibilidad total en tus horarios",
];
</script>

<style scoped>
.rent-section {
  background: linear-gradient(180deg, #f1faee 0%, white 100%);
}

.rent-box {
  margin-top: var(--spacing-xs);
  background: white;
  border-radius: var(--border-radius);
  padding: var(--spacing-xl);
  border: 1px solid #e6e6e6;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.rent-content h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 10px;
}

.rent-content p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
}

.extra-note {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 5px;
  opacity: 0.9;
}

.rent-btn {
  min-width: 240px;
}

@media (max-width: 960px) {
  .rent-box {
    flex-direction: column;
    text-align: center;
  }

  .rent-btn {
    width: 100%;
  }
}
</style>
