<template>
  <section class="wrapper-bloque wrapper-bloque-formulario" :id="id">

    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} {
      color: {{content.estilos.color_de_texto}};
    }
    .bloque-{{data.bloque.ID}} a{
      color: {{content.estilos.color_de_texto}} !important;
    }
    .bloque-{{data.bloque.ID}} .bloque-title{
      color: {{content.estilos.color_de_titulo}} !important;
    }
    .bloque-{{data.bloque.ID}} .btn{
      color: {{content.estilos.color_de_fondo}} !important;
      background: {{content.estilos.color_de_titulo}} !important;
      border-color: {{content.estilos.color_de_titulo}} !important;
    }
    </v-style>

    <div class="bloque-formulario" :class="`bloque-${ data.bloque.ID }`" :style="{backgroundImage: `url(${require('../assets/imgs/map-image.png')})`}">
      <div
        v-if="content.datos_contacto"
        class="container"
      >
    
        <h2 
        class="bloque-title bloque-title-small" 
        v-if="data.titulo_bloque" 
        v-html="data.titulo_bloque" 
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
        />
    
        <div 
        class="row"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1300"
        >
          <div class="col-md-6">
            
            <p class="text-right sm-text-center">
              <a
                v-if="content.datos_contacto.telefono"
                :href="'tel:' + content.datos_contacto.telefono.replaceAll(' ','')"
                target="_blank"
              >
                {{ content.datos_contacto.telefono }}
                <i class="fa fa-phone"></i>
              </a>
            </p>
            
            <p class="text-right sm-text-center">
              <a
                v-if="content.datos_contacto.mobil"
                :href="'https://api.whatsapp.com/send?l=es&phone=' + content.datos_contacto.mobil.replace('+','').replaceAll(' ','')"
                target="_blank"
              >
                {{ content.datos_contacto.mobil }}
                <i class="fa fa-whatsapp"></i>
              </a>
            </p>
            
            <p class="text-right sm-text-center">
              <a
                v-if="content.datos_contacto.email"
                :href="'mailto:' + content.datos_contacto.email"
                target="_blank"
              >
                {{ content.datos_contacto.email }}
                <i class="fa fa-envelope"></i>
              </a>
            </p>
            <p class="text-right sm-text-center">
              <a
                v-if="content.datos_contacto.web"
                :href="content.datos_contacto.web"
                target="_blank"
              >
                {{ content.datos_contacto.web }}
                <i class="fa fa-globe"></i>
              </a>
            </p>
          </div>
          <div class="col-md-6">

            <!-- condicional url -->            

            <p>
              <!-- link direccion -->
              <a
              v-if="(content.sobre_escribir_enlace_direccion === false || !content.sobre_escribir_enlace_direccion) && content.datos_contacto.direccion"
                :href="'https://www.google.es/maps/place/' + content.datos_contacto.direccion"
                target="_blank"
              >
                <i class="fa fa-map-marker-alt"></i>
                {{ content.datos_contacto.direccion }}
              </a>

              <a
                v-else-if="content.sobre_escribir_enlace_direccion === true"
                :href="content.nueva_url"
                target="_blank"
              >
                <i class="fa fa-map-marker-alt"></i>
                {{ content.datos_contacto.direccion }}
              </a>
              <!-- link direccion -->

            </p>
            
            <p v-for="(sede, i) in content.datos_contacto.sedes" :key="i">  
              <a                
                :href="'https://www.google.es/maps/place/' + sede"
                target="_blank"
              >
                <i class="fa fa-map-marker-alt"></i>
                {{ sede }}
              </a>
            </p>
            


            <!-- condicional url -->




          </div>


        </div>
        <br />
        <br />
        
        <form id="contactForm" :action="`${$config.urlBase}wp-content/themes/hello-theme-child/v3/mail/contact_me.php`" :data-ref="`form_${data.bloque.ID}`" name="sentMessage" novalidate="" @submit.prevent="submitForm">
      
          <input id="from" name="para" type="hidden" :value="content.datos_contacto.email"> 
          <input id="web" name="web" type="hidden" :value="host"> 
          <input id="autor" name="autor" type="hidden" :value="data.bloque.post_author"> 
          
          <input id="desc" name="desc" type="hidden" value="">  
          
          <input id="lang" name="lang" type="hidden" :value="lang">   
          
          <div class="row">
            <div 
            class="col-md-6"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="2000">
              <div class="form-group form-floating">
              <input class="form-control" id="name" name="name" type="text" v-bind:placeholder="txt_nombre" :aria-label="`${txt_nombre}`" aria-required="true" required="" v-bind:data-validation-required-message="txt_requerido">
              <label for="name">{{txt_nombre}}</label>
              <p class="help-block text-danger"></p>
              </div>
              <div class="form-group form-floating">
              <input class="form-control" id="email" name="email" type="email" v-bind:placeholder="txt_email" :aria-label="`${txt_email}`" aria-required="true" required="" v-bind:data-validation-required-message="txt_requerido" data-validation-email-message="Dirección de email incorrecta.">
              <label for="email">{{ txt_email }}</label>
              <p class="help-block text-danger"></p>
              </div>
              <div class="form-group form-floating">
              <input class="form-control" id="phone" name="phone" type="tel" v-bind:placeholder="txt_telefono" :aria-label="`${txt_telefono}`" aria-required="true" required="" v-bind:data-validation-required-message="txt_requerido">
              <label for="phone">{{ txt_telefono }}</label>
              <p class="help-block text-danger"></p>
              </div>
            </div>
            <div 
            class="col-md-6" 
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="2000">
              <div class="form-group form-floating">
              <textarea class="form-control" id="message" name="message" v-bind:placeholder="txt_mensaje" :aria-label="`${txt_mensaje}`" aria-required="true" required="" v-bind:data-validation-required-message="txt_requerido"></textarea>
              <label for="message">{{ txt_mensaje }}</label>
              <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="clearfix"></div>
            
            <div class="col-md-6">
              <span class="mandatory">{{ txt_mandatory }}</span>
            </div>
            
            <div 
            class="col-md-6 text-left" 
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="2000"
            >
              <div class="form-group">
                <input type="checkbox" id="politica" name="politica" aria-required="true" required="" data-validation-required-message="Debes aceptar la política de privacidad."> 
                <label for="politica">
                {{ content.datos_contacto.txt_he_leido ? content.datos_contacto.txt_he_leido : "He leído y acepto la"  }} 
                <a href="/politica-de-privacidad" target="_blank">
                  {{ $content.traducciones ? $content.traducciones.txt_politica_privacidad : "Política de privacidad" }}
                </a> 
                </label>
                <p class="help-block text-danger"></p>
              </div>						
            </div>
            <div class="clearfix"></div>

            <div 
            class="col-lg-12 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="2000">
              <div id="success"></div>
              <button v-if="!sending" id="sendMessageButton" class="btn btn-xl contactame" type="submit">{{ content.datos_contacto.txt_enviar ? content.datos_contacto.txt_enviar : "Enviar" }}</button>
            </div>
          </div>
        </form>
        

      </div>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'
  
  import Vue from "vue";
  import { VueReCaptcha } from 'vue-recaptcha-v3'


  var currentLocation = window.location;
  
  export default {
    mixins: [bloques],
    data() {
      return {
        sending: false,
        host: currentLocation.origin,
        txt_nombre: 'Nombre *',
        txt_email: 'Email *',
        txt_telefono: 'Nombre *',
        txt_mensaje: 'Mensaje *',
        txt_requerido: 'Campo requerido',
        txt_email_ok: 'Mensaje enviado correctamente.',
        txt_email_ko: 'Error al enviar el mensaje. Pruebe de nuevo.',
        txt_mandatory: '(*) Los campos marcados con * son obligatorios.',
        lang: 'es_ES',
        modal: false,
        modalLeyesNewsletter: false
      } 
    },    
    methods: {
      submitForm() {
        
        let $form = document.querySelector(`form[data-ref="form_${this.data.bloque.ID}"]`);

        $form.elements.forEach((element) => {
          element.removeAttribute("aria-invalid")
        })

        this.$recaptcha("contactus").then((token) => {
        
          if( token ){
        
              let toSend = new FormData($form);
        
              toSend.append("token", token);
              toSend.append("recaptcha_codigo", this.$content.acf.recaptcha_codigo); 
        
              if ($form.checkValidity()) {
        
                this.sending = true
        
                let action = $form.getAttribute('action')
        
                this.$axios.post(action, toSend, {headers: {
                  'Content-Type': 'multipart/form-data'
                }})
                .then(() => {
                  document.querySelector('#success').innerHTML = `<div class="alert alert-success" id="GRACIAS-FORM-CONTACTO"><button onclick="document.querySelector('#success').innerHTML=''" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <strong>` + this.txt_email_ok + `</strong></div>`;
        
                  $form.reset()
                  this.sending = false
                })
                .catch(() => {
                  document.querySelector('#success').innerHTML = `<div class="alert alert-danger" id="ERROR-FORM-CONTACTO"><button onclick="document.querySelector('#success').innerHTML=''" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <strong>` + this.txt_email_ko + ` </strong></div>`;
                  this.sending = false
                })
              } else {
                $form.reportValidity();
                $form.elements.forEach( (element) => { 
                  if( element.validity.valid !== true ) element.setAttribute("aria-invalid", true) 
                })
              }
        
          }
        
        });
      
      }
    },
    mounted() {
      
      this.txt_nombre = (this.content.datos_contacto.txt_nombre) ? this.content.datos_contacto.txt_nombre + " *" : "Nombre *";
      this.txt_email = (this.content.datos_contacto.txt_email) ? this.content.datos_contacto.txt_email + " *" : "Email *";
      this.txt_telefono = (this.content.datos_contacto.txt_telefono) ? this.content.datos_contacto.txt_telefono + " *" : "Teléfono *";
      this.txt_mensaje = (this.content.datos_contacto.txt_mensaje) ? this.content.datos_contacto.txt_mensaje + " *" : "Mensaje *";
      this.txt_requerido = (this.content.datos_contacto.txt_requerido) ? this.content.datos_contacto.txt_requerido : "Mensaje *";
      this.txt_email_ok = (this.content.datos_contacto.txt_email_ok) ? this.content.datos_contacto.txt_email_ok : 'Mensaje enviado correctamente.';
      this.txt_email_ko = (this.content.datos_contacto.txt_email_ko) ? this.content.datos_contacto.txt_email_ko : 'Error al enviar el mensaje. Pruebe de nuevo.';
      this.txt_mandatory = (this.content.datos_contacto.txt_mandatory) ? this.content.datos_contacto.txt_mandatory : '(*) Los campos marcados con * son obligatorios.';
      this.lang = (this.$parent.content.lang) ? this.$parent.content.lang : "es_ES";
      
      if( this.$content.acf.recaptcha_codigo ){      
        
        var parentThis = this;
        setTimeout(function(){
          Vue.use(VueReCaptcha, { 
                                  siteKey: parentThis.$content.acf.recaptcha_codigo,
                                  loaderOptions: {
                                    autoHideBadge: true 
                                  }
                                });
          setTimeout(function(){
            
            var recaptchaEmelent =  document.getElementById("g-recaptcha-response")
            
            recaptchaEmelent.setAttribute('aria-label', 'recaptcha')    
            
            recaptchaEmelent.parentNode.nextSibling.setAttribute('title', 'Recaptcha iframe')
                          
          }, 1000); 
            
        }, 3000); 
      }
      
    }
  }
</script>

<style lang="scss">
.bloque-formulario {
    overflow: hidden;
    
    background-repeat: no-repeat;
    background-size: cover;
    
    & a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    
    & .form-group {
      margin-bottom: 25px;
    }
     
    & textarea {
      height: calc( 100% - 24px);
    }

    & .btn {
      display: inline-block;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      line-height: 1.25;
      transition: all .15s ease-in-out;

      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      padding: 20px 40px;
      border-radius: 3px;

      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      text-transform: uppercase;
    }

    .mandatory{
      font-size: 12px;
    }

    @media (max-width: 992px) {
      p {
        text-align: center;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
    
    @media (max-width: 768px) {
      .text-right {
        text-align: center !important;
      }
    }
  }
  .wrapper-popup.popup-newsletter {
    &.p-active {
      background: #1e1e1ede !important;
    }
  }

  .wrapper-popup.popup_legal_newsletter {

    .contenido_leyes_newsletter {
      padding: 15px 15px;
      margin-top: 70px;
    }
  }
</style>
  
