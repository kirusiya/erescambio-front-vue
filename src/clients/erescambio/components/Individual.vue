<template>
  
  <Entrada v-if="entrada.post_type == 'post'" :slug="slug" />  
  <Frase v-else-if="entrada.post_type == 'frase'" :slug="slug" />  
  <Reto v-else-if="entrada.post_type == 'reto'" :slug="slug" />  
  <Politica v-else-if="entrada.post_type == 'nota-legal'" :slug="slug" tipo="a" />
  <Politica v-else-if="entrada.post_type == 'politica-de-privacidad'" :slug="slug" tipo="p" />
  <Politica v-else-if="entrada.post_type == 'politica-de-cookies'" :slug="slug" tipo="c" />
  <Politica v-else-if="entrada.post_type == 'declaracion-de-accesibilidad'" :slug="slug" tipo="d" />  
  
</template>

<script>
  import { bloques } from '../mixins/bloques'
  import Entrada from '../components/Entrada'
  import Frase from '../components/Frase'
  import Reto from '../components/Reto'
  import Politica from '../views/Politica'


  export default {
    mixins: [bloques],
    props: {
      slug: String
    },
    components: {
      Entrada,
      Frase,
      Reto,
      Politica
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
