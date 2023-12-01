<template>
  <section class="wrapper-bloque wrapper-bloque-eventos" :id="id">
    <v-style :all="{data, content}">
    .bloque-{{data.bloque.ID}} a{
      color: {{content.estilos.color_de_enlace}}; 
    }
    .bloque-{{data.bloque.ID}} .col-md-12.wow,
    .bloque-{{data.bloque.ID}} .col-md-12.wow,
    .bloque-{{data.bloque.ID}} .col-md-12.wow,
    .bloque-{{data.bloque.ID}} .col-md-12.wow,
    .bloque-{{data.bloque.ID}} .col-md-12.wow,
    .bloque-{{data.bloque.ID}} .col-md-12.wow{
      color: {{content.estilos.color_de_texto}} !important; 
    }
        
    .bloque-{{data.bloque.ID}} .col-md-12.wow h1,
    .bloque-{{data.bloque.ID}} .col-md-12.wow h2,
    .bloque-{{data.bloque.ID}} .col-md-12.wow h3,
    .bloque-{{data.bloque.ID}} .col-md-12.wow h4,
    .bloque-{{data.bloque.ID}} .col-md-12.wow h5,
    .bloque-{{data.bloque.ID}} .col-md-12.wow h6{
      color: {{content.estilos.color_de_titulo}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .col-md-12.wow a{
      color: {{content.estilos.color_de_enlace}} !important;
    }
        
    .bloque-{{data.bloque.ID}} .ajde_evcal_calendar.ul .evcal_month_line p {
      color: {{content.estilos.color_de_titulo}} !important;
    }
    .bloque-{{data.bloque.ID}} #evcal_list .eventon_list_event .evcal_desc span.evcal_event_title{
      color: {{content.estilos.color_de_enlace}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .mes_cabecera{
      color: {{content.estilos.color_de_titulo}} !important;
      margin: 30px 0 5px 0px;
      font-weight: 600;
    }
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .btn_map a.elementor-button{
      background: {{content.estilos.color_de_enlace_evento}} !important;
      color: {{content.estilos.color_de_fondo_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .evento_mini,
    .bloque-{{data.bloque.ID}} .elementor-41295 .collapse-evento{
      background: {{content.estilos.color_de_fondo_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .evento_mini .fecha_mini{
      padding: 15px 0;
    }
    
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h1,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h2,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h3,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h4,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h5,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content h6,
    .bloque-{{data.bloque.ID}} .elementor-41295 .collapse-evento .elementor-widget-heading .elementor-heading-title,
    .bloque-{{data.bloque.ID}} .elementor-41295 .elementor-widget-heading h3.elementor-heading-title a,
    .bloque-{{data.bloque.ID}} .elementor-41295 .elementor-element.elementor-widget-heading:before{
      color: {{content.estilos.color_de_cabeceras}} !important;       
    }
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .elementor-widget-heading h3.elementor-heading-title{
      pointer-events: none;
      color: {{content.estilos.color_de_cabeceras}} !important; 
    }
    
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .ficha_post.mini .bloq_autor a strong,
    .bloque-{{data.bloque.ID}} .elementor-41295 .reservar-fechas-shortcode .geodir-schedules .geodir-schedule .fecha {
      color: {{content.estilos.color_de_enlace_evento}} !important;
    }
    
    
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .geodir-schedule a,
    .bloque-{{data.bloque.ID}} #evento_exporter input[type=submit]{
      border-color: {{content.estilos.color_de_enlace_evento}} !important;
      cursor: pointer;
      background: {{content.estilos.color_de_enlace_evento}} !important;
      color: {{content.estilos.color_de_fondo_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} #evento_exporter_google.btn.btn-primary{
      color: {{content.estilos.color_de_enlace_evento}} !important;
      border-color: {{content.estilos.color_de_enlace_evento}} !important;
      background: {{content.estilos.color_de_fondo_evento}} !important;
      font-size: 13px;
      padding: 6px 12px;
      font-weight: 600;  
      border-width: 2px;
      text-transform: none;  
    }
    
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .geodir-schedule a:hover,
    .bloque-{{data.bloque.ID}} #evento_exporter input[type=submit]:hover,
    .bloque-{{data.bloque.ID}} #evento_exporter_google.btn.btn-primary:hover{
      color: #ffffff !important;
      border-color: {{content.estilos.color_de_enlace_evento}} !important;
      background: {{content.estilos.color_de_enlace_evento}} !important;
    }
    
    
    .bloque-{{data.bloque.ID}} .elementor-41295 .elementor-widget-heading .elementor-heading-title,
    .bloque-{{data.bloque.ID}} .elementor-41295 .evento_mini .fecha_mini,
    .bloque-{{data.bloque.ID}} .geodir-field-lugar,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content,
    .bloque-{{data.bloque.ID}} .geodir-field-post_content p, 
    .bloque-{{data.bloque.ID}} .geodir-field-address,
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .geodir-schedule .horas,
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .no_fechas {
      color: {{content.estilos.color_de_texto_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .geodir-field-post_content a,
    .bloque-{{data.bloque.ID}} #evento_sharer a{
      color: {{content.estilos.color_de_enlace_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} #evento_sharer > a:hover{
      background-color: {{content.estilos.color_de_enlace_evento}};
      color: {{content.estilos.color_de_fondo_evento}} !important;
    }
    
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .geodir-schedule a.fecha_link,
    .bloque-{{data.bloque.ID}} .reservar-fechas-shortcode .geodir-schedules .geodir-schedule a.fecha_link:hover{
      border: none !important;
      background: none !important;
    }
    
    
    .bloque-{{data.bloque.ID}} .detalles-evento-lista{
        padding: 0;
    }
    
    .bloque-{{data.bloque.ID}} .detalles-evento-lista > li {
        border-bottom: 1px solid {{content.estilos.color_de_fondo_evento}};
        background: {{content.estilos.color_de_enlace_evento}};
        color: {{content.estilos.color_de_fondo_evento}};
        padding: 10px;
    }
    </v-style>
    
    <div class="bloque-eventos" :class="`bloque-${data.bloque.ID}`">
      <div class="container text-center">
        <h2
          class="bloque-title"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
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
            
            <!--<div v-html="content.eventos" />-->
            <div :id="`html-evento-${data.bloque.ID}`"></div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import {config} from '../config/config'
  import { bloques } from '../mixins/bloques'
  
  var toggleOcultar = function() {
      this.nextElementSibling.classList.toggle("oculto"); 
  };
  
  export default {
    mixins: [bloques],
    methods: {
      
    },
    mounted() {
        var language = this.$parent.content.lang;
        
        axios.get(`${config.apis.default}/ztudio_webs_eventos/?id=${this.data.bloque.ID}&lang=${language}&skip_cache=1`)
        .then(
                response => {
                              document.getElementById("html-evento-" + this.data.bloque.ID).innerHTML = response.data
                              
                              let elements = document.getElementsByClassName("collapse-trigger");
                              
                              for (var i = 0; i < elements.length; i++) {
                                elements[i].addEventListener('click', toggleOcultar, false);
                              }    
                              
                            }
              )

		// Crea un intervalo para verificar y aplicar atributos de ancho y alto
		setInterval(() => {
			let container = document.getElementById("html-evento-" + this.data.bloque.ID);
			//console.log(container);
			if (container.innerHTML.trim() !== '') {
				console.log('ya no esta vacio');
				let images = document.querySelectorAll('.elementor-image img');
				
				images.forEach((image) => {
					image.addEventListener('load', () => {
					console.log(image);	
					let originalWidth = image.naturalWidth;
					let originalHeight = image.naturalHeight;

					image.setAttribute('width', originalWidth);
					image.setAttribute('height', originalHeight);
					});
				});
				
				// Si se encontraron imágenes y se les aplicaron atributos, detén el intervalo
				if (images.length > 0) {
					//clearInterval(intervalId);
				}
			}
		}, 1000);	  
      
    }
  }
  
  
</script>

<style lang="scss"> 
.elementor-row {
	width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

.elementor img {
	height: auto;
	max-width: 100%;
	border: none;
	-webkit-border-radius: 0;
	border-radius: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
}

.elementor-41295 {
	margin-top: 8px;
}

.elementor-41295 .elementor-element.elementor-element-605ee8ba {
	margin-top: 0px;
	margin-bottom: 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-bc-flex-widget .elementor-41295 .elementor-element.elementor-element-4b8704a5.elementor-column .elementor-column-wrap {
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-4b8704a5.elementor-column.elementor-element[data-element_type="column"]>.elementor-column-wrap.elementor-element-populated>.elementor-widget-wrap {
	align-content: center;
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-4b8704a5>.elementor-column-wrap>.elementor-widget-wrap>.elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-4b8704a5>.elementor-element-populated {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-521891c7 .elementor-text-editor {
	column-gap: 0px;
	text-align: left;
}

.elementor-41295 .elementor-element.elementor-element-521891c7 {
	color: #777777;
	text-transform: uppercase;
}

.elementor-41295 .elementor-element.elementor-element-521891c7>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-69444c26 {
	overflow: hidden;
	border-style: solid;
	border-width: 0px 0px 0px 0px;
	border-color: #e2e2e2;
	margin-top: 0px;
	margin-bottom: 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-69444c26:not(.elementor-motion-effects-element-type-background),
.elementor-41295 .elementor-element.elementor-element-69444c26>.elementor-motion-effects-container>.elementor-motion-effects-layer {
	background-color: #ffffff;
}

.elementor-41295 .elementor-element.elementor-element-69444c26:hover {
	background-color: #ffffff;
}

.elementor-41295 .elementor-element.elementor-element-69444c26,
.elementor-41295 .elementor-element.elementor-element-69444c26>.elementor-background-overlay {
	border-radius: 4px 4px 4px 4px;
}

.elementor-bc-flex-widget .elementor-41295 .elementor-element.elementor-element-3c841901.elementor-column .elementor-column-wrap {
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-3c841901.elementor-column.elementor-element[data-element_type="column"]>.elementor-column-wrap.elementor-element-populated>.elementor-widget-wrap {
	align-content: center;
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-3c841901>.elementor-column-wrap>.elementor-widget-wrap>.elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-3c841901>.elementor-element-populated {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-36584240>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-bc-flex-widget .elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column .elementor-column-wrap {
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column.elementor-element[data-element_type="column"]>.elementor-column-wrap.elementor-element-populated>.elementor-widget-wrap {
	align-content: center;
	align-items: center;
	height: 100%;
}

.elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column>.elementor-column-wrap>.elementor-widget-wrap {
	justify-content: center;
}

.elementor-41295 .elementor-element.elementor-element-4079a5a9>.elementor-element-populated {
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-6bae5cfe .elementor-text-editor {
	text-align: center;
}

.elementor-41295 .elementor-element.elementor-element-6bae5cfe {
	color: #777777;
}

.elementor-bc-flex-widget .elementor-41295 .elementor-element.elementor-element-7969c7a6.elementor-column .elementor-column-wrap {
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-7969c7a6.elementor-column.elementor-element[data-element_type="column"]>.elementor-column-wrap.elementor-element-populated>.elementor-widget-wrap {
	align-content: center;
	align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-7969c7a6>.elementor-column-wrap>.elementor-widget-wrap>.elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-7969c7a6>.elementor-element-populated {
	margin: 0px 0px 0px 0px;
	padding: 10px 0px 10px 0px;
}

.elementor-41295 .elementor-element.elementor-element-2f87b35f .elementor-heading-title {
	font-size: 18px;
	line-height: 1em;
}

.elementor-41295 .elementor-element.elementor-element-2f87b35f>.elementor-widget-container {
	margin: 0px 0px 15px 0px;
	padding: 0px 15px 0px 15px;
}

.elementor-41295 .elementor-element.elementor-element-765c0cc .elementor-heading-title {
	color: #777777;
	font-size: 12px;
}

.elementor-41295 .elementor-element.elementor-element-765c0cc>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 15px 0px 15px;
}

.elementor-41295 .elementor-element.elementor-element-3a4be660:not(.elementor-motion-effects-element-type-background),
.elementor-41295 .elementor-element.elementor-element-3a4be660>.elementor-motion-effects-container>.elementor-motion-effects-layer {
	background-color: #ffffff;
}

.elementor-41295 .elementor-element.elementor-element-3a4be660,
.elementor-41295 .elementor-element.elementor-element-3a4be660>.elementor-background-overlay {
	border-radius: 0px 0px 4px 4px;
}

.elementor-41295 .elementor-element.elementor-element-3a4be660 {
	margin-top: 0px;
	margin-bottom: 15px;
	padding: 2px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-2b494142>.elementor-element-populated {
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-71662ad1 .elementor-image img {
	width: 100%;
	max-width: 100%;
}

.elementor-41295 .elementor-element.elementor-element-71662ad1>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-1c6e0a87 {
	margin-top: 10px;
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-2e98c78b>.elementor-column-wrap>.elementor-widget-wrap>.elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-2e98c78b>.elementor-element-populated {
	margin: 0px 0px 0px 0px;
	padding: 0px 30px 30px 30px;
}

.elementor-41295 .elementor-element.elementor-element-43838470 .elementor-heading-title {
	font-size: 16px;
	font-weight: 600;
	line-height: 1, 3em;
}

.elementor-41295 .elementor-element.elementor-element-43838470>.elementor-widget-container {
	padding: 0px 0px 5px 0px;
	border-style: solid;
	border-width: 0px 0px 1px 0px;
	border-color: #EEEEEE;
}

.elementor-41295 .elementor-element.elementor-element-1ed05e2f>.elementor-widget-container {
	margin: 30px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-d530e19 {
	margin-top: 45px;
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-20485bc.elementor-column>.elementor-column-wrap>.elementor-widget-wrap {
	justify-content: flex-end;
}

.elementor-41295 .elementor-element.elementor-element-242bd3d7>.elementor-column-wrap>.elementor-widget-wrap>.elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
	margin-bottom: 0px;
}

.elementor-41295 .elementor-element.elementor-element-242bd3d7>.elementor-element-populated {
	padding: 0px 20px 30px 20px;
}

.elementor-41295 .elementor-element.elementor-element-1f562cbb .elementor-heading-title {
	font-size: 18px;
	font-weight: 600;
	line-height: 1, 3em;
}

.elementor-41295 .elementor-element.elementor-element-1f562cbb>.elementor-widget-container {
	padding: 0px 0px 5px 0px;
	border-style: solid;
	border-width: 0px 0px 1px 0px;
	border-color: #EEEEEE;
}

.elementor-41295 .elementor-element.elementor-element-d0f8c45>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.elementor-41295 .elementor-element.elementor-element-3130ea4d>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 15px 5px;
}

.elementor-41295 .elementor-element.elementor-element-1cca5d14 {
	--divider-border-style: solid;
	--divider-color: #000;
	--divider-border-width: 0px;
}

.elementor-41295 .elementor-element.elementor-element-1cca5d14 .elementor-divider-separator {
	width: 100%;
}

.elementor-41295 .elementor-element.elementor-element-1cca5d14 .elementor-divider {
	padding-top: 15px;
	padding-bottom: 15px;
}

.elementor-41295 .elementor-element.elementor-element-7f84e4d9 .elementor-heading-title {
	font-size: 18px;
	font-weight: 600;
	line-height: 1, 3em;
}

.elementor-41295 .elementor-element.elementor-element-7f84e4d9>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 5px 0px;
	border-style: solid;
	border-width: 0px 0px 1px 0px;
	border-color: #EEEEEE;
}

.elementor-41295 .elementor-element.elementor-element-3de2ee3f>.elementor-widget-container {
	margin: 8px 0px 0px 0px;
	padding: 0px 0px 0px 15px;
}

.elementor-41295 .elementor-element.elementor-element-4b389377>.elementor-widget-container {
	margin: 8px 0px 0px 0px;
	padding: 0px 0px 0px 15px;
}

.elementor-41295 .elementor-element.elementor-element-20dcd5aa .elementor-button {
	fill: #ffffff;
	color: #ffffff;
	background-color: #015c77;
	border-radius: 4px 4px 4px 4px;
}

.elementor-41295 .elementor-element.elementor-element-20dcd5aa>.elementor-widget-container {
	padding: 10px 0px 10px 0px;
}

.elementor-41295 .elementor-element.elementor-element-3b61b26 {
	--divider-border-style: solid;
	--divider-color: #000;
	--divider-border-width: 0px;
}

.elementor-41295 .elementor-element.elementor-element-3b61b26 .elementor-divider-separator {
	width: 100%;
}

.elementor-41295 .elementor-element.elementor-element-3b61b26 .elementor-divider {
	padding-top: 15px;
	padding-bottom: 15px;
}

.elementor-41295 .elementor-element.elementor-element-876b3a3 .elementor-heading-title {
	font-size: 18px;
	font-weight: 600;
	line-height: 1, 3em;
}

.elementor-41295 .elementor-element.elementor-element-876b3a3>.elementor-widget-container {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 5px 0px;
	border-style: solid;
	border-width: 0px 0px 1px 0px;
	border-color: #EEEEEE;
}

.elementor-41295 .elementor-element.elementor-element-4cf57c3a>.elementor-widget-container {
	margin: 8px 8px 8px 8px;
}

.elementor-41295 .elementor-element.elementor-element-7969c7a6 {
  display: flex;
  align-items: center;
}

.elementor-41295 .elementor-element.elementor-element-71662ad1 .elementor-image img {
    max-width: 100%;
}

@media(max-width:1024px) {
	.elementor-41295 .elementor-element.elementor-element-242bd3d7>.elementor-element-populated {
		padding: 0px 0px 30px 0px;
	}
}

@media(min-width:768px) {
	.elementor-41295 .elementor-element.elementor-element-3c841901 {
		width: 10%;
		position: relative;
		overflow: hidden;
	}
	.elementor-41295 .elementor-element.elementor-element-4079a5a9 {
		width: 10%;
	}
	.elementor-41295 .elementor-element.elementor-element-7969c7a6 {
		width: 79.664%;
	}
	.elementor-41295 .elementor-element.elementor-element-2e98c78b {
		width: 65%;
	}
	.elementor-41295 .elementor-element.elementor-element-56098978 {
		width: 40%;
	}
	.elementor-41295 .elementor-element.elementor-element-20485bc {
		width: 60, 016%;
	}
	.elementor-41295 .elementor-element.elementor-element-242bd3d7 {
		width: 35%;
	}
}

@media(max-width:767px) {
	.elementor-41295 .elementor-element.elementor-element-3c841901 {
		width: 100%;
	}
	.elementor-41295 .elementor-element.elementor-element-3c841901>.elementor-element-populated {
		margin: 0px 0px 15px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-4079a5a9 {
		width: 30%;
	}
	.elementor-bc-flex-widget .elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column .elementor-column-wrap {
		align-items: center;
	}
	.elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column.elementor-element[data-element_type="column"]>.elementor-column-wrap.elementor-element-populated>.elementor-widget-wrap {
		align-content: center;
		align-items: center;
	}
	.elementor-41295 .elementor-element.elementor-element-4079a5a9.elementor-column>.elementor-column-wrap>.elementor-widget-wrap {
		justify-content: center;
	}
	.elementor-41295 .elementor-element.elementor-element-4079a5a9>.elementor-element-populated {
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-6bae5cfe .elementor-text-editor {
		text-align: center;
	}
	.elementor-41295 .elementor-element.elementor-element-6bae5cfe>.elementor-widget-container {
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-7969c7a6 {
		width: 70%;
	}
	.elementor-41295 .elementor-element.elementor-element-7969c7a6>.elementor-element-populated {
		margin: 0px 0px 0px 0px;
		padding: 15px 0px 10px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 {
		margin-top: 15px;
		margin-bottom: 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-2e98c78b>.elementor-element-populated {
		padding: 30px 15px 15px 15px;
	}
	.elementor-41295 .elementor-element.elementor-element-1ed05e2f>.elementor-widget-container {
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-56098978.elementor-column>.elementor-column-wrap>.elementor-widget-wrap {
		justify-content: center;
	}
	.elementor-41295 .elementor-element.elementor-element-20485bc.elementor-column>.elementor-column-wrap>.elementor-widget-wrap {
		justify-content: center;
	}
	.elementor-41295 .elementor-element.elementor-element-242bd3d7>.elementor-element-populated {
		padding: 15px 15px 15px 15px;
	}
	.elementor-41295 .elementor-element.elementor-element-1cca5d14>.elementor-widget-container {
		margin: 5px 0px 5px 0px;
	}
	.elementor-41295 .elementor-element.elementor-element-3b61b26>.elementor-widget-container {
		margin: 5px 0px 5px 0px;
	}
}


/* Start custom CSS for image, class: .elementor-element-36584240 */

.elementor-41295 .elementor-element.elementor-element-36584240 {
	height: 100%;
}

.elementor-41295 .elementor-element.elementor-element-36584240 img {
	min-height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: auto;
	max-width: none;
}


/* End custom CSS */


/* Start custom CSS for text-editor, class: .elementor-element-6bae5cfe */

.elementor-41295 .elementor-element.elementor-element-6bae5cfe {
	text-align: center;
}


/* End custom CSS */


/* Start custom CSS for section, class: .elementor-element-69444c26 */

.elementor-41295 .elementor-element.elementor-element-69444c26:hover {
	cursor: pointer;
}


/* End custom CSS */


/* Start custom CSS for image, class: .elementor-element-71662ad1 */

.elementor-41295 .elementor-element.elementor-element-71662ad1 a {
	width: 100%;
}


/* End custom CSS */


/* Start custom CSS for heading, class: .elementor-element-43838470 */

.elementor-41295 .elementor-element.elementor-element-43838470:before {
	content: "\f0e0";
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	float: left;
	font-size: 12px;
	color: #6b9aaa;
	margin-right: 5px;
	top: -2px;
	position: relative;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-1ed05e2f */

.elementor-41295 .elementor-element.elementor-element-1ed05e2f .geodir-field-post_content {
	font-size: 16px !important;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-58b469a3 */

.elementor-41295 .elementor-element.elementor-element-58b469a3 .fa {
	line-height: inherit;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-3ba96388 */

.elementor-41295 .elementor-element.elementor-element-3ba96388 {
	text-align: right;
}

.elementor-41295 .elementor-element.elementor-element-3ba96388 form {
	display: inline-block;
}

.elementor-41295 .elementor-element.elementor-element-3ba96388 input[type=submit],
.elementor-41295 .elementor-element.elementor-element-3ba96388 .btn {
	font-weight: 500;
	fill: #2d758d;
	color: #2d758d;
	background-color: #fff;
	border-style: solid;
	border-width: 2px;
	border-color: #2d758d;
	font-size: 13px;
	padding: 6px 12px;
	font-weight: 600;
	border-radius: 4px;
	line-height: 16px !important;
	height: auto !important;
	max-height: none;
}

.elementor-41295 .elementor-element.elementor-element-3ba96388 .btn:hover,
.elementor-41295 .elementor-element.elementor-element-3ba96388 input[type=submit]:hover {
	background-color: #2d758d;
	color: #fff;
}


/* End custom CSS */


/* Start custom CSS for heading, class: .elementor-element-1f562cbb */

.elementor-41295 .elementor-element.elementor-element-1f562cbb:before {
	content: "\f025";
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	float: left;
	font-size: 14px;
	color: #6b9aaa;
	margin-right: 5px;
	top: -2px;
	position: relative;
}


/* End custom CSS */


/* Start custom CSS for heading, class: .elementor-element-7f84e4d9 */

.elementor-41295 .elementor-element.elementor-element-7f84e4d9:before {
	content: "\f3c5";
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	float: left;
	font-size: 14px;
	color: #6b9aaa;
	margin-right: 5px;
	top: -2px;
	position: relative;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-3de2ee3f */

.elementor-41295 .elementor-element.elementor-element-3de2ee3f .geodir-schedule-start,
.elementor-41295 .elementor-element.elementor-element-3de2ee3f .geodir-schedule-sep,
.elementor-41295 .elementor-element.elementor-element-3de2ee3f .geodir-schedule-end,
.elementor-41295 .elementor-element.elementor-element-3de2ee3f .geodir_post_meta {
	font-size: 18px !important;
	color: #fdc652;
	font-weight: bold;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-4b389377 */

.elementor-41295 .elementor-element.elementor-element-4b389377 .geodir-schedule-start,
.elementor-41295 .elementor-element.elementor-element-4b389377 .geodir-schedule-sep,
.elementor-41295 .elementor-element.elementor-element-4b389377 .geodir-schedule-end,
.elementor-41295 .elementor-element.elementor-element-4b389377 .geodir_post_meta {
	font-size: 18px !important;
}


/* End custom CSS */


/* Start custom CSS for heading, class: .elementor-element-876b3a3 */

.elementor-41295 .elementor-element.elementor-element-876b3a3:before {
	content: "\f025";
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	float: left;
	font-size: 14px;
	color: #6b9aaa;
	margin-right: 5px;
	top: -2px;
	position: relative;
}


/* End custom CSS */


/* Start custom CSS for shortcode, class: .elementor-element-4cf57c3a */

.elementor-41295 .elementor-element.elementor-element-4cf57c3a .ficha_post.mini .bloq_autor a strong {
	color: #015c77;
}


/* End custom CSS */


/* Start custom CSS for section, class: .elementor-element-1c6e0a87 */

@media (max-width: 767px) {
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 #evento_sharer {
		text-align: center;
	}
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 #evento_exporter {
		text-align: center;
	}
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 #evento_exporter input[type=submit] {
		width: 100%;
	}
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 .reservar-fechas .geodir-schedules .geodir-schedule a,
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 .reservar-fecha .geodir-schedules .geodir-schedule {
		text-align: center;
		font-weight: 600;
	}
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 .reservar-fechas .geodir-schedules .geodir-schedule a:after,
	.elementor-41295 .elementor-element.elementor-element-1c6e0a87 .reservar-fecha .geodir-schedules .geodir-schedule:after {
		width: 100%;
		margin-bottom: 10px;
	}
}


/* End custom CSS */


/* Start custom CSS for section, class: .elementor-element-3a4be660 */

.elementor-41295 .elementor-element.elementor-element-3a4be660.oculto {
	margin-bottom: 0 !important;
}


/* End custom CSS */

.collapse-trigger {
	margin-bottom: 15px;
}

.collapse-evento:not(.oculto) {
	margin-bottom: 15px;
	visibility: visible;
	max-height: 100000px;
	overflow: initial;
	opacity: 1;
	transition: height ease .5s;
}

.oculto {
	visibility: hidden;
	max-height: 0;
	overflow: hidden;
	opacity: 0;
}

section.elementor-element {
	padding: 0;
	background: none;
	border-radius: 6px;
	overflow: hidden;
	text-align: left;
}

.collapse-evento .elementor-element-3bd0af7 img {
	margin-bottom: 30px;
	width: 100%;
	height: auto;
}

section.elementor-element a {
	text-decoration: none;
}

.geodir-post-content-container a {}

.geodir-post-content-container h3 {}

.elementor-element-6a79f66 .elementor-heading-title {
	font-size: 18px;
	font-weight: 600;
}

.elementor-element.elementor-element-521dd18 .elementor-heading-title {
	font-size: 18px;
	line-height: 1em;
}

.geodir_more_info,
.geodir_post_meta,
.geodir_more_info span.geodir-i-select+ul li,
.geodir_post_meta span.geodir-i-select+ul li,
#post_infoTab .geodir_more_info,
#post_infoTab .geodir_more_info span.geodir-i-select+ul li,
#franchises .geodir_post_meta,
#franchises .geodir_post_meta span.geodir-i-select+ul li {
	display: inline !important;
	font-size: 14px !important;
	line-height: 24px !important;
}

.geodir-schedule .geodir-schedule-start,
.geodir-schedule .geodir-schedule-end,
.geodir-schedule .geodir-schedule-sep {
	display: inline-block;
}

.geodir-schedule-start i {
	display: none;
}

.img_autor {
	float: left;
	margin-right: 15px;
}

.img_autor img {
	border-radius: 50%;
	height: 45px !important;
	width: 45px;
}

#evento_sharer a {
	display: inline-block;
	height: 32px;
	width: 32px;
	border-radius: 50%;
	line-height: 32px;
	text-align: center;
}

#evento_exporter .btn.btn-primary {
	color: #fff !important;
}

.elementor-41295 .elementor-element.elementor-element-0fdb356>.elementor-widget-container {
	padding: 15px 0px 15px 5px;
	background-color: #ffffff;
}

.blue-popup {
	position: fixed;
	z-index: 299;
	background-color: rgba(0, 0, 0, 0.1);
	opacity: .5;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	visibility: hidden;
	max-height: 0;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
}

#evento_sharer>a {
	display: inline-block;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	line-height: 34px;
	text-align: center;
	color: #005c76;
	transition: all ease .5s;
	font-size: 30px;
}

#evento_sharer>a:hover {}

#evento_sharer>a>i {
	font-size: 18px;
	line-height: 38px;
}

#evento_exporter {
	text-align: right;
	display: inline-block;
}

#evento_exporter input[type=submit] {
	font-size: 13px;
	padding: 6px 12px;
	font-weight: 600;
}


/* Address */

.geodir_post_meta.geodir-field-address {
	display: block !important;
	font-size: 12px !important;
}

.geodir_post_meta.geodir-field-address .geodir-i-address .geodir_post_meta_title {
	display: none;
}

.geodir_post_meta.geodir-field-address .geodir-i-location,
.geodir_post_meta.geodir-field-address span[itemprop=addressCountry],
.geodir_post_meta.geodir-field-address span[itemprop=postalCode],
.geodir_post_meta.geodir-field-address br,
.geodir_more_info.geodir_contact,
#franchises .geodir_post_meta.geodir-field-address .geodir-i-location,
#franchises .geodir_post_meta.geodir-field-address span[itemprop=addressCountry],
#franchises .geodir_post_meta.geodir-field-address span[itemprop=postalCode],
#franchises .geodir_post_meta.geodir-field-address br,
#gd_tab_franchisesTab .geodir_more_info.geodir_contact {
	display: none !important;
}

.geodir_post_meta.geodir-field-address span[itemprop=streetAddress]:after,
.geodir_post_meta.geodir-field-address span[itemprop=addressLocality]:after,
.geodir_post_meta.geodir-field-address span[itemprop=addressRegion]:after,
#franchises .geodir_post_meta.geodir-field-address span[itemprop=streetAddress]:after,
#franchises .geodir_post_meta.geodir-field-address span[itemprop=addressLocality]:after,
#franchises .geodir_post_meta.geodir-field-address span[itemprop=addressRegion]:after {
	content: ", ";
}

.geodir_more_info.post_address,
#franchises .geodir_post_meta.geodir-field-address {
	display: block !important;
}

.elementor-41295 .elementor-element.elementor-element-1c6e0a87 {
	padding-top: 30px;
	padding-bottom: 10px;
}
</style>
