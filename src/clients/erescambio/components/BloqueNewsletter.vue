<template>
  <section class="wrapper-bloque wrapper-bloque-newsletter" :id="id" v-if="content.newsletter_codigo_mailchimp">
    <v-style :all="{data, content}">
    
    .bloque-{{data.bloque.ID}} .boton-generico {
      border-color: {{content.estilos.color_de_titulo}};
      background-color: {{content.estilos.color_de_titulo}};
      color: {{content.estilos.color_de_fondo}};
    }
    
    .bloque-{{data.bloque.ID}} .wrapper-popup .popup{
      width: auto;
      height: auto;
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup .popup h2{
      color: {{content.estilos.color_de_titulo}};
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup .popup .close-icon {
      top: 90px ;
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.popup_legal_newsletter .popup .close-icon {
      top: 0px ;
    }
    
    </v-style>
    <div class="bloque-newsletter" :class="`bloque-${data.bloque.ID}`">
      <div class="container text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col">
          
            <a 
            v-if="content.tipo_de_formulario == 0"
            @click="modal = !modal" class="boton-generico">
              {{ content.texto_boton_popup }}
            </a>
            
            
            <form 
              v-else
              class="wordpress-ajax-form form-group needs-validation" method="post" :action="urlAction" id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" :data-ref="`form_${data.bloque.ID}`" :ref="`form_${data.bloque.ID}`">
            
              <input type="hidden" name="action" value="znot_guardar_newsletter_hook">                                      
              <input type="hidden" name="ID" value="new">                                      
              <input type="hidden" name="autor_id" :value="data.bloque.post_author">  
            
              <div class="col-12">
                <div class="form-group form-floating">
                  <input type="text" required="required" id="mce-nombre" class="form-control name" name="FNAME" value="" aria-required="true" :placeholder="(content.placeholder_nombre) ? content.placeholder_nombre : 'Escribe tu nombre'">
                  <label for="mce-nombre">{{ (content.placeholder_nombre) ? content.placeholder_nombre : 'Escribe tu nombre' }}</label>
                </div>
              </div>
              
              <br>
              
              <!--
              <div class="col">
                <input type="text" required="required" id="mce-apellidos" class="form-control name" name="apellidos" value="" aria-required="true" placeholder="Escribe tus apellidos">
              </div>
              
              <br>
              -->
              
              <div class="col-12">
                <div class="form-group form-floating">
                  <input type="email" required="required" id="mce-EMAIL" class="form-control email" name="EMAIL" value="" aria-required="true" :placeholder="(content.placeholder_email) ? content.placeholder_email : 'Escribe tu email'"> 
                  <label for="mce-EMAIL">{{ (content.placeholder_email) ? content.placeholder_email : 'Escribe tu email' }}</label>
                </div>
              </div>
              
              <br>
              
              <div class="form-group" :style="`color: ${content.estilos.color_de_titulo} !important;`">
                <input class="form-control mr-2" type="checkbox" name="politica" id="newsletter_politica" required="required"  aria-invalid="false"> 
                <label for="newsletter_politica">{{ (content.placeholder_he_leido) ? content.placeholder_he_leido : 'He leído y acepto la' }} <a href="/politica-de-privacidad" target="_blank" :style="`color: ${content.estilos.color_de_texto} !important; cursor: pointer;`">{{ (content.texto_enlace_politica_privacidad) ? content.texto_enlace_politica_privacidad : 'política de privacidad' }}</a></label>
              </div>
              
              <br>
              <div class="col-12 loading">
                <input type="submit" class="btn btn-xl newsletter" id="mc-embedded-subscribe" name="subscribe" :value="content.newsletter_texto_boton" :style="`border-color: ${content.estilos.color_de_titulo} !important;background: ${content.estilos.color_de_titulo} !important; color: ${content.estilos.color_de_fondo} !important;`">
              </div>
            </form>
            
          </div>
        </div>
      </div>
      
      <popup class="fancybox-slide--current popup-newsletter" v-if="modal" :pactive="modal" @popup-update="modal = arguments[0]">
        <v-style>
          .form-newsletter {
            background: {{content.estilos.color_de_fondo}};
            margin-bottom: 44px;
          }
        </v-style>
        <div class="form-newsletter animated-modal p-5 text-center fancybox-content">
          <h2
            v-html="content.newsletter_titulo_popup"
            :style="`color: ${content.estilos.color_de_titulo}!important;`"
          />
          <form class="wordpress-ajax-form form-group needs-validation" method="post" :action="urlAction" id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" :data-ref="`form_${data.bloque.ID}`" :ref="`form_${data.bloque.ID}`">
          
            <input type="hidden" name="action" value="znot_guardar_newsletter_hook">                                      
            <input type="hidden" name="ID" value="new">                                      
            <input type="hidden" name="autor_id" :value="data.bloque.post_author">  
          
            <div class="col">
              <div class="form-group form-floating">
                <input type="text" required="required" id="mce-nombre" class="form-control name" name="FNAME" value="" aria-required="true" :placeholder="(content.placeholder_nombre) ? content.placeholder_nombre : 'Escribe tu nombre'">
                <label for="mce-nombre">{{ (content.placeholder_nombre) ? content.placeholder_nombre : 'Escribe tu nombre' }}</label>
              </div>
            </div>
            
            <br>
            
            <!--
            <div class="col">
              <input type="text" required="required" id="mce-apellidos" class="form-control name" name="apellidos" value="" aria-required="true" placeholder="Escribe tus apellidos">
            </div>
            
            <br>
            -->
            
            <div class="col-12">
              <div class="form-group form-floating">
                <input type="email" required="required" id="mce-EMAIL" class="form-control email" name="EMAIL" value="" aria-required="true" :placeholder="(content.placeholder_email) ? content.placeholder_email : 'Escribe tu email'"> 
                <label for="mce-EMAIL">{{ (content.placeholder_email) ? content.placeholder_email : 'Escribe tu email' }}</label>
              </div>
            </div>
            
            <br>
            
            <div class="form-group" :style="`color: ${content.estilos.color_de_titulo} !important;`">
              <input class="form-control mr-2" type="checkbox" id="newsletter_politica" name="politica" required="" data-validation-required-message="Debes aceptar la política de privacidad." aria-invalid="false"> 
              <label for="newsletter_politica">{{ (content.placeholder_he_leido) ? content.placeholder_he_leido : 'He leído y acepto la' }} <a href="/politica-de-privacidad" target="_blank" :style="`color: ${content.estilos.color_de_texto} !important; cursor: pointer;`">{{ (content.texto_enlace_politica_privacidad) ? content.texto_enlace_politica_privacidad : 'política de privacidad' }}</a></label>               
            </div>
            
            <br>
            <div class="col-12 loading">
              <input type="submit" class="btn btn-xl newsletter" id="mc-embedded-subscribe" name="subscribe" :value="content.newsletter_texto_boton" :style="`border-color: ${content.estilos.color_de_titulo} !important;background: ${content.estilos.color_de_titulo} !important; color: ${content.estilos.color_de_fondo} !important;`">
            </div>
          </form>
        </div>
      </popup>
      
      <!--
      <popup class="fancybox-slide--current popup_legal_newsletter" :pactive="modalLeyesNewsletter" @popup-update="modalLeyesNewsletter = arguments[0]"> 
        <v-style>
        .wrapper-popup.p-active{
          padding: 0 !important;
        }
        .popup{
          width: 100%;
          height: 100%;
        }
        </v-style>
        
        <div class="container contenido_leyes_newsletter"></div>
        
      </popup>
      -->


    </div>
    
  </section>
</template>

<script>
  import Popup from './Popup'
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    components: {
      Popup
    },
    data() {
      return {
        modal: false,
        modalLeyesNewsletter: false
      }
    },
    methods: {
      // submitForm() {
      //   let $form = document.querySelector(`form[data-ref="form_${this.data.bloque.ID}"]`);
      //   let toSend = new FormData($form)
      // 
      //   if (this.content.newsletter_codigo_mailchimp == '') {
      //     let action = $form.getAttribute('action')
      // 
      //     document.querySelector('.loading').innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
      // 
      //     /* eslint-disable-next-line */
      //     ga('send', 'event', 'Conversion', 'NewsletterOK', 'Footer');
      // 
      //     this.$axios.post(action, toSend, {headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }})
      //     .then(() => {
      //       document.querySelector('.loading').innerHTML = '<span style="background: #fdc652;padding: 10px 20px;margin-top: 15px;display: inline-block;border-radius: 4px;">Te has suscrito correctamente al newsletter</span>';
      //     })
      //   } else {
      //     toSend.submit()
      //   }
      // }      
    },
    computed: {
      urlAction() {
        return this.content.newsletter_codigo_mailchimp ? this.content.newsletter_codigo_mailchimp : `${this.$config.urlBase}wp-admin/admin-ajax.php`
      }
    },
    mounted() {      
      var parentThis = this;
      
      if(this.content.mostrar_x_segundos > 0 ){
        setTimeout(function(){
            document.querySelector(".bloque-" + parentThis.data.bloque.ID + " .boton-generico").click(); 
        }, this.content.mostrar_x_segundos * 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-popup.popup-newsletter{
    &.p-active{
      background: #1e1e1ede !important;  
    }
  }
  
  .wrapper-popup.popup_legal_newsletter{
    
    .contenido_leyes_newsletter{
      padding: 15px 15px;
      margin-top: 70px;
    }
  }
</style>
