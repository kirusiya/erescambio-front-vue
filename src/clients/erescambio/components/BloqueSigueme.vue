<template>
  <section class="wrapper-bloque wrapper-bloque-sigueme" :id="id">
    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} .boton-generico{
      border-color: {{content.estilos.color_de_titulo}};
      background: {{content.estilos.color_de_titulo}};
      color: {{content.estilos.color_de_fondo}};
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme.p-active{
      background: none !important;
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme .popup{
      width: auto;
      height: auto; 
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme .popup h2{
      color: {{content.estilos.color_de_titulo}};
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme .popup .close-icon {
      top: 90px;
      background: none;
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme .popup .animated-modal {
      box-shadow: 1px 0 10px 0 rgb(150 150 150 / 15%);
      background: #ffffff;
      min-width: 450px; 
      min-height: 300px;
    }
    .bloque-{{data.bloque.ID}} .wrapper-popup.form_sigueme .popup .animated-modal iframe{
      border: none;
      width: 100%;
      height: 300px;
    }
    </v-style>
    <div class="bloque-newsletter" :class="`bloque-${data.bloque.ID}`">
      <div class="container-fluid text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col">
            
            <a 
            @click="modal = !modal" class="boton-generico">
              {{content.sigueme.boton}}
            </a>
            
            <popup class="fancybox-slide--current form_sigueme" :pactive="modal" @popup-update="modal = arguments[0]">  
              <v-style>
              .wrapper-popup.p-active{
                padding: 0 !important;
              }
              .popup{
                width: 100%;
                height: 100%;
              }
              </v-style>
              
              <div class="animated-modal p-5 text-center fancybox-content" v-html="content.sigueme.content"></div>
              
            </popup>           
            
            
          </div>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
  import Popup from './Popup'
  import { bloques } from '../mixins/bloques'

  export default {
    mixins: [bloques],
    components: {
      Popup
    },
    data() {
      return {
        modal: false,
        modalPopup: false
      }
    },
    methods: {
      mostrarPopup(){
          
          this.modal = !this.modal 
          
      },      
      // handleMessage(event) {
      //   // var messageFromSender = event.data;
        
      //   // if( messageFromSender.autor ) this.mostrarLeyes(messageFromSender.autor, messageFromSender.tipo, messageFromSender.lang); 
        
      // },
      // mostrarLeyes(autor, tipo, lang){
        
      //   async function getLeyes() { 
      //     var idioma = "";
          
      //     if(lang != "es_ES") idioma = `&l=` + lang; 
          
      //     let url = `https://www.erescambio.com/informacion-legal/?i=`+autor+`&t=` + tipo + idioma + `&u=`;
      //     const resp = await fetch(url)
  
      //     return await resp.text(); 
      //   }
        
        
      //   getLeyes().then((data)=>{
      //     document.getElementById(`contenido_leyes_sigueme`).innerHTML = data;
      //     document.querySelector('header').classList.add('fijada');
      //     // document.getElementById(`popup_legal`).classList.add("p-active");
      //     this.modalPopup = !this.modalPopup 
      //   });
        
        
        
      // },
      cerrarPopupLeyes(){
        this.modalPopup = false
        document.querySelector('header').classList.remove('fijada');
      }
    },
    created() {
      // if(window.addEventListener){
      //   window.addEventListener("message", this.handleMessage);
      // } else {
      //   window.attachEvent("onmessage", this.handleMessage);
      // }
    }
  }
</script>

<style lang="scss" scoped>
#contenido_leyes_sigueme {
    padding: 15px 15px;
    margin-top: 70px;
    word-break: break-word;
}
</style>
