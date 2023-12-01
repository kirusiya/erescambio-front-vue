<template>
  <section class="wrapper-bloque wrapper-bloque-iconos" :id="id">

    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} {
      color: {{content.estilos.color_de_texto}};
    }
    .bloque-{{data.bloque.ID}} h1, .bloque-{{data.bloque.ID}} h2, .bloque-{{data.bloque.ID}} h3, .bloque-{{data.bloque.ID}} h4, .bloque-{{data.bloque.ID}} h5, .bloque-{{data.bloque.ID}} h6 {
      color: {{content.estilos.color_de_titulo}};
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active,
    .bloque-{{ data.bloque.ID }} .wrapper-popup.p-active .popup{
      background: {{popup.color_popup_fondo}} !important;        
      color: {{popup.color_popup_texto}} !important;        
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h1,
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h2,
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h3,
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h4,
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h5,
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup h6{
      color: {{popup.color_popup_titulo}} !important;        
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup a{
      color: {{popup.color_popup_enlace}} !important;         
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup p{
      color: {{popup.color_popup_texto}} !important;          
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.p-active .popup .close-icon{
      color: {{popup.color_popup_texto}} !important;      
      background: none;
      top: 25px;     
    }
    .bloque-{{data.bloque.ID}} a,
    .bloque-{{data.bloque.ID}} .popup a
    {
      color: {{content.estilos.color_de_enlace}};
    }
    .bloque-{{data.bloque.ID}} .fa-stack{
      border-radius: {{content.redondeo_icono}}%;
    }

    .bloque-{{data.bloque.ID}} .bloque-title.tituloLado {
      margin-bottom: 20px;
      text-align: left;
      font-size: 25px;
      font-weight: 700;
      margin-top: 0;
    }

    .bloque-{{data.bloque.ID}} .bloque-titulo p,
    .bloque-{{data.bloque.ID}} .bloque-titulo h1,
    .bloque-{{data.bloque.ID}} .bloque-titulo h2,
    .bloque-{{data.bloque.ID}} .bloque-titulo h3,
    .bloque-{{data.bloque.ID}} .bloque-titulo h4,
    .bloque-{{data.bloque.ID}} .bloque-titulo h5,
    .bloque-{{data.bloque.ID}} .bloque-titulo h6 {
      margin-top: 0 !important;
      margin-bottom: 25px;
      line-height: inherit;      
    }

    .bloque-{{data.bloque.ID}} .iconosCostado .fa-stack {
      width: 100% !important;
      height: auto !important;
    }

    .bloque-{{data.bloque.ID}} .iconosCostado .icono .icono-title {
      min-height: unset;
      font-size: 15px;
      line-height: normal;
      margin: 10px 0;
      margin-top: 15px;
    }

    .bloque-{{data.bloque.ID}} .iconosCostado .icono .boton {
      font-size: 14px;
      padding: 5px 10px;
    }

    .bloque-{{data.bloque.ID}} .iconosCostado .icono .icono-texto {
      font-size: 12px;
      padding: 0;
      line-height: normal;
    }

    .bloque-{{data.bloque.ID}} .iconosCostado .icono .separator {
      margin: 0 auto 10px;
    }

    @media (min-width: 991px){
      .col-lg-55 {
        flex: 0 0 20%;
        max-width: 20%;
      }
    }

    @media (max-width: 991px){
      .bloque-{{data.bloque.ID}} .iconosCostado .fa-stack {
        width: 160px !important;
      }
    }


    @media (max-width: 767px){
      .bloque-{{data.bloque.ID}} .iconosCostado .icono .icono-title {
        min-height: 60px;
        font-size: larger;
        margin: 15px 0;
      }

      .bloque-{{data.bloque.ID}} .iconosCostado .icono .icono-texto {
        font-size: 14px;
        padding: 0 20px;
      }

      .bloque-{{data.bloque.ID}} .iconosCostado .icono .boton {
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
      }

      .bloque-{{data.bloque.ID}} .iconosCostado .icono .separator {
        margin: 0 auto 30px;
      }

    }
    
    </v-style>

    <div
      class="bloque-iconos"
      :class="`bloque-${data.bloque.ID}`"
    >


      <!-- bloque imagen mitad cambio a privado testes files-->

      <div v-if="content.imagen_mitad_iconos_mitad === true">  

        <div class="container">

          <div class="row">

            <div class="col-md-12 col-lg-12 text-center">

              <h2
                class="bloque-title"
                v-if="data.titulo_bloque" 
                v-html="data.titulo_bloque"
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="1000"
              />    
            </div>

            <!-- mitad imagen -->  
            
            <div class="col-sm-12 col-md-5 col-lg-5 mb-4" :class="{ 'order-1': content.imagen_lado === 'der' }">

              <div v-if="content.imagen_completa">
                <img 
                  loading="lazy"
                  class="img-fluid"
                  :src="content.imagen_completa"
                  data-aos="fade"
                  data-aos-once="true"
                  data-aos-duration="1000" 
                  alt=""
                />
              </div> 
            </div>
            <!-- mitad imagen --> 
            
            <!-- mitad texto + iconos --> 
            <div class="col-sm-12 col-md-7 col-lg-7">

              <!--<h4
                class="bloque-title tituloLado"
                v-if="content.titulo_lado" 
                v-html="content.titulo_lado"
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="1000"
              />--> 

              <div 
                v-if="content.titulo_lado" 
                v-html="content.titulo_lado" 
                class="bloque-titulo" 
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="1000"
              />


              <div 
                v-if="content.descripcion" 
                v-html="content.descripcion" 
                class="descripcion descLado " 
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="1000"
              />  
              
              <div class="row  justify-content-around iconosCostado">
                <template
                  v-for="(mi_icono, i) in content.iconos"
                >
                
                  <icono
                    v-if="parseInt(content.iconos_por_fila.trim()) === 5 " 
                    :key="`icono_${i}`"
                    :content="mi_icono" 
                    :tipo="content.relacion_aspecto"
                    class="col-12 col-sm-12 col-lg-55 portfolio-item"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  />

                  <icono
                    v-if="parseInt(content.iconos_por_fila.trim()) !== 5 " 
                    :key="`icono_${i}`"
                    :content="mi_icono" 
                    :tipo="content.relacion_aspecto"
                    :class="content.iconos_por_fila|columns"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  />
                </template>
                
              </div>


            </div>
            <!-- mitad texto + iconos --> 

          </div><!-- fin row -->
          

          
          
          
          
          

          

        </div><!-- fin container-->

      </div><!-- fin condicional -->

      <!-- bloque imagen mitad -->


      <!-- bloque normal -->

      <div v-if="content.imagen_mitad_iconos_mitad === false || !content.imagen_mitad_iconos_mitad">  

        <div class="container text-center">
      
          <h2
            class="bloque-title"
            v-if="data.titulo_bloque" 
            v-html="data.titulo_bloque"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
          />

          
          <div 
            v-if="content.descripcion" 
            v-html="content.descripcion" 
            class="descripcion false " 
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
          />
          

          <div class="row justify-content-around">
            <template
              v-for="(mi_icono, i) in content.iconos"
            >
           
              <icono
                v-if="parseInt(content.iconos_por_fila.trim()) === 5 " 
                :key="`icono_${i}`"
                :content="mi_icono" 
                :tipo="content.relacion_aspecto"
                class="col-xs-12 col-sm-12 col-lg-55 portfolio-item"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              />

              <icono
                v-if="parseInt(content.iconos_por_fila.trim()) !== 5 " 
                :key="`icono_${i}`"
                :content="mi_icono" 
                :tipo="content.relacion_aspecto"
                :class="content.iconos_por_fila|columns"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              />
            </template>



            
          </div>
        </div>

      </div>

      <!-- bloque normal -->



    </div>
  </section>
</template>

<script>
  import Icono from './Icono.vue';
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    components: {
      Icono
    },
    data(){
      return {
        popup: {
                  color_popup_fondo: "",
                  color_popup_titulo: "",
                  color_popup_enlace: "",
                  color_popup_texto: ""
               },
      }
    },
    //kiwop
    mounted() {
      
      let images = document.querySelectorAll('.bloque-iconos img');
      images.forEach((image) => {
        image.addEventListener('load', () => {
          let originalWidth = image.naturalWidth;
          let originalHeight = image.naturalHeight;

          image.setAttribute('width', originalWidth);
          image.setAttribute('height', originalHeight);
        });
      });
    },
    //kiwop
    
    created(){
      
      // this.popup.color_popup_fondo = this.content.estilos.color_de_fondo
      // this.popup.color_popup_titulo = this.content.estilos.color_de_titulo
      // this.popup.color_popup_enlace = this.content.estilos.color_de_enlace
      // this.popup.color_popup_texto = this.content.estilos.color_de_texto
      
      if( this.content.popup ){
        if( this.content.popup.color_popup_fondo ){
          this.popup.color_popup_fondo = this.content.popup.color_popup_fondo
        } 
        if( this.content.popup.color_popup_titulo ) this.popup.color_popup_titulo = this.content.popup.color_popup_titulo
        if( this.content.popup.color_popup_enlace ) this.popup.color_popup_enlace = this.content.popup.color_popup_enlace
        if( this.content.popup.color_popup_texto ) this.popup.color_popup_texto = this.content.popup.color_popup_texto
      }      
        
    }
  }
</script>

<style lang="scss" scoped>
  .bloque-title {
    margin: 10px 0px 90px 0px;
  }
  .descripcion{
    margin-bottom: 60px; 
  }
</style>
