<template>
  <section 
  class="wrapper-bloque wrapper-bloque-blog" 
  :id="id"
  v-if="content.promociones.length > 0">
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
      
      .bloque-{{data.bloque.ID}} .blog-titulo{ 
        color: {{ content.estilos.color_de_enlace }};        
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: left;
      }

        
        .bloque-{{data.bloque.ID}} .blog-content .part1{
          background-color: #f7f7f7;
          color: #777777 !important; 
          font-size: 18px;
          font-weight: 600;
        }
        
        .bloque-{{data.bloque.ID}} .blog-content .part2{
          background-color: #eaeaea;
          color: #7A7A7A;
          font-size: 18px;
          font-weight: 600;
        }
        
        .bloque-{{data.bloque.ID}} .blog-content .part3{
          background-color: {{ content.estilos.color_de_enlace }};
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
        }
        
        .bloque-{{data.bloque.ID}} .blog-content .part4{
          background-color: #999999;
          color: #ffffff  ;
          font-size: 18px;
          font-weight: 600;
        }
        
        .bloque-{{data.bloque.ID}} .blog-content .btn{ 
          background: {{ content.estilos.color_de_enlace }};
          color: #ffffff;
          padding: 15px;
          border-bottom: 1px solid {{ content.estilos.color_de_enlace }}66;
          margin-top: 20px;
          font-size: 14px;
          font-weight: bold;
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
            <template v-for="(blog, i) in content.promociones">
              <swiper-slide
                :key="`menu-item-${i}`"
              >
                <div class="slide-element">
                  
                    <div class="blog-content">
                      
                        
                      <div class="blog-top">
                       <span class="tipo" v-html="blog.promocion.tipo" /> 
                       
                       <div class="fechas">                       
                         <i class="fas fa-calendar-alt"></i>
                         <span class="fecha_inicio" v-html="blog.promocion.fecha_inicio" />
                         <span class="con"> | </span> 
                         <span class="fecha_fin" v-html="blog.promocion.fecha_fin" /> 
                       </div>
                       
                      </div> 
                    
                      <div class="blog-titulo">
                       <span class="" v-html="blog.promocion.titulo" />
                      </div>
                      
                      <div class="ofrecido_por">
                       <span class="sub">Ofrecido por</span>
                       <span class="nombre" v-html="blog.promocion.titulo" />
                      </div>                       
                      
                      <div class="blog-boxes"> 
                      
                        <div class="part part1">
                         <span class="subcontenido">Precio</span> 
                         <span class="contenido" v-html="blog.promocion.precio_normal + '€'" /> 
                        </div> 
                        
                        <div class="part part2">
                         <span class="subcontenido">Ahorra</span> 
                         <span class="contenido" v-html="(blog.promocion.precio_normal - blog.promocion.precio_para_la_comunidad)  + '€'" />  
                        </div> 
                        
                        <div class="part part3">
                         <span class="subcontenido">Erescambio</span>
                         <span class="contenido" v-html="blog.promocion.precio_para_la_comunidad  + '€'" />  
                        </div> 
                        
                        <div class="part part4">
                         <span class="subcontenido">Quedan</span>
                         <span class="contenido" v-html="blog.promocion.numero_disponible" />  
                        </div>
                         
                      </div>   
                      
                      <a 
                      class="btn"
                      :href="blog.promocion.url"
                      target="_blank"
                      >
                      Consigue tu código de promoción
                      </a>
                    
                    </div>               
                  
                  
                  
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
          centeredSlidesBounds: false,
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
    }
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
      background: #ffffff;
      text-align: center;
      padding: 0px;
      min-height: 175px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;     
      padding: 30px; 
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
    
    .blog-boxes{
      flex-wrap: wrap;
      display: flex;
    }
    
    .blog-top{
      display: flex;
      justify-content: space-between;
      color: #777777 !important;
      margin-bottom: 20px;
      
      .tipo{
        font-weight: 600 !important;
        text-transform: capitalize !important;
      }
      .fechas{
        font-size: 12px;
        
        .fas{
          padding-right: 5px;
        }
        
        .con{
          color: #DDDDDD;
          margin: 0 8px;
        }
      }
    }
    
    .part{
      display: flex;
      flex-direction: column;
      flex: 1;     
      flex-wrap: wrap;
      border-radius: 7px;
      padding: 10px 15px;    
      margin: 4px;
      
      span{
        text-align: left;
      }
      
      &.part1 .contenido{
        text-decoration: line-through;
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
      
      .subcontenido{
        flex: 1; 
        text-align: center; 
        padding: 0; 
        background: none;
        font-size: 11px;
        font-weight: normal;
        line-height: 12px;
      }
      
      .contenido{
        flex: 1; 
        text-align: center; 
        padding: 0; 
        background: none;
      }
      
    }
    
    .blog-titulo .contenido{
      font-weight: bold;
    }
    
    .ofrecido_por{
      text-align: left;
      display: block;
      font-size: 14px;
      color: #333 !important;
      line-height: 16px;
      font-weight: normal;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      
      .sub{
        color: #333 !important;
        line-height: 16px;
        font-weight: 600;
      }
      .nombre{
        font-size: 12px;
        line-height: 14px;
        margin-top: 5px;
      }
    }
    
  }
    
}
</style>
