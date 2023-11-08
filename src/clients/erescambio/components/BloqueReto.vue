<template>
  <section class="wrapper-bloque wrapper-bloque-blog" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .swiper-container:before,
      .bloque-{{data.bloque.ID}} .swiper-container:after {
        background-color: {{ content.estilos.color_de_fondo }};
      }
      .bloque-{{data.bloque.ID}} .swiper-button-prev,
      .bloque-{{data.bloque.ID}} .swiper-button-next {
        color: {{ content.estilos.color_de_titulo }};
      }

      .bloque-{{data.bloque.ID}} .swiper-pagination-bullet {
        background-color: {{ content.estilos.color_de_titulo }};
      }
      
      .bloque-{{data.bloque.ID}} .blog-title {
        color: {{ content.estilos.color_de_fondo }};
      }
      
      .bloque-{{data.bloque.ID}} .blog-desc {
        color: {{ content.estilos.color_de_fondo }};
      }
      
      .bloque-{{data.bloque.ID}} .blog-titulo.part,
      .bloque-{{data.bloque.ID}} .blog-subtitulo.part{ 
        background: {{ content.estilos.color_de_enlace }};
        color: {{ content.estilos.color_de_texto }};
        border-bottom: 1px solid {{ content.estilos.color_de_texto }}66;   
      }

      
      .bloque-{{data.bloque.ID}} .blog-tiempo.part,
      .bloque-{{data.bloque.ID}} .blog-target.part{ 
        background: {{ content.estilos.color_de_enlace }};
        color: {{ content.estilos.color_de_enlace }};
        
      }
        .bloque-{{data.bloque.ID}} .blog-tiempo.part .icon,
        .bloque-{{data.bloque.ID}} .blog-target.part .icon{ 
          background: #ffffffbf !important;
          border-bottom: 1px solid {{ content.estilos.color_de_texto }}66; 
        }
        
        .bloque-{{data.bloque.ID}} .blog-tiempo.part .contenido,
        .bloque-{{data.bloque.ID}} .blog-target.part .contenido{ 
          background: {{ content.estilos.color_de_texto }};
          color: {{ content.estilos.color_de_enlace }};
          border-bottom: 1px solid {{ content.estilos.color_de_enlace }}66;
        }


    </v-style>
    <div class="bloque-blog" :class="`bloque-${data.bloque.ID}`">
      <div class="container-fluid text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col blog-descripcion" v-html="content.descripcion" />
        </div>
        <div class="wrapper-swipper-blog">
          <swiper 
            class="swiper"
            :ref="`swiper_${data.bloque.ID}`"
            :options="{
              ...swiperOptions
            }" 
          >
            <template v-for="(blog, i) in content.retos">
              <swiper-slide
                :key="`menu-item-${i}`"
              >
                <div class="slide-element">
                  
                  <a :href="getUrl(blog.reto)" :aria-label="`${blog.reto.titulo}`">
                  
                    <div class="blog-header">
                        <div class="blog-img"
                          :style="{backgroundImage: `url(${blog.reto.imagen})`}"
                        />
                    </div>
                  
                    <div class="blog-content">
                      
                      <div class="blog-titulo part">
                       <span class="icon" title="Reto"><i class="far fa-dot-circle"></i></span>
                       <span class="contenido" v-html="blog.reto.titulo" />
                      </div> 
                      
                      <div class="blog-subtitulo part">
                       <span class="icon" title="Resumen"><i class="fas fa-star"></i></span>
                       <span class="contenido" v-html="blog.reto.subtitulo" /> 
                      </div> 
                       
                      <div class="blog-tiempo part">
                       <span class="icon" title="Tiempo a invertir en el reto"><i class="fas fa-clock"></i></span>
                       <span class="contenido" v-html="blog.reto.tiempo_a_invertir_en_el_reto" /> 
                      </div> 
                      
                      <div class="blog-target part">
                       <span class="icon" title="A quién va dirigido"><i class="fas fa-bullhorn"></i></span>
                       <span class="contenido" v-html="blog.reto.target" />  
                      </div> 
                    
                    </div>               
                  
                  </a>
                  
                </div>
              </swiper-slide>
            </template>
            
            <div class="swiper-pagination" slot="pagination">

            </div>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'

  import { Swiper, SwiperSlide  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    mixins: [bloques],
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          autoHeight: false,
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
          loop: false,
          centeredSlides: true,
          centeredSlidesBounds: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1280: {
              slidesPerView: 3,
              spaceBetween: 0,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            580: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            }
          }
        }
      }
    },
    methods: {
      getUrl(item){
        return window.location.origin + "/" + item.post_name
      }
    },
  }
</script>

<style lang="scss" scoped>

.wrapper-swipper-blog {
  .swiper-container {
    padding: 0px 90px 30px;
    position: relative;
    &:before,
    &:after{
      content: '';
      width: 90px;
      height: 100%;
      position: absolute;
      top: 0px;
      z-index: 99;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
    .swiper-button-prev{
      z-index: 999;
      @media (max-width: 768px) {
        & {
          display: none;
        }
      }
    }
    
    .swiper-button-next {
      z-index: 999;
      @media (max-width: 768px) {
        & {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      /deep/ .swiper-pagination-bullets {
        bottom: -5px !important;
      }
    }

    /deep/ .swiper-pagination-bullet {
      width: 20px !important;
      height: 20px !important;
      &-active {
        opacity: .75;
      }
    }
    @media (max-width: 768px) {
      & {
        padding: 0px 30px 30px;
        margin-left: -30px;
        margin-right: -30px;
        &:before,
        &:after{
          width: 30px;
        }
      }
    }
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0px;
    left: 0;
    width: 100%;
  }
  
  .slide-element {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    margin: 10px 15px 20px;
    background: #fff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 0;
    border-radius: 5px;
    @media (max-width: 768px) {
      & {
        margin: 0;
      }
    }
    &:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    }
    .blog-img {
      height: 0;
      padding-top: 50%;
      position: relative;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .blog-content {
      text-align: center;
      padding: 0px;
      min-height: 175px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;      
    }
    .blog-title {
      font-size: 20px;
      font-style: italic;
      line-height: 1.3em;
      font-weight: 600;
      text-transform: none;
      padding: 0;
      margin: 0 0 20px 0;
      @media (max-width: 768px) {
        & {
          font-weight: 400;
        }
      }
    }
    .blog-desc {
      padding: 0;
      margin: 0;
      line-height: 1;
      font-weight: 400;
      text-transform: none;
      font-size: 16px;
    }
    
    .part{
      display: flex;
      flex: 1;         
      
      span{
        padding: 10px;
        text-align: left;
      }
      
      .icon{
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        text-align: center;
        width: 45px;
        min-width: 45px;
        background: #ffffff4d;
        
        i{
          font-size: 18px;
        }
      }
      
      .contenido{
        flex: 1;     
        padding: 10px 15px;   
      }
      
    }
    
    .blog-titulo .contenido{
      font-weight: bold;
    }
    
  }
    
}
</style>
