<template>
  <div
    class="icono"    
  >
    <div>
    
      <div 
      :class="`fa-stack ${tipo}`"
      v-if="content.imagen"
      >
        <a
          :href="content.enlace"
          target="_blank"
          v-if="content.enlace"
          >
          <img
            loading="lazy"
            :src="(tipo == 'libre') ? content.imagen.sizes.logo_img : content.imagen.sizes.thumbnail"
            :alt="content.titulo"
          />
        </a> 
        
        <img
          v-else
          loading="lazy"
          :src="(tipo == 'libre') ? content.imagen.sizes.logo_img : content.imagen.sizes.thumbnail"
          :alt="content.titulo"
        />
         
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
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
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 45px;
    @media (max-width: 992px) {
      & {
        margin-bottom: 45px;
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
      font-size: 16px;
      height: auto;
      margin: 15px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icono-texto {
      margin-top: 0px;
      padding: 0px 20px;
      font-size: 14px;
    }

    .separator {
      border: 1px solid;
      width: 60%;
      margin: 0px auto 30px;
    }

    a {
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
