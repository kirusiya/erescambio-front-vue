<template>
  <section 
    v-if="content.noticias.length > 0"
    class="wrapper-bloque wrapper-bloque-blog" :id="id">
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
        color: {{ content.estilos.color_de_enlace }};
      }

      .wrapper-swipper-blog+.pagination-buttons {
          display: none;
      }

      .pagination-buttons {
          margin-top: 50px;
      }

      .pagination-buttons button {
          padding: 10px 20px;
          margin: 0 5px;
          background: #e7e7e7;
          border: 0;
          border-radius: 5px;
          color: #484848;
          cursor: pointer;
      }

      .pagination-buttons button:disabled {
        background: #c0c0c0;
        color: #808080;
        cursor: not-allowed;
      }

      .pagination-buttons button.active {
          cursor: not-allowed;
          background: #808080;
          color: #fff;
          cursor: not-allowed;
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
        <div class="wrapper-swipper-blog" v-if="content.mostrar_en_mosaico != true">
          <swiper 
            class="swiper"
            :ref="`swiper_${data.bloque.ID}`"
            :options="{
              ...swiperOptions
            }" 
          >
            <template v-for="(blog, i) in content.noticias">
              <swiper-slide
                :key="`menu-item-${i}`"
              >
                <a :href="getUrl(blog)" :aria-label="`${blog.post_title}`">
                <div class="slide-element">
                  <div class="blog-header">
                    
                      <div class="blog-img"
                        :style="{backgroundImage: `url(${blog.imagen})`}"
                      />
                    
                    
                  </div>
                  <div class="blog-content">
                      <h3 class="blog-title">{{ blog.post_title }}</h3>
                    <div class="blog-desc" v-html="blog.post_excerpt" />
                  </div>
                </div>
                </a>
              </swiper-slide>
            </template>
            
            <div class="swiper-pagination" slot="pagination">

            </div>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        
        <div class="container" v-else>
          
          <div class="row wrapper-swipper-blog mosaico">

            <input type="hidden" id="no_paginas" name="no_paginas" 
            :value="content.numero_de_articulos_a_mostrar || 9">
            
            <div class="col" v-for="(blog, i) in paginatedNoticias" :key="i"> 
              
              <a :href="getUrl(blog)" :aria-label="`${blog.post_title}`">
              <div class="slide-element">
                
                <div class="blog-header">                  
                    <div class="blog-img"
                      :style="{backgroundImage: `url(${blog.imagen})`}"
                    />                                   
                </div>
                
                <div class="blog-content">
                  <h3 class="blog-title">{{ blog.post_title }}</h3>
                  <div class="blog-desc" v-html="blog.post_excerpt" /> 
                </div>
                
              </div>
              </a> 
              
            </div>
            
          </div>
          
        </div>

        <!-- Paginador con botones Anterior y Siguiente -->
        <div class="pagination-buttons">
          <button @click="loadPrevious" :disabled="currentPage === 1">Anterior</button>
          <template v-for="page in visiblePages">
            <button @click="setCurrentPage(page)" :class="{ active: page === currentPage }" :key="page">{{ page }}</button>
          </template>
          <button @click="loadNext" :disabled="currentPage * noticiasPerPage >= content.noticias.length">Siguiente</button>
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
          centeredSlides: false,
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
        },

        noticiasPerPage: 10,
        currentPage: 1,
        visiblePages: [],

      }
    },


    computed: {
      paginatedNoticias() {
        const startIndex = (this.currentPage - 1) * this.noticiasPerPage;
        const endIndex = startIndex + this.noticiasPerPage;
        return this.content.noticias.slice(startIndex, endIndex);
      },
      showLoadMoreButton() {
        return this.currentPage * this.noticiasPerPage < this.content.noticias.length;
      },
    },
  



    methods: {
      getUrl(item) {
        return window.location.origin + "/" + item.post_name;
      },
      loadPrevious() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.calculateVisiblePages();
          this.scrollToTop();
        }
      },
      loadNext() {
        if (this.currentPage * this.noticiasPerPage < this.content.noticias.length) {
          this.currentPage++;
          this.calculateVisiblePages();
          this.scrollToTop();
        }
      },
      scrollToTop() {
        
        const wrapperElement = document.querySelector('.wrapper-bloque-blog');

        if (wrapperElement) {
          setTimeout(() => {
            wrapperElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }, 100);
        }



      },
      calculateVisiblePages() {
        const totalPages = Math.ceil(this.content.noticias.length / this.noticiasPerPage);
        const maxVisiblePages = 5; // Ajusta según sea necesario

        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Ajusta las páginas visibles si es necesario
        while (endPage - startPage + 1 < maxVisiblePages && startPage > 1) {
          startPage--;
        }
        while (endPage - startPage + 1 < maxVisiblePages && endPage < totalPages) {
          endPage++;
        }

        this.visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
      },
      setCurrentPage(page) {
        this.currentPage = page;
        this.scrollToTop();
      },

    },
    mounted(){
      this.noticiasPerPage = parseInt(document.getElementById('no_paginas').value);
      this.calculateVisiblePages();

      // if(this.content.noticias.length < 3){
      //   if(document.querySelector(".bloque-" + this.data.bloque.ID) != null)
      //     document.querySelector(".bloque-" + this.data.bloque.ID).classList.add("no_slider"); 
      // }
    }
  }
</script>



<style lang="scss" scoped>

.wrapper-swipper-blog {
  
  .swiper-container {
    padding: 0px 90px 30px;
    position: relative;
    @media (max-width: 768px) {
      & {
        margin-left: -30px;
        margin-right: -30px;
      }
    }
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
        &:before,
        &:after{
          width: 30px;
        }
      }
    }
  }
  
  
  
  .swiper-slide{
    display: flex;
    height: auto;
  }
  
  .slide-element {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    margin: 10px 20px 20px; 
    background: #fff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 0;
    min-height: 500px;
    &:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    }
    .blog-img {
      height: 0;
      padding-top: 100%;
      position: relative;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .blog-content {
      text-align: left;
      padding: 0px 30px 20px;
    }
    .blog-title {
      padding: 25px 0px 25px;
      text-transform: uppercase;
      font-weight: 400;
      margin: 0px;
      line-height: 26px;
      font-family: inherit !important;
      font-size: 1em;
    }
    .blog-desc {
      text-align: justify;
      margin: 0;
      color: #333;
      line-height: 22px;

    }
  } 
    
}

.wrapper-swipper-blog.mosaico {
  
  .col{
    min-width: 33% !important;
    max-width: 33% !important; 
  }
  .col .slide-element{
    margin: 15px 0;
  }
  @media (max-width: 991px) {
      .col{
        min-width: 50% !important;
        max-width: 50% !important; 
      }
  }
  
  @media (max-width: 767px) {
      .col{
        min-width: 100% !important;
        max-width: 100% !important; 
      }
  }

}
</style>
