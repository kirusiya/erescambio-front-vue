<template>
  <section 
  v-if="items.length > 0 && items.length >= content.minimo_de_fotos_a_mostrar"
  class="wrapper-bloque wrapper-bloque-imagen" 
  :id="id">
    <v-style :all="{data, content, estilos_generales}">
      .bloque-{{data.bloque.ID}} .swiper-button-prev,
      .bloque-{{data.bloque.ID}} .swiper-button-next {
        color: {{ content.estilos.color_de_titulo }};
      }

      .bloque-{{data.bloque.ID}} .slide-element:hover:before {
        background-color: {{ estilos_generales.bloque_principal.color_de_titulo }};
        color: {{ content.estilos.color_de_texto }};
      }

      .bloque-{{data.bloque.ID}} .cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img {
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        width: auto;
      }

    </v-style>
    <v-style 
      v-if="content.mostrar_en_carrusel"
      :all="{data, content, estilos_generales}">
      .bloque-{{data.bloque.ID}} .slide-element:hover:before {
        background-color: {{ content.estilos.color_de_fondo }};
        color: {{ content.estilos.color_de_texto }};
      }
    </v-style>
    <div class="bloque-imagen" :class="`bloque-${data.bloque.ID}`">
      <h2
        class="bloque-title"
        v-if="data.titulo_bloque"
        v-html="data.titulo_bloque"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      />
      <div 
      class="wrapper-swipper" 
      v-if="content.mostrar_en_carrusel"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="2000">
        <swiper 
          class="swiper"
          :ref="`swiper_${data.bloque.ID}`"
          :options="{
            ...swiperOptions,
            ...{slidesPerView: content.minimo_de_fotos_a_mostrar},
            ...{
              breakpoints: {
                1600: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 1,
                },
                580: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                }
              }
            }
          }" 
        >
          <template v-for="(slide, i) in items">
            
            <swiper-slide
              :key="`menu-item-${i}`"
            >
              <div class="slide-element" @click="index = i">
                <div 
                class="swiper-lazy"
                :style="`background-image: url(${slide.src})`" />                
              </div>
            </swiper-slide>
          </template>
          
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div 
      class="wrapper-imagenes" 
      v-else
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="2000">
        <div class="container">
          <div class="row">
            <template v-for="(slide, i) in items">
              <div :key="`imagen_${i}`" class="col-xs-12 col-sm-12 col-lg-4 portfolio-item">  
                <a href="#" class="slide-element" @click="index = i">
                  <img loading="lazy" intrinsicsize="450x450" :src="slide.src" :alt="`${slide.alt}`"  /> 
                </a>
              </div>
            </template>
          </div>
        </div>
        
      </div>
      <CoolLightBox 
        :items="items" 
        :index="index"
        :effect="'fade'"
        @close="index = null">
      </CoolLightBox>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'

  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  import { Swiper, SwiperSlide  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    mixins: [bloques],
    components: {
      Swiper,
      SwiperSlide,
      CoolLightBox
    },
    // Mock
    data() {
      return {
        swiperOptions: {
          autoHeight: false,
          loop: true,
          lazy: true,
          autoplay: {
            delay: (this.content.tiempo_carrusel) ? (this.content.tiempo_carrusel * 1000) : 5000, 
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        index: null,
        items: []
      }
    },

    //kiwop
    mounted() {
      
      let images = document.querySelectorAll('.bloque-imagen img');
      images.forEach((image) => {
        image.addEventListener('load', () => {
          let originalWidth = image.naturalWidth;
          let originalHeight = image.naturalHeight;

          image.setAttribute('width', originalWidth);
          image.setAttribute('height', originalHeight);
        });
      });

      //popup
      setInterval(() => {
        let popup_images = document.querySelectorAll('.cool-lightbox__slide__img img');
        if (popup_images.length > 0) {
          popup_images.forEach((image) => {
            if (!image.getAttribute('width') && !image.getAttribute('height')) {
              let originalWidth = image.naturalWidth;
              let originalHeight = image.naturalHeight;

              image.setAttribute('width', originalWidth);
              image.setAttribute('height', originalHeight);
            }
          });
          //clearInterval(intervalId); // Detiene el setInterval una vez que se establecen las dimensiones
        }
      }, 1000); 


    },
    //kiwop

    created() {
      
      this.items = this.content.galeria.map((g) => {
        return {src: g.url, alt: g.alt}
      })
      
    }

  }
</script>

<style lang="scss" scoped>

.wrapper-bloque-imagen {

  @media (max-width: 768px) {
    .wrapper-swipper .swiper-button-prev, .wrapper-swipper .swiper-button-next {
      display: none;
    }
  }

  .slide-element {
    display: block;
    overflow: hidden;
    transition: all ease .15s;
    position: relative;
    cursor: pointer;
    line-height: 0;
    &:before {
      content: '';
      transition: all ease .3s;
      background-color: transparent;
      font-family: "Font Awesome 5 Free";
      display: flex;
      font-weight: 900;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.95;
    }
    &:hover:before {
      content: "\f067";
      color: #fff;
    }
    img {
      width: auto;
    }
    @media (max-width: 768px) {
      &-img {
        width: auto;
        background-size: cover; 
        background-repeat: no-repeat; 
        background-position: center center;         
      }
    }
  }
  
  .wrapper-imagenes .col-lg-4{
    margin: 15px 0;
  }
  .wrapper-imagenes .col-lg-4 img{
    height: auto;
  }
  .wrapper-imagenes .portfolio-item{
    margin: 0 0 15px;
  }
  .swiper-lazy{
    aspect-ratio: 1;
    padding-top: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
}
</style>
