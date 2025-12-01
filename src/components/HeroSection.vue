<template>
  <section id="inicio" class="hero-section">
    <v-container>
      <v-row align="center" class="hero-content">
        <v-col cols="12" md="6" class="hero-text">
          <div class="hero-badge">
            <v-chip 
              color="primary" 
              variant="tonal" 
              size="small"
              prepend-icon="mdi-check-circle"
            >
              Atención Profesional
            </v-chip>
          </div>
          
          <h1 class="hero-title">
            Tu bienestar emocional es mi prioridad
          </h1>
          
          <p class="hero-description">
            Terapia psicológica personalizada en un espacio seguro y confidencial. 
            Te acompaño en tu proceso de crecimiento personal y sanación.
          </p>
          
          <div class="hero-actions">
            <v-btn
              color="primary"
              size="x-large"
              rounded="pill"
              variant="flat"
              href="#contacto"
              class="mr-4"
            >
              Agendar Cita
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
            
            <v-btn
              color="text"
              size="x-large"
              rounded="pill"
              variant="outlined"
              href="#servicios"
            >
              Ver Servicios
            </v-btn>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Pacientes atendidos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Años de experiencia</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Satisfacción</span>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" class="hero-image-col">
          <div class="hero-image-wrapper">
            <div class="floating-card card-1">
              <v-icon color="primary" size="32">mdi-emoticon-happy-outline</v-icon>
              <span>Ambiente cálido</span>
            </div>
            
            <div class="floating-card card-2">
              <v-icon color="accent" size="32">mdi-shield-check</v-icon>
              <span>100% Confidencial</span>
            </div>
            
            <div class="hero-image">
              <!-- Placeholder - reemplazar con imagen real -->
              <div class="image-placeholder">
                <v-icon size="120" color="primary">mdi-account-heart</v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #F1FAEE 0%, #FFFFFF 100%);
  padding: var(--spacing-xl) 0;
}

.hero-content {
  min-height: 600px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-md);
}

.hero-badge {
  margin-bottom: var(--spacing-sm);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.hero-description {
  font-size: 1.15rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  max-width: 540px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.hero-stats {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: 4px;
}

.hero-image-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(168, 218, 220, 0.3);
}

.image-placeholder {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  background: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  animation: float 3s ease-in-out infinite;
  font-weight: 500;
  font-size: 0.9rem;
}

.card-1 {
  top: 10%;
  right: 0;
  animation-delay: 0s;
}

.card-2 {
  bottom: 15%;
  left: 0;
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 960px) {
  .hero-section {
    padding: var(--spacing-lg) 0;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-actions .v-btn {
    width: 100%;
  }
  
  .floating-card {
    font-size: 0.8rem;
    padding: 12px 16px;
  }
}
</style>