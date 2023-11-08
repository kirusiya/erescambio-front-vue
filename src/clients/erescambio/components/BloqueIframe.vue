<template>
  <section class="wrapper-bloque wrapper-bloque-archivo" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .icono {
        display: inline-block;
        text-align: center;
        text-decoration: none !important;
        font-size: 20px;
        margin: 20px;
      }

      .bloque-{{data.bloque.ID}} .icono i {
        font-size: {{ content.iframe.alto }}px;
        color: {{ content.estilos.color_de_icono }};
      }
    </v-style>
    <div class="bloque-archivo" :class="`bloque-${data.bloque.ID}`">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h2
              class="bloque-title"
              v-if="data.titulo_bloque"
              v-html="data.titulo_bloque"
            />
            
          </div>
        </div>
        <div class="row">
          <div class="col" v-html="content.descripcion" />
        </div>
        <div class="row">
          <div class="col">
            
            <iframe
            v-for="(iframe, i) in content.iframe"
            :key="`${i}`"
            :class="`${iframe.id_resize}`"  
            :src="`${iframe.link}`" 
            :width="`${iframe.ancho}`" 
            :height="`${iframe.alto}`"  
            :style="`width: ${iframe.ancho}; height: ${iframe.alto};`"
            frameborder="0" marginwidth="0" marginheight="0" scrolling="no" />
            
            
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    mounted(){
      
      this.content.iframe.forEach((item) => {
        
        if( item.alto_personalizado == true ){ 
          
          setTimeout( () => {
            window.addEventListener('message', function(e) {
              var scroll_height = e.data; 
              document.querySelector('.iframe-resize').style.height = scroll_height + 'px';
            } , false);
          },100);
        }
        
      });
      
    }  
  }  
</script>

<style lang="scss" scoped>

</style>
