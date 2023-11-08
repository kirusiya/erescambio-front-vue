<template>
  <section 
  class="wrapper-bloque wrapper-bloque-video" :id="id"
  v-if="content.video"
  >
    <v-style :all="{data, content}" v-if="content.tamano && content.tamano.desktop && content.multiples_videos == false">
      .bloque-{{data.bloque.ID}} .video-wrap {
        width: {{content.tamano.desktop}}%;        
      }
      @media (max-width: 991px) {
        .bloque-{{data.bloque.ID}} .video-wrap {
          width: {{content.tamano.mobile}}%;        
        } 
      }
      @media (max-width: 767px) {
        .bloque-{{data.bloque.ID}} .video-wrap {
          width: {{content.tamano.mobile}}%;        
        }  
      }
    </v-style>
    <v-style :all="{data, content}" v-else>
    
    </v-style>
    <div class="bloque-video" :class="`bloque-${data.bloque.ID}`">
      <div class="container-fluid text-center">
        <h2
          class="bloque-title"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        />
        <div class="row">
          <div 
          class="col text-center" 
          v-html="content.descripcion" 
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1300"
          />
        </div>
        <div class="row" v-if="(content.multiples_videos != true && content.video)">
          <div class="col px-0">
            <div class="video-wrap">
              <div class="video-container" ref="video" v-html="content.video" />
            </div>    
          </div>
        </div>
        <div class="row videos" v-else> 
          <div class="col" :style="`min-width: ${content.ancho_videos}%; max-width: ${content.ancho_videos}%;`" v-for="(item, index) in content.videos" :key="index"> 
            <div class="video-container" v-html="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques]    
  }  
</script>

<style>
.video-wrap{
  margin: 0px auto;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  max-width: 80%;
  margin: 0px auto;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 991px) {
    .bloque-video .videos .col{
      min-width: 50% !important;
      max-width: 50% !important; 
    }
    .video-container {
        max-width: 100%;
    }
}

@media (max-width: 767px) {
    .bloque-video .videos .col{
      min-width: 100% !important;
      max-width: 100% !important; 
    }
}
</style>
