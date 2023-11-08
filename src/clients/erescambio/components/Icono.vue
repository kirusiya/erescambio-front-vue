<template>
  <div
    class="icono"    
  >
    <div>
      <div 
      :class="`fa-stack ${tipo}`"
      v-if="content.imagen"
      >
        <img
          loading="lazy"
          :src="content.imagen.sizes.shop_catalog"
          alt="" 
          v-if="tipo != 'libre'"
        />
        <img
          loading="lazy"
          :src="content.imagen.sizes.woocommerce_single"
          alt=""
          v-else
        />
      </div>
      
      <h3 
      class="icono-title service-heading"
      v-html="content.titulo" 
      />
      
      <hr class="separator" v-if="content.detalle" />
      
      <p 
      class="icono-texto"
      v-html="content.detalle" 
      />
      
    </div>

    <div>
      <a
        v-if="content.enlace && content.texto_boton"
        class="boton"
        :href="content.enlace"
        :title="`Enlace a ${content.titulo}`"
        :alt="`Enlace a ${content.titulo}`"
        :aria-label="`Enlace a ${content.titulo}`"
        target="_blank"
        v-html="content.texto_boton" 
      />
      
      <div
        v-else-if="!content.enlace && content.texto_boton &&  content.texto_alternativo"
        class="boton"
        @click="modal = !modal" 
        :title="`Enlace a ${content.titulo}`"
        :alt="`Enlace a ${content.titulo}`"
        :aria-label="`Enlace a ${content.titulo}`"
        target="_blank"
        v-html="content.texto_boton"
      />
      
    </div>
    
    <popup v-if="!content.enlace && content.texto_boton &&  content.texto_alternativo" class="fancybox-slide--current" :pactive="modal" @popup-update="modal = arguments[0]"> 
      <v-style>
      .popup{
        width: 100%;
        height: 100%;
      }
      </v-style>
      
      <div class="container">
        
        <h3 v-html="content.titulo" />
        
        <div
        v-html="content.texto_alternativo" />
      
      </div>
      
    </popup>  
  </div>
</template>

<script>
  import Popup from './Popup'
  
  export default {
    components: {
      Popup
    },
    data() {
      return {
        modal: false,
      }
    },
    props: {
      content: Object,
      estilo: Object,
      tipo: String
    }
  }
</script>

<style lang="scss" scoped>
  .icono {
    text-align: center;
    flex-flow: column;
    display: flex;
    margin-bottom: 45px;
    @media (max-width: 992px) {
      & {
        margin-bottom: 45px;
      }
    }
    .fa-stack{
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;
      img{
        width:: 100%;
      }
    }
    .fa-stack.libre{
      display: flex;
      width: 100% !important;
      height: auto !important;
      img{
          width: 100% !important;
          height: auto !important;
      }
    }
    
    .icono-title {
      min-height: 60px;
      font-size: larger;
      line-height: initial;
      height: auto;
      margin: 15px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icono-texto {
      margin-top: 0px;
      padding: 0px 20px;
    }

    .separator {
      border: 1px solid;
      width: 60%;
      margin: 0px auto 30px;
    }

    .boton {
      text-transform: uppercase;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      white-space: nowrap;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: .5rem .75rem;
      font-size: 1rem;
      line-height: 1.25;
      border-radius: .25rem;
      transition: all .15s ease-in-out;
      cursor: pointer;
    }
  }
  
  .popup{
    width: 100%;
    height: 100%;
  }
  

</style>
