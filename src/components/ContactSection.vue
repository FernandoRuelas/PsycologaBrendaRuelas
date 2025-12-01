<template>
  <section id="contacto" class="contact-section section-padding">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="contact-info">
            <span class="section-label">Contacto</span>
            <h2 class="section-title">Agenda tu primera sesión</h2>
            <p class="contact-description">
              Estoy aquí para ayudarte. Agenda tu cita o contáctame para
              cualquier consulta.
            </p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <v-icon color="white">mdi-map-marker</v-icon>
                </div>
                <div class="info-content">
                  <h4>Ubicación</h4>
                  <p>
                    Blvd. Gustavo Díaz Ordaz 15777, Urias, 22116 <br />Tijuana,
                    B.C.
                  </p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <v-icon color="white">mdi-phone</v-icon>
                </div>
                <div class="info-content">
                  <h4>Teléfono</h4>
                  <p>664 341 2880<br />Lun - Vie: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <v-icon color="white">mdi-email</v-icon>
                </div>
                <div class="info-content">
                  <h4>Email</h4>
                  <p>brendaruelas@hotmail.com<br />Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <v-btn
                icon
                variant="outlined"
                color="primary"
                size="large"
                target="_blank"
                href="https://www.facebook.com/share/12B8e4gqzmk/?mibextid=wwXIfr"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="outlined"
                color="primary"
                size="large"
                  target="_blank"
                href="https://www.instagram.com/psic_ruelas?igsh=MTNxeng3c3o2am5pMQ=="
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="contact-form">
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                v-model="form.name"
                label="Nombre completo"
                variant="outlined"
                color="primary"
                class="mb-4"
                :rules="[rules.required]"
              ></v-text-field>

              <!-- <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                class="mb-4"
                :rules="[rules.required, rules.email]"
              ></v-text-field> -->

              <!-- <v-text-field
                v-model="form.phone"
                label="Teléfono"
                variant="outlined"
                color="primary"
                class="mb-4"
                :rules="[rules.required]"
              ></v-text-field> -->

              <v-select
                v-model="form.service"
                label="Servicio de interés"
                :items="serviceOptions"
                variant="outlined"
                color="primary"
                class="mb-4"
                clearable
                :rules="[rules.required]"
              ></v-select>

              <!-- <v-textarea
                v-model="form.message"
                label="Mensaje"
                variant="outlined"
                color="primary"
                rows="4"
                class="mb-4"
                :rules="[rules.required]"
              ></v-textarea> -->

              <v-btn
                type="submit"
                color="primary"
                size="x-large"
                block
                rounded="pill"
                :loading="loading"
              >
                Enviar Mensaje
                <v-icon end>mdi-send</v-icon>
              </v-btn>
            </v-form>

            <v-alert
              v-if="alert.show"
              :type="alert.type"
              class="mt-4"
              closable
              @click:close="alert.show = false"
            >
              {{ alert.message }}
            </v-alert>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const loading = ref(false);
const alert = ref({
  show: false,
  type: "success",
  message: "",
});

const serviceOptions = [
  "Terapia Individual",
  "Terapia de Pareja",
  "Terapia de Familia",
  "Manejo de Ansiedad",
  "Orientación Vocacional",
  "Crecimiento Personal",
  "Renta de Consultorios",
  "Otro",
];

const rules = {
  required: (value) => !!value || "Este campo es requerido",
  email: (value) => /.+@.+\..+/.test(value) || "Email inválido",
};

const handleSubmit = () => {
  loading.value = true;

 
    loading.value = false;
    alert.value = {
      show: true,
      type: "success",
      message: "¡Gracias por contactarme! Te responderé pronto.",
    };

   

    const phone = "526643412880";
    let message = "";
    if(form.value.service ==="Otro"){
      message = encodeURIComponent(
      `Hola, mi nombre es ${form.value.name} y estoy interesado en poder agendar una cita,.`
    );

    }else{
         message = encodeURIComponent(
          `Hola, mi nombre es ${form.value.name} y estoy interesado en el servicio de ${form.value.service}. Me gustaría agendar una cita.`
        );

    }

    // Detectar si es dispositivo móvil
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/${phone}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
 
};
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #f1faee 0%, white 100%);
}

.contact-info {
  padding-right: var(--spacing-md);
}

.contact-description {
  font-size: 1.1rem;
  color: var(--text-light);
  margin: var(--spacing-md) 0 var(--spacing-lg);
  line-height: 1.7;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.info-item {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius);
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 4px;
}

.info-content p {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.contact-form {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

@media (max-width: 960px) {
  .contact-info {
    padding-right: 0;
    margin-bottom: var(--spacing-lg);
  }
}
</style>
