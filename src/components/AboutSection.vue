<template>
  <section id="sobre-mi" class="about-section section-padding">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="about-image-wrapper">
            <div class="about-image">
              <div class="image-placeholder">
                <!-- <v-icon size="100" color="primary">mdi-account</v-icon> -->
                <img src="../assets/BrendaRuelas.jpeg" alt="brenda ruelas" width="500px" height="500px">
              </div>
            </div>
            <div class="experience-badge">
              <span class="badge-number">5+</span>
              <span class="badge-text">Años de<br />Experiencia</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="about-content">
            <span class="section-label">Sobre Mí</span>
            <h2 class="section-title">Comprometida con tu salud mental</h2>

            <p class="about-text">
              Soy psicóloga clínica con más de 5 años de experiencia ayudando a
              personas a superar desafíos emocionales y alcanzar su mejor
              versión. Mi enfoque se centra en crear un espacio seguro donde
              puedas expresarte libremente.
            </p>

            <p class="about-text">
              Me especializo en terapia cognitivo-conductual y enfoques
              humanistas, adaptando cada sesión a las necesidades únicas de cada
              paciente.
            </p>

            <div class="credentials">
              <div class="credential-item">
                <v-icon color="primary" size="24">mdi-school</v-icon>
                <div>
                  <h4>Maestría en Psicología Clínica</h4>
                  <span>Universidad Nacional Autónoma</span>
                </div>
              </div>

              <div class="credential-item">
                <v-icon color="primary" size="24">mdi-certificate</v-icon>
                <div>
                  <h4>Curso experto en inteligencia emocional</h4>
                  <span>AEPSIS, UDEMY</span>
                </div>
              </div>
              <div class="credential-item">
                <v-icon color="primary" size="24">mdi-certificate</v-icon>
                <div>
                  <h4>
                    inteligencia emocional AEPSIS, UDEMY Curso de formación
                    integral en Biodescodificación
                  </h4>
                  <span>UDEMY</span>
                </div>
              </div>



               <div class="credential-item">
                <v-icon color="primary" size="24">mdi-certificate</v-icon>
                <div>
                  <h4>
                  Certificación en terapia cognitivo-conductual
                  </h4>
                  <span>UDEMY</span>
                </div>
              </div>

               <div class="credential-item">
                <v-icon color="primary" size="24">mdi-certificate</v-icon>
                <div>
                  <h4>
                 Curso en área de duelos
                  </h4>
                  <span>UDEMY</span>
                </div>
              </div>

               <div class="credential-item">
                <v-icon color="primary" size="24">mdi-certificate</v-icon>
                <div>
                  <h4>
                Curso experto en terapia de pareja
                  </h4>
                  <span>AEPSIS, UDEMY</span>
                </div>
              </div>



              <!-- <div class="credential-item">
                <v-icon color="primary" size="24">mdi-account-group</v-icon>
                <div>
                  <h4>Miembro del Colegio de Psicólogos</h4>
                  <span>Cédula Profesional: 12345678</span>
                </div>
              </div> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background-color: white;
}

.section-label {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.about-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.about-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3/4;
  border-radius: var(--border-radius);
  background: linear-gradient(
    135deg,
    var(--accent-color),
    var(--primary-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(168, 218, 220, 0.2);
}

.image-placeholder {
  width: 55%;
  height: 75%;
  border-radius: var(--border-radius);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: 20px;
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  min-width: 140px;
}

.badge-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.badge-text {
  display: block;
  font-size: 0.85rem;
  color: var(--text-light);
  margin-top: 8px;
  line-height: 1.3;
}

.about-content {
  padding: 0 var(--spacing-md);
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
}

.credentials {
  margin-top: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.credential-item {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.credential-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 4px;
}

.credential-item span {
  font-size: 0.9rem;
  color: var(--text-light);
}

@media (max-width: 960px) {
  .about-content {
    padding: 0;
    margin-top: var(--spacing-lg);
  }
}
</style>
