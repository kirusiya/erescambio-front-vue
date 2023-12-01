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
    .bloque-{{entrada.ID}} .reto-subtitulo {
      background: {{entrada.estilos.bloque_general.color_de_titulo}};      
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    .bloque-{{entrada.ID}} .reto-subtitulo .resumen-icon {
      background: {{entrada.estilos.bloque_general.color_de_fondo}}33;
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    .bloque-{{entrada.ID}} .reto-subtitulo .resumen-tiempo {
      background: {{entrada.estilos.bloque_general.color_de_fondo}};  
      color: {{entrada.estilos.bloque_general.color_de_titulo}};    
    }
    .bloque-{{entrada.ID}} .reto-target {
      background: {{entrada.estilos.bloque_general.color_de_enlace}};      
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    .bloque-{{entrada.ID}} .reto-target .resumen-icon {
      background: {{entrada.estilos.bloque_general.color_de_fondo}}44;
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }    
    .bloque-{{entrada.ID}} .reto-ayudas_acciones .reto-ayudas{
      background: {{entrada.estilos.bloque_general.color_de_titulo}};      
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    .bloque-{{entrada.ID}} .reto-ayudas_acciones .reto-acciones{
      background: {{entrada.estilos.bloque_general.color_de_enlace}};      
      color: {{entrada.estilos.bloque_general.color_de_fondo}};
    }
    </v-style>
    
    <div class="row">	
      <div class="container">	
        <div class="row flex-column">	
          
          <div class="col col-12">
          <h1
          class="bloque-title mt-5"
          v-if="entrada.post_title"
          v-html="entrada.post_title"
          />
          </div>
          
          <div class="col col-12 text-center date-and-author">
            {{entrada.post_date}} 
            <span class="divider px-2"> · </span> 
            {{entrada.propietario}} 
          </div>
          
        
          <div class="col col-12 mb-5 reto-imagen" v-if="entrada.post_image">
            <img loading="lazy" 
                 class="img-destacada"
                 :src="entrada.post_image" />
          </div>
          
          <div class="col col-12" v-if="entrada.entrada.subtitulo">
            <div class="reto-subtitulo">
              <div class="resumen-icon">
                <span class="icon" title="Resumen"><i class="fas fa-star"></i></span>
              </div>  
              <div class="resumen-subtitulo">
                <span class="contenido" v-html="entrada.entrada.subtitulo" /> 
              </div>  
              <div class="resumen-tiempo">
                 <span class="icon" title="Tiempo a invertir en el reto"><i class="fas fa-clock"></i></span>
                 <span class="contenido" v-html="entrada.entrada.tiempo_a_invertir_en_el_reto" /> 
              </div>  
            </div>  
          </div>
          
          <div class="col col-12" v-if="entrada.entrada.target">
            <div class="reto-target">
              <div class="resumen-icon">
                <span class="icon" title="A quién va dirigido"><i class="fas fa-bullhorn"></i></span>
              </div>  
              <div class="resumen-contenido">
                <span class="contenido" v-html="entrada.entrada.target" />  
              </div>    
            </div> 
          </div>
          
          
          <div class="col col-12 text-content reto-content"
          v-if="entrada.entrada.descripcion"
          v-html="entrada.entrada.descripcion" />
          
          <div class="container">
          <div class="row reto-ayudas_acciones mx-0" v-if="entrada.entrada.ayuda.length > 0 && entrada.entrada.acciones.length > 0"> 
              <div class="col col-12 col-md-6 reto-ayudas">
                <div class="subtitle">
                  <span class="icon" title="¿EN QUÉ TE AYUDA?"><i class="fas fa-question-circle"></i></span>
                  <span>¿EN QUÉ TE AYUDA?</span>
                </div>
                <div v-for="(ayuda,i) in entrada.entrada.ayuda" :key="`ayuda_${i}`" class="lista">
                  <span class="text-bold"><i class="fa fa-check"></i> {{ayuda.necesidad}}</span>
                  <span class="pl-4">{{ayuda.detalle}}</span>
                </div>
              </div>
              <div class="col col-12 col-md-6 reto-acciones">
                <div class="subtitle">
                  <span class="icon" title="¿QUÉ TIENES QUE HACER?"><i class="fas fa-exclamation-circle"></i></span>
                  <span>¿QUÉ TIENES QUE HACER?</span>    
                </div>
                <div v-for="(accion,i) in entrada.entrada.acciones" :key="`accion_${i}`" class="lista">
                  <span class="text-bold"><i class="fa fa-check"></i> {{accion.fecha}}</span>
                  <span class="pl-4">{{accion.accion}}</span>
                </div>           
              </div>
            
          </div>
          </div>
          
          <div class="col col-12 text-content reto-ejemplos" v-if="entrada.entrada.ejemplos"> 
            <h2>EJEMPLOS</h2>
            <div v-html="entrada.entrada.ejemplos" />
          </div>
        
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

    //kiwop
    mounted() {
      
      let images = document.querySelectorAll('.reto-imagen img');
      images.forEach((image) => {
        image.addEventListener('load', () => {
          let originalWidth = image.naturalWidth;
          let originalHeight = image.naturalHeight;

          image.setAttribute('width', originalWidth);
          image.setAttribute('height', originalHeight);
        });
      });
    },
    //kiwop
    
    created(){
      this.entrada = this.$content      
    }
  }
</script>

<style lang="scss" scope>
.individual{
  padding-top: 76px;
  
  h1.bloque-title{
    text-transform: none;
  }
  .date-and-author{
    margin-bottom: 45px;
    font-weight: bold;
  }
  .img-destacada{
    width: 100%;
  }
  .blog-subtitulo{
    width: 100%;
  }
  .reto-subtitulo{
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    padding: 5px;
    margin-bottom: 15px;
    min-height: 70px;
    background: #bbb;
    
    
    .resumen-icon{
      width: 10%;
      flex: 0 0 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
    }
    .resumen-subtitulo{
      width: 10%;
      flex: 0 0 60%;
      display: flex;
      text-align: left;
      padding: 0 15px;
      align-items: center;
      color: #ffffff;
    }
    .resumen-tiempo{
      width: 10%;
      flex: 0 0 30%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #ffffff;
    }
  }
  .reto-target{
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    padding: 5px;
    background: #ccc;
    margin-bottom: 15px;
    min-height: 70px;
    
    .resumen-icon{
      width: 10%;
      flex: 0 0 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
    }
    .resumen-contenido{
      width: 10%;
      flex: 0 0 60%;
      display: flex;
      text-align: left;
      padding: 0 15px;
      align-items: center;
      color: #ffffff;
    }
  }
  .reto-content{
    margin-top: 30px;
  }
  .reto-ayudas_acciones{
    text-align: left;
    margin-bottom: 50px;
    
    .subtitle{
      background: rgba(0,0,0,0.1);
      padding: 10px 15px;
      font-weight: bold;
      
      .icon{
        margin-right: 10px;
      }
    }
    .lista{
      padding: 10px 15px;
      
      .text-bold{
        font-weight: bold;
      }
      
      span{
        display: inline-block;
        width: 100%;
      }
    }
    
    .reto-ayudas{
      background: #ccc;
      padding: 0;
    }
    .reto-acciones{
      background: #bbb;
      padding: 0;
    }
  }
  
}

</style>
