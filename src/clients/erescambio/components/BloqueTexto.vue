<template>
  <section 
  v-if="content.texto"
  class="wrapper-bloque wrapper-bloque-texto" :id="id">
    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} a {
      color: {{content.estilos.color_de_enlace}};
    }
    .bloque-{{data.bloque.ID}} h1,
    .bloque-{{data.bloque.ID}} h2,
    .bloque-{{data.bloque.ID}} h3,
    .bloque-{{data.bloque.ID}} h4,
    .bloque-{{data.bloque.ID}} h5,
    .bloque-{{data.bloque.ID}} h6 {
      color: {{content.estilos.color_de_titulo}};
    }
    .bloque-{{data.bloque.ID}} .text
    {
        padding: {{margenes}} 6% !important;
        font-size: {{content.estilos.fuentes.tamano_fuente_textos}}px !important;
        line-height: {{content.estilos.fuentes.alto_de_linea_textos}}px !important;
        color: {{content.estilos.color_de_texto}}; 
    }
    .bloque-{{data.bloque.ID}} .text p ,
    .bloque-{{data.bloque.ID}} .geodir_post_meta,
    .bloque-{{data.bloque.ID}} .geodir_post_meta p{
      font-size: {{content.estilos.fuentes.tamano_fuente_textos}}px !important;
      line-height: {{content.estilos.fuentes.alto_de_linea_textos}}px !important;
      line-height: 1.5 !important;
    }
    .bloque-{{data.bloque.ID}} .bg-image{
      background-size: {{content.estilos.imagen_completa_desktop}};
    }
    .bloque-{{data.bloque.ID}} .boton-generico{
      margin-bottom: 30px;
    }
    @media (max-width: 991px){
      .bloque-{{data.bloque.ID}} .bg-image{
          background-size: {{content.estilos.imagen_completa_movil}};
      }
    }
    </v-style>
    <div class="bg bloque-texto" :class="`bloque-${data.bloque.ID}`">
      
      <div class="container-fluid contenido">
        
        <div class="row">	
        
          <div v-if="content.imagenes.izquierda.desktop"
               :class="`${content.estilos.col_img} bg_${content.estilos.imagen_completa_desktop} text-right bg-image wow fadeIn p-0 izq`"  
               data-wow-duration="2s" 
               :style="{'background-image': 'url(' + content.imagenes.izquierda.desktop + ')'}">		
               
               <img loading="lazy" :src="content.imagenes.izquierda.desktop" alt="" :class="`img_entera bg_${content.estilos.imagen_completa_desktop}`"  />
               
          </div>
          
          <div  v-if="content.imagenes.izquierda.movil"
                class="image-full"><img loading="lazy" :src="content.imagenes.izquierda.movil" alt="" /></div>
          
          <div  v-if="content.imagenes.central.movil"
                class="image-full"><img loading="lazy" :src="content.imagenes.central.movil" alt="" /></div>        
          
          
            <div :class="`col-sm-12 col-md-12 ${content.estilos.col_text} text wow fadeIn text-${content.estilos.alineacion} ${content.estilos.alineacion}`" 
                 data-wow-duration="2s" 
                 :style=" `${content.estilos.padding} ${content.estilos.bg_central}`">	
                 <div>
                 
                 <h2 
                 data-aos="fade"
                 data-aos-once="true"
                 data-aos-duration="1000"
                 :class="`bloque-title text-${content.estilos.alineacion_titulo}`" v-if="data.titulo_bloque" v-html="data.titulo_bloque"></h2>
                 
                 <div 
                 data-aos="fade"
                 data-aos-once="true"
                 data-aos-duration="1000"
                 v-html="content.texto" />
                 
                 <a v-if="content.boton.texto_boton"
                    :href="`${content.boton.url_boton}`"
                    :target="`${content.boton.target}`"
                    class="boton-generico"
                    :style="`border-color: ${content.estilos.color_de_titulo} !important;background: ${content.estilos.color_de_titulo} !important; color: ${content.estilos.color_de_fondo} !important;`"
                    v-html="content.boton.texto_boton" 
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="2000"
                    />
     
                 </div>
            </div>
          
                
          <div v-if="content.imagenes.derecha.desktop"
               :class="`${content.estilos.col_img} bg_${content.estilos.imagen_completa_desktop} text-right bg-image wow fadeIn p-0 izq`"  
               data-wow-duration="2s" 
               :style="{'background-image': 'url(' + content.imagenes.derecha.desktop + ')'}">		
               
               <img loading="lazy" :src="content.imagenes.derecha.desktop" alt="" :class="`img_entera bg_${content.estilos.imagen_completa_desktop}`" /> 
               
          </div>
          
          <div  v-if="content.imagenes.derecha.movil"
                class="image-full"><img loading="lazy" :src="content.imagenes.derecha.movil" alt="" /></div>
        
        </div>
        
      </div>      
      
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    data() {
      return {
        margenes: "75px 6%",
      }
    },
    mounted() {
      if( this.content.estilos.eliminar_margenes && this.content.estilos.eliminar_margenes == true ){
        this.margenes = "0px"
      }
    }
  }
</script>

<style lang="scss">
.bloque-texto{
  padding-top: 0;
  padding-bottom: 0; 
}
.bg-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    
    &.bg_contain{
      background-image: none !important;
      display: flex;
      align-items: center;
      
      .bg_contain{
        display: block;
      }
    }
}
.bloque-texto .servicio p {
  font-size: 16px;
  line-height: 26px;
}
.bloque-texto .geodir_post_meta p {
  font-size: 16px;
  line-height: 22px;
}

.bloque-texto .text{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img_entera{
  display: none;
  width: 100%;
}
@media(max-width: 991px){
  .bg-image.bg_contain .bg_contain,
  .img_entera{
    display: none;
  }	  	
}

</style>
