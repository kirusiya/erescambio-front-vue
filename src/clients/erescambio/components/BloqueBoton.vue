<template>
  <section class="wrapper-bloque wrapper-bloque-boton" :id="id">
    <v-style :all="{data, content}">
    
    .bloque-{{data.bloque.ID}} .boton-generico {
      border-color: {{content.estilos.color_de_titulo}};
      background-color: {{content.estilos.color_de_titulo}};
      color: {{content.estilos.color_de_texto}};
    }
    
    </v-style>
    <div class="bloque-boton" :class="`bloque-${data.bloque.ID}`">
      <div class="container-fluid text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col">
            <a :href="content.enlace_del_boton" 
               :target="content.abrir_en_nueva_ventana ? '_blank' : '_self'" 
               class="boton-generico"
               :aria-label="`Enlace a ${content.texto_boton}`"> 
              {{ content.texto_boton }}
            </a>
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
  .bloque-title{
    margin-bottom: 38px;
  }
</style>
