<template>
  <footer class="footer-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-brand">
            <h3>Dra. Brenda Ruelas</h3>
            <p>Psicología Clínica</p>
            <p class="footer-description">
              Comprometida con tu bienestar emocional y crecimiento personal.
            </p>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre Mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Terapia Individual</a></li>
              <li><a href="#servicios">Terapia de Pareja</a></li>
              <li><a href="#servicios">Manejo de Ansiedad</a></li>
              <li><a href="#servicios">Mindfulness</a></li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <div class="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>
                <v-icon size="18" color="primary">mdi-map-marker</v-icon>
                Blvd. Gustavo Díaz Ordaz 15777, Urias, 22116 Tijuana, B.C.
              </li>
              <li>
                <v-icon size="18" color="primary">mdi-phone</v-icon>
                664 341 2880
              </li>
              <li>
                <v-icon size="18" color="primary">mdi-email</v-icon>
                brendaruelas@hotmail.com
              </li>
             
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <div class="footer-bottom">
        <p>&copy; 2024 Dra. Brenda Ruelas. Todos los derechos reservados.</p>
         <div class="footer-created-by">
          <p>
            Sitio web creado por 
            <a href="https://web-portfolio-lime-pi.vercel.app/" target="_blank">
              Fernando Ruelas
            </a>
          </p>

          <p>
            ¿Quieres una página profesional?  
            <a href="mailto:fernandor.ruelas@gmail.com">
              Contáctame aquí
            </a>
          </p>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, var(--text-color) 0%, #1a202c 100%);
  color: white;
  padding: var(--spacing-xl) 0 var(--spacing-md);
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.footer-brand p {
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-description {
  margin-top: var(--spacing-sm);
  line-height: 1.6;
}

.footer-links h4,
.footer-contact h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 4px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  opacity: 0.8;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  opacity: 0.7;
}

.footer-legal {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.footer-legal a {
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.footer-legal a:hover {
  color: var(--primary-color);
}



.footer-created-by {
  text-align: right;
  font-size: 0.9rem;
}

.footer-created-by a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.footer-created-by a:hover {
  color: #63b3ed;
}

@media (max-width: 960px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .footer-created-by {
    text-align: center;
  }
}

@media (max-width: 960px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
