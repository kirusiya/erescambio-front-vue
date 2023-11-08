<template>
  <section class="wrapper-bloque wrapper-slider" :id="id">

    <v-style>
      .bloque-slider.bloque-{{data.bloque.ID}} {

      }
        .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text,
        .bloque-slider.bloque-{{data.bloque.ID}} .slide-element {
          background-color: {{ content.estilos.color_de_fondo }};
          color: {{ content.estilos.color_de_texto }};
        }

        .bloque-slider.bloque-{{data.bloque.ID}} .bloque-titulo {
          color: {{ content.estilos.color_de_titulo }};
        }

        .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-btn {
          color: {{ content.estilos.color_de_enlace }};
          pointer-events: all;
        }

        .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-prev,
        .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-next {
          color: {{ content.estilos.color_de_titulo }};
        }

    </v-style>
    
    <v-style v-if="content.cabeceras.length < 2">
      .bloque-slider.bloque-{{data.bloque.ID}} .swiper-wrapper{
        justify-content: center; 
      }
      
      .bloque-slider.bloque-{{data.bloque.ID}} .swiper-slide-duplicate,
      .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-prev, 
      .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-next,
      .bloque-slider.bloque-{{data.bloque.ID}} .swiper-pagination {
        display: none !important;
      }
    </v-style>

    <div class="bloque-slider" :class="`bloque-${data.bloque.ID}`" >
      
      <swiper 
        class="swiper"
        ref="mySwiper"
        :options="{
          ...swiperOptions,
          ...{ autoplay: { delay: parseInt(content.duracion_transicion) * 1000, disableOnInteraction: false } } 
        }" 
      >
        <template v-for="(slide, i) in content.cabeceras">
          
          <swiper-slide
            v-if="slide.imagen"
            :key="`menu-item-${i}`"
          >
            <v-style :key="`style_slide_${i}`">

              .bloque-slider.bloque-{{data.bloque.ID}} .slide-element.slide-element-{{ i }} {
                justify-content: {{ slide.estilo.alineacion_slide == "right" ? 'flex-end' : slide.estilo.alineacion_slide == "left" ? 'flex-start' : "center" }};
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                height: 100%;
              }
              .bloque-slider.bloque-{{data.bloque.ID}} .slide-content.slide-content-{{ i }} {
                width: {{ slide.estilo.ancho_caja }}%;
                text-align: {{ slide.estilo.alineacion_texto }};
                {{ (slide.estilo.alineacion_vertical_slide == "top") ? 'top: 70px;' : '' }}
                {{ (slide.estilo.alineacion_vertical_slide == "bottom") ? 'bottom: 0px;' : '' }}                
              }
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} {
                  background-color: {{ (slide.estilo.color_fondo_texto || 'transparent')|hexToRGB(slide.estilo.opacidad_fondo) }};
                  {{ (slide.diseno_avanzado == true && slide.estilo.sombreado_texto == false) ? 'text-shadow: none;' : '' }}
                  /*padding: 0% {{ slide.estilo.alineacion_slide == "right" && slide.estilo.distancia_alineacion > 0 ? slide.estilo.distancia_alineacion : 0 }}% 0% {{ slide.estilo.alineacion_slide == "left" && slide.estilo.distancia_alineacion > 0 ? slide.estilo.distancia_alineacion : 0 }}%;*/
                  margin-{{slide.estilo.alineacion_slide}}: {{ slide.estilo.distancia_alineacion }}%;
                  border-radius: {{ slide.estilo.redondeo_bordes }}px
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h1 {
                  color: {{ slide.estilo.color_titulo }} !important;
                  {{ (slide.diseno_avanzado == true && slide.estilo.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                  font-size: {{ slide.estilo.tamano_fuente_titulo }}px; 
                  line-height: {{ parseInt(slide.estilo.tamano_fuente_titulo) + 4 }}px;
                  {{ (slide.estilo.estilo_titulo == "normal") ? 'font-style: normal;' : '' }}  
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h2 {
                  color: {{ slide.estilo.color_titulo }} !important;
                  {{ (slide.diseno_avanzado == true && slide.estilo.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                  font-size: {{ slide.estilo.tamano_fuente_titulo }}px; 
                  line-height: {{ parseInt(slide.estilo.tamano_fuente_titulo) + 4 }}px;
                  {{ (slide.estilo.estilo_subtitulo == "normal") ? 'font-style: normal;' : '' }}
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-0 h2,
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h3 {
                  margin-block-start: 1em;
                  color: {{ slide.estilo.color_subtitulo }} !important;
                  text-shadow: none;
                  font-size: {{ slide.estilo.tamano_fuente_subtitulo }}px; 
                  line-height: {{ parseInt(slide.estilo.tamano_fuente_subtitulo) + 4 }}px;
                  {{ (slide.diseno_avanzado == true && slide.estilo.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content .slide-content-btn.slide-content-btn-{{ i }} {
                  background-color: {{ slide.estilo.color_fondo_boton }};
                  color: {{ slide.estilo.color_texto_boton }};
                  {{ ( slide.diseno_avanzado == true && slide.estilo.color_fondo_boton ) ? 'background-color: ' + slide.estilo.color_fondo_boton + ';' : 'background-color: ' + content.estilos.color_de_titulo + ';' }}
                  {{ ( slide.diseno_avanzado == true && slide.estilo.color_texto_boton ) ? 'color: ' + slide.estilo.color_texto_boton + ';' : 'background-color: ' + content.estilos.color_de_fondo + ';' }}
                  font-size: {{ slide.estilo.tamano_fuente_boton }}px;
                  margin-{{slide.estilo.alineacion_slide}}: 0%;  
                  margin-top: 45px;
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-element-{{i}} .img-desktop{
                  aspect-ratio: {{slide.dimensiones.desktop.ancho}} / {{slide.dimensiones.desktop.alto}}; 
                  height: auto;
                  object-fit: contain; 
                  opacity: 0;
                }
                
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-element-{{i}} .img-mobile {
                  aspect-ratio: {{slide.dimensiones.mobile.ancho}} / {{slide.dimensiones.mobile.alto}}; 
                  height: auto;
                  object-fit: contain; 
                }

              @media (max-width: 768px) {
                
                .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-prev, .bloque-slider.bloque-{{data.bloque.ID}} .swiper-button-next{
                  display: none;
                }
                              
                .bloque-slider.bloque-{{data.bloque.ID}} .slide-element.slide-element-{{ i }} {
                  background-color: {{ (slide.movil.color_fondo_responsive || content.estilos.color_de_fondo) }};
                  justify-content: {{ slide.movil.alineacion_slide == "right" ? 'flex-end' : slide.movil.alineacion_slide == "left" ? 'flex-start' : "flex-start" }}; 
                }

                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} {
                  margin: 0;
                  background-color: {{ (slide.movil.color_fondo_texto || 'transparent')|hexToRGB(slide.movil.opacidad_fondo) }} !important;
                  border-radius: {{ slide.movil.redondeo_bordes }}px 
                }

                .bloque-slider.bloque-{{data.bloque.ID}} .slide-content.slide-content-{{ i }} {
                  width: {{ slide.movil.ancho_caja }}%;
                  padding: 0% {{ slide.movil.alineacion_slide == "right" && slide.movil.distancia_alineacion > 0 ? slide.movil.distancia_alineacion : 0 }}% 0% {{ slide.movil.alineacion_slide == "left" && slide.movil.distancia_alineacion > 0 ? slide.movil.distancia_alineacion : 0 }}%;
                  left: initial;
                  flex-direction: column;
                  top: auto;
                }

                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h1 {
                    color: {{ slide.movil.color_titulo }} !important;
                    {{ ( slide.diseno_avanzado == true && slide.movil.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                    font-size: {{ slide.movil.tamano_fuente_titulo }}px; 
                    line-height: {{ parseInt(slide.movil.tamano_fuente_titulo) + 4 }}px;
                  }
                  
                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h2 {
                    color: {{ slide.movil.color_titulo }} !important;
                    {{ ( slide.diseno_avanzado == true && slide.movil.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                    font-size: {{ slide.movil.tamano_fuente_titulo }}px; 
                    line-height: {{ parseInt(slide.movil.tamano_fuente_titulo) + 4 }}px;
                  }
                  
                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-0 h2,
                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} h3 {
                    color: {{ slide.movil.color_subtitulo }} !important;
                    text-shadow: none;
                    font-size: {{ slide.movil.tamano_fuente_subtitulo }}px; 
                    line-height: {{ parseInt(slide.movil.tamano_fuente_subtitulo) + 4 }}px;
                    {{ ( slide.diseno_avanzado == true && slide.movil.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                  }

                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content-text.slide-content-text-{{ i }} {
                    background-color: {{ (slide.movil.color_fondo_responsive || 'transparent')|hexToRGB(slide.movil.opacidad_fondo) }};

                    {{ ( slide.diseno_avanzado == true && slide.movil.sombreado_texto == false) ? 'text-shadow: none;' : 'text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);' }}
                  }

                  .bloque-slider.bloque-{{data.bloque.ID}} .slide-content .slide-content-btn.slide-content-btn-{{ i }} {
                    background-color: {{ slide.movil.color_fondo_boton }};
                    color: {{ slide.movil.color_texto_boton }}; 
                  }

              }
            </v-style>
            
            <div 
              class="slide-element" 
              :class="`slide-element-${i}`"
              :style="`background-image: url(${slide.imagen_desktop})`"
            >
              
              <img 
              class="imagen-slider img-desktop"
              :src="`${slide.imagen_desktop}`" 
              :width="`${slide.dimensiones.desktop.ancho}`" :height="`${slide.dimensiones.desktop.alto}`"
              
              :alt="`${slide.texto}`" /> 
              
              
              <img 
              v-if="slide.movil"
              class="imagen-slider img-mobile"
              :src="`${slide.imagen_movil ? slide.imagen_movil : slide.imagen_desktop}`" 
              :width="`${slide.dimensiones.mobile.ancho}`" :height="`${slide.dimensiones.mobile.alto}`" 
              
              :alt="`${slide.texto}`" />  
                
              
              <div
                v-if="slide.texto || slide.subtitulo || ( slide.enlace_boton && slide.texto_boton )"
                class="slide-content wow animate__fadeInUp"
                :class="`slide-content-${i}`"
                data-wow-delay="2s"
              >
                <div 
                data-aos="fade-up" 
                data-aos-once="true"
                data-aos-duration="1000"
                class="slide-content-text" 
                :class="`slide-content-text-${i}`">
                  
                  <template v-if="i==0">
                    <h1 v-if="slide.texto" v-html="slide.texto" /> 
                    
                    <h2 
                    v-if="slide.subtitulo"
                    v-html="slide.subtitulo" />
                  </template>
                  
                  <template v-else>
                    <h2 v-if="slide.texto" v-html="slide.texto" /> 
                    
                    <h3 
                    v-if="slide.subtitulo"
                    v-html="slide.subtitulo" />
                  </template>
                  
                  
                  <a
                    v-if="slide.enlace_boton && slide.texto_boton"
                    :href="slide.enlace_boton"
                    title=""
                    class="slide-content-btn"
                    :class="`slide-content-btn-${i}`"
                    v-html="slide.texto_boton" />
                    
                </div>
                
              </div> 
              
              
              
            </div> 
          </swiper-slide>

        </template>
        
        <div v-if="false" class="swiper-pagination" slot="pagination"></div>

        <div class="swiper-button-prev" slot="button-prev" aria-label="Cabecera anterior"></div>
        <div class="swiper-button-next" slot="button-next" aria-label="Cabecera siguiente"></div>
      </swiper>
      
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { bloques } from '../mixins/bloques'

  
  export default {
    mixins: [bloques],
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOptions: {
          autoHeight: false,
          loop: false,
          effect: 'fade',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          a11y: {
            prevSlideMessage: 'Cabecera anterior',
            nextSlideMessage: 'Cabecera siguiente',
          },
        }
      }
    },
    filters: {
      hexToRGB(hex, opacity) {

        let output = hex

        if (hex != 'transparent') {
          
          let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          let rgbObject = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
  
          let rgb = `rgba(${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b})`
  
          let rgba = opacity ? `rgba(${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b}, ${1 - opacity})` : null

          output = rgba ? rgba : rgb
        }
        
        return output
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bloque-slider{
    
  }
  .img-mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .img-desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
    display: none;
  }
  
  .swiper-slide {
    height: auto;
    
    & .slide-element {
      display: flex;
      align-items: center;
      
      flex: 1;
      @media (max-width: 992px) {
        & {
          
        }
      }
      @media (max-width: 768px) {
        background-image: none !important;
        flex-flow: column;
        display: flex;
        flex-direction: column;
        align-items: baseline;        
      }
      .imagen-slider {
        
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        /*
        @media (max-width: 992px) {
          & {
            height: 400px;
          }
        }
        */
        @media (max-width: 768px) { 
          & {
            /* min-height: 300px; */
          }
        }
        &.img-mobile {
          /* height: 300px; */
        }
      }
      & img {
        width: 100%;
      }
    }

    & .slide-content {
      position: absolute;
      z-index: 77;
      padding: 30px;      
      text-align: center;
      
      & .slide-content-text {
        padding: 30px;
      }
      
      & .slide-content-btn {
        text-shadow: none;
      }
      
      @media (max-width: 768px) {
        width: 100% !important;
        padding: 35px !important;
        //display: block !important;
        position: relative;
        box-sizing: border-box;
        text-align: center !important;
        align-items: center;
        display: flex !important;
      }

      & .slide-content-text {
        padding: 30px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        h1, h2 {
          color: #ffffff;
          font-style: italic; 
          font-size: 60px;
          font-weight: 400;
          margin: 0px;
          text-transform: none;

          @media (max-width: 480px) {
            
            line-height: 1.2;
          }  
        }
        h3{
          font-weight: 400;
          text-transform: none;
          margin-bottom: 0;
        }    
      }

      & a {
        display: inline-block;
        text-align: center;
        padding: 15px 25px;
        text-transform: none;
        font-weight: 600;
        margin-top: 25px;
        border: none;
        border-radius: .25rem;
      }
      
      @media (max-width: 768px) {
        & .slide-content-btn {
          font-size: 14px !important;
          line-height: 22px !important;
          padding: 8px 12px;
          margin: 25px 0 0 0 !important;
        }
      }

    }
  }
</style>
