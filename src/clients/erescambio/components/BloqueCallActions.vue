<template>
  <section class="wrapper-bloque wrapper-bloque-call-actions" :id="id">
    <v-style :all="{data, content}" />
    <div class="bloque-call-actions" :class="`bloque-${data.bloque.ID}`">
      <div class="container text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        />
        <div class="row">
          <div 
          class="col text-center" 
          v-html="content.descripcion" 
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1300"
          />
        </div>
        <div class="row">
          <div class="col">
            <div 
            class="bloques-ctas"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500">
              
              <a v-for="(item, i) in content.calls_actions"
              :key="`calls-actions-${i}`"
              :href="`${item.href}`"
              :aria-label="`${item.tipo}`"
              target="_blank"
              >                
                <i class="global-icons"
                :class="`${item.icono} ${item.clase}`" ></i>                
              </a>               

            </div>
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
        calls: ['email','telefono','whatsapp','skype','video','telegram', 'agenda']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
