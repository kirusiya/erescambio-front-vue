<template>
  <section class="wrapper-bloque wrapper-bloque-codigo" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .icono {
        display: inline-block;
        text-align: center;
        text-decoration: none !important;
        font-size: 20px;
        margin: 20px;
      }

      .bloque-{{data.bloque.ID}} .icono i {
        color: {{ content.estilos.color_de_icono }};
      }
    </v-style>
    <div class="bloque-codigo" :class="`bloque-${data.bloque.ID}`">
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
          <div class="col" v-html="content.texto">
            
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

<style lang="scss" scoped>

</style>
