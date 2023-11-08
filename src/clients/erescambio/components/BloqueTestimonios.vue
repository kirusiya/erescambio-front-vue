<template>
  <section 
    v-if="content.comentarios.length > 0"
    class="wrapper-bloque wrapper-bloque-testimonios" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .testimonio-title{
        color: {{content.estilos.color_de_texto}};
      }
      .bloque-{{data.bloque.ID}} .testimonio-content {
        color: {{content.estilos.color_de_texto}};
      }
      .bloque-{{data.bloque.ID}} .swiper-button-prev,
      .bloque-{{data.bloque.ID}} .swiper-button-next {
        color: {{ content.estilos.color_de_titulo }};
      }
      .bloque-{{data.bloque.ID}} .testimonio-header .fa-stack{
        border-radius: {{content.redondeo_icono}}%;
        border: {{content.grosor_borde}}px solid {{content.color_borde}};        
      }
      
      .bloque-{{data.bloque.ID}} .mosaico{
        border-bottom: 1px solid {{content.estilos.color_de_texto}}1a;
      }
      .bloque-{{data.bloque.ID}} .mosaico .testimonio-imagen{        
      }
      .bloque-{{data.bloque.ID}} .mosaico .testimonio-imagen .fa-stack.foto{
        border-radius: {{content.redondeo_icono}}%;
        border: {{content.grosor_borde}}px solid {{content.color_borde}};          
      }
    </v-style>
    <div class="bloque-testimonios text-cente" :class="`bloque-${data.bloque.ID}`">
      <h2
        class="bloque-title bloque-title-small"
        v-if="data.titulo_bloque"
        v-html="data.titulo_bloque"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      />
      
      <div class="container justify-content-around"
      v-if="content.mostrar_en_listado"
      >
            <div 
            :class="`row mosaico testimonio-${i%2} ${getClass(testimonio)}`" 
            v-for="(testimonio, i) in content.comentarios"
            :key="`menu-item-${i}`">
              
              <div class="col-12 col-lg-4 testimonio-imagen" :style="{backgroundImage: `url(${testimonio.foto})`}">
                <span 
                class="fa-stack foto" 
                v-if="testimonio.foto"
                :style="{backgroundImage: `url(${testimonio.foto})`}" />
              </div>
              
              <div class="col-12 col-lg-8 testimonio-texto">
                  <div class="testimonio-header">
                    
                      <h3 
                      class="testimonio-title" 
                      v-html="testimonio.nombre"
                      />
                    
                      <div class="stars" v-if="testimonio.valoracion > 0">
                        <i
                          v-for="star in parseInt(testimonio.valoracion)"
                          :key="`stars_${i}_${star}`"
                          class="fa fa-star"
                        ></i>

                      </div>
                    
                  </div>
                  <p 
                  class="testimonio-content"
                  v-html="testimonio.testimonio" />
              </div>    
              
            </div>
        
      </div>
      
      <div 
      v-else
      class="container testimonios"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1500">
        <div class="wrapper-swipper">
          <swiper 
            class="swiper"
            :ref="`swiper_${data.bloque.ID}`"
            :options="{
              ...swiperOptions,
              ...{ autoplay: { delay: parseInt(content.duracion_transicion) * 1000, disableOnInteraction: false } }
            }" 
          >
            <template v-for="(testimonio, i) in content.comentarios">
              
              <swiper-slide
                :key="`menu-item-${i}`"
              >
                <div class="slide-element">
                  <div class="testimonio-header">
                    <span 
                    class="fa-stack foto" 
                    v-if="testimonio.foto"
                    :style="{backgroundImage: `url(${testimonio.foto})`}" />
                    <div class="stars" v-if="testimonio.valoracion > 0">
                      <i
                        v-for="star in parseInt(testimonio.valoracion)"
                        :key="`stars_${i}_${star}`"
                        class="fa fa-star"
                      ></i>

                    </div>
                    <h3 
                    class="testimonio-title" 
                    v-html="testimonio.nombre"
                    />
                  </div>
                  <p 
                  class="testimonio-content"
                  v-html="testimonio.testimonio" />
                </div>
              </swiper-slide>
            </template>
            
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
        mosaic: true,
        swiperOptions: {
          autoHeight: false,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          a11y: {
            prevSlideMessage: 'Testimonio anterior',
            nextSlideMessage: 'Testimonio siguiente',
          }
        },
      }
    },
    methods: {
      getClass(item){
        var clase = "";
        
        if( this.content.redondeo_icono > 0){
          clase += " no-bg";
        }
        
        if( this.content.vista_alterna){
          clase += " alt"; 
        }
        
        if(!item.foto){
          clase += " no-img"; 
        }
        
        return clase;
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  margin-bottom: 35px;
}

.mosaico{
  padding: 30px 0;
  margin: 0;
  font-size: inherit;
  min-height: 350px;
  
  .testimonio-imagen{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .foto{
      width: 200px !important;
      height: 200px !important;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      display: none;
    }
  }
  
  &.no-bg{
    .testimonio-imagen{
      background: none !important;    
      
      .foto{
        display: inline-block;
      }  
    }
  }
  
  .testimonio-texto{
    padding: 15px 35px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
    h3.testimonio-title{
      margin: 0 0 15px 0;
      font-size: 1.2rem;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .stars {
      margin: 10px 0;
      font-size: 0.85rem;
      letter-spacing: 8px;
      i {
        color: orange;
      }
    } 
    .testimonio-content{
      margin: 0;
    }   
  }
  
  &.alt.testimonio-0{
    .testimonio-imagen{
      order: 1;
    }
    .testimonio-texto{
      order: 2;
      padding-right: 0;
    }
  }
  &.alt.testimonio-1{
    .testimonio-imagen{
      order: 2;
    }
    .testimonio-texto{
      order: 1;
      padding-left: 0;
    }
  }
  &.no-img{
    min-height: 0;
    
    .testimonio-imagen{
      width: 0;
      max-width: 0;
      padding: 0;
      flex: 0;
    }
    .testimonio-texto{
      width: 100%;
      max-width: 100%;
      flex: 0 0 100%;
      padding: 0;
    }
  }
  
  &:last-child {
    border: none !important;
  }
  
  @media(max-width: 991px){ 
    .testimonio-imagen{
      background: none !important;
      order: 1 !important;
      padding-bottom: 25px;
      
      .foto{
        display: inline-block;
      }
    }
    .testimonio-texto{
      order: 2 !important;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
  }
}

@media(max-width: 768px){
  .bloque-testimonios .bloque-title {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .swiper-button-next, .swiper-button-prev {
    display: none;
  }
}
.slide-element {
  max-width: 1024px;
  padding: 0px 60px;
  margin: 0px auto;
  text-align: center;
  @media(max-width: 768px){
    & {
      padding: 0 15px;
    }
  }
  .testimonio-header {
    padding-bottom: 5px;
    @media(max-width: 768px){
      & {
        padding-bottom: 0;
      }
    }
    
    .fa-stack {
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .stars {
      margin: 40px 0;
      font-size: 1.25rem;
      letter-spacing: 8px;
      i {
        color: orange;
      }
    }
    .testimonio-title {
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      @media(max-width: 768px){
        & {
          margin-bottom: 0;
        }
      }
    }
  }
  .testimonio-content {
    font-size: 1.1em;
    line-height: 1.5;
  }
  
}
</style>
