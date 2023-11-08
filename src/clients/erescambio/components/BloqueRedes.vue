<template>
  <section class="wrapper-bloque wrapper-bloque-redes" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .rrss {
        text-align: center;
      }

      .bloque-{{data.bloque.ID}} .rrss i {
        font-size: {{ content.estilos.icono_size }}px;
        color: {{ content.estilos.color_de_icono }};
        margin: 0px 20px;
      }
    </v-style>
    <div class="bloque-redes" :class="`bloque-${data.bloque.ID}`">
      <div class="container text-center">
        <h2
          class="bloque-title"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col rrss">
            <template
              v-for="(rs, i) in content.redes"
            >
              <a  
                :key="`rs_${i}`"
                :href="rs"
                v-if="rs != ''"
                target="_blank"
              >
                <i class="fab" :class="`fa-${i}`"></i>
              </a>
            </template>
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
    data() {
      return {
        rrss: ['facebook','flickr','google+','instagram','linkedin','pinterest','twitter','youtube','telegram','whatsapp','tiktok'] 
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
