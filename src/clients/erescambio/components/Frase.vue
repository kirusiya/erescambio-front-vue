<template>
  
  <div :class="`container-fluid text-center individual bloque-${entrada.ID}`" v-if="entrada">
  
    <v-style>
    .bloque-{{entrada.ID}}{
      color: {{entrada.estilos.bloque_general.color_de_texto}};
      background: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    .bloque-{{entrada.ID}} a {
      color: {{entrada.estilos.bloque_general.color_de_enlace}};
    }
    .bloque-{{entrada.ID}} h1,
    .bloque-{{entrada.ID}} h2,
    .bloque-{{entrada.ID}} h3,
    .bloque-{{entrada.ID}} h4,
    .bloque-{{entrada.ID}} h5,
    .bloque-{{entrada.ID}} h6 {
      color: {{entrada.estilos.bloque_general.color_de_titulo}};
    }    
    .bloque-{{entrada.ID}} .date-and-author {
      color: {{entrada.estilos.bloque_general.color_de_enlace}}; 
      font-family: {{entrada.estilos.bloque_fonts.fuente_cabecera}};
    }
    </v-style>
    
    <div class="row">	
      <div class="container">	
        <div class="row flex-column">	
          
          <div class="col col-12 text-center date-and-author">
          {{entrada.post_date}} 
          <span class="divider px-2"> · </span> 
          {{entrada.propietario}} 
          </div>
          
          <div class="col col-12">
          <h1
          class="bloque-title mt-5"
          v-if="entrada.post_content"
          v-html="entrada.post_content"
          />
          </div>
        
          <div class="col col-12 text-autor"
          v-html="entrada.entrada.autor_de_la_frase" />
          
          
        
        
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    props: {
      slug: String
    },
    data() {
      return {
        entrada: null
      }
    },
    created(){
      this.entrada = this.$content      
    }
  }
</script>

<style lang="scss" scope>
.individual{
  padding-top: 76px;
  min-height: calc(100vh - 253px);
  
  h1.bloque-title{
    text-transform: none;
  }
  .date-and-author{
    margin-bottom: 0px;
    font-weight: bold;
  }
  .img-destacada{
    width: 100%;
  }
  .text-autor{
    text-align: center;
    padding-bottom: 75px;
    font-weight: bold;
  }
  .text-content{ 
    text-align: left !important;
    padding-bottom: 75px;
    
    h2{
      font-size: 30px;
      margin-bottom: 24px;
      display: inline-block;
      width: 100%;
    }
    p{
      margin-top: 0;
      margin-bottom: 24px;
    }
    
    .geodir-embed-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    .geodir-embed-container > iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
  }  
}

</style>
