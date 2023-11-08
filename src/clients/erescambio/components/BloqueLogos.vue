<template>
  <section class="wrapper-bloque wrapper-bloque-iconos" :id="id">

    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} {
      color: {{content.estilos.color_de_texto}};
    }
    .bloque-{{data.bloque.ID}} a{
      color: {{content.estilos.color_de_enlace}};
    }
    .bloque-{{data.bloque.ID}} .fa-stack{
      border-radius: {{content.redondeo_icono}}%;
    }
    .bloque-{{data.bloque.ID}} .icono img{
      height: auto; 
    }
    </v-style>

    <div
      class="bloque-iconos"
      :class="`bloque-${data.bloque.ID}`"
    >
      <div class="container text-center">
    
        <h2
          class="bloque-title"
          v-if="data.titulo_bloque" 
          v-html="data.titulo_bloque"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        />
        
        <div 
        v-if="content.descripcion" 
        v-html="content.descripcion" 
        class="descripcion" 
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
        />
        
        <div class="row justify-content-around">
          <template
            v-for="(mi_icono, i) in content.iconos"
          >
            <logo
              :key="`icono_${i}`"
              :content="mi_icono"
              :tipo="content.relacion_aspecto"
              :class="content.iconos_por_fila|columns"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from './Logo.vue';
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  .bloque-title {
    margin: 10px 0px 90px 0px;
  }
  .descripcion{
    margin-bottom: 60px; 
  }  
</style>
