<script>
export default {
  props: {
    all: Object,
    type: String
  },
  render: function (createElement) {
    let common = ``

    
    if (this.type && this.type == 'header' && this.all) {   
      
      var fuente_body = this.all.content.estilos.bloque_fonts.fuente_body;
      fuente_body = fuente_body.substr(0, fuente_body.indexOf(',')); 
      var fuente_body_import = fuente_body.replaceAll("'","");
      var fuente_cabecera = this.all.content.estilos.bloque_fonts.fuente_cabecera;
      fuente_cabecera = fuente_cabecera.substr(0, fuente_cabecera.indexOf(',')); 
      var fuente_cabecera_import = fuente_cabecera.replaceAll("'","");
      
      // var fuente_body_contract = fuente_body.replaceAll(" ",""); 
      
      // common = `
      // @font-face {
      //   font-family: '${fuente_body}';
      //   font-style: normal;
      //   font-weight: 400;
      //   font-display: swap;
      //   src: url(/fonts/${fuente_body_contract}/${fuente_body_contract}-Regular.woff2) format('woff2'); 
      // }      
      // @font-face {
      //   font-family: '${fuente_body}';
      //   font-style: normal;
      //   font-weight: 700;
      //   font-display: swap; 
      //   src: url(/fonts/${fuente_body_contract}/${fuente_body_contract}-Bold.woff2) format('woff2'); 
      // }`;

      common = ``;
      
      common += `
      @import url("https://fonts.googleapis.com/css2?family=${ fuente_body_import }&display=swap");`; 

      
      if( fuente_cabecera != fuente_body ){

        common += `
        @import url("https://fonts.googleapis.com/css2?family=${ fuente_cabecera_import }&display=swap");`; 
        
        // var fuente_cabecera_contract = fuente_cabecera.replaceAll(" ",""); 
        // common += `
        // @font-face {
        //   font-family: '${fuente_cabecera}';
        //   font-style: normal;
        //   font-weight: 400;
        //   font-display: swap;
        //   src: url(./fonts/${fuente_cabecera_contract}/${fuente_cabecera_contract}-Regular.woff2) format('woff2'); 
        //   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        // }      
        // @font-face {
        //   font-family: '${fuente_cabecera}';
        //   font-style: normal;
        //   font-weight: 700; 
        //   font-display: swap;
        //   src: url(./fonts/${fuente_cabecera_contract}/${fuente_cabecera_contract}-Bold.woff2) format('woff2'); 
        //   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        // }`; 
        
      }      
      
      let font_h1 = this.all.content.estilos.bloque_fonts.tamano_fuente_cabecera;
      // let font_h2 = this.all.content.estilos.bloque_fonts.tamano_fuente_cabecera;
      
      

      common += `
      body{
          font-family: ${ fuente_body } !important;
          font-size: ${ this.all.content.estilos.bloque_fonts.tamano_fuente_textos }px;
          line-height: ${ this.all.content.estilos.bloque_fonts.alto_de_linea_textos }px; 
      }
      body.popup-active {
        overflow: hidden !important;
      }	
      .header {
        background-color: ${ this.all.content.estilos.bloque_navegacion.color_nav };
      }
      .header.fijada {
        background-color: ${ this.all.content.estilos.bloque_navegacion.color_nav_fixed };
      }
      .header > .navbar_sub > .main-logo > span {
        font-family: ${ fuente_cabecera };
      }
      .header ul.menu > li.menu-item > a{
        font-size: 0.9rem;
        font-weight: 400;
        letter-spacing: 1px;
        white-space: normal;
        font-family: ${ fuente_body };
        text-transform: uppercase;
      }
      ::-moz-selection { /* Code for Firefox */
        color: white;
        background: #3297FD;
      }
      ::selection {
        color: white;
        background: #3297FD;
      }
      @media(max-width: 992px){
        .header {
          opacity: 1;
          background-color: ${ this.all.content.estilos.bloque_navegacion.color_nav_fixed };
        }
        .header > .container {
          padding: 0;
        }
        .header ul.menu {
          background-color: ${ this.all.content.estilos.bloque_navegacion.barra_de_navegacion_inicial };
        }        
      }
        .header a {
          color: ${ this.all.content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial };
        }
        .header a:hover,
        .header .menu-item.active a.menu-link,
        .header .menu-item a.dropdown-item.active{
          color: ${ this.all.content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial_activo };
        }
          .header a span {
            color: ${ this.all.content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial };
          }
          .header img {
            border-radius: ${ this.all.content.logo.redondeo_logo }%;
          }
          @media(max-width: 992px){
            .header li.menu-item a {
              /*border-bottom: solid 1px ${ this.all.content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial }33;*/
            }
          }
        .header .main-logo {
          font-size: ${ this.all.content.estilos.bloque_navegacion.tamano_texto }px;
        }
        @media(max-width: 992px){
          .header .main-logo {
            font-size: ${ this.all.content.estilos.bloque_navegacion.tamano_texto_movil }px;
          }
        }
        .header #menu-trigger {
          color: ${ this.all.content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial };
        }
        
        h1, 
        h2,
        h3,
        h4,
        h5,
        h6{
          font-family: ${ fuente_cabecera } !important;
        }
        
        .h1, .h2, h1, h2{
          font-size: ${ font_h1 }px;
        }
        
        
        .bg .text{
          padding: 75px 6%;
          font-size: ${ this.all.content.estilos.bloque_fonts.tamano_fuente_textos }px;
          line-height: ${ this.all.content.estilos.bloque_fonts.alto_de_linea_textos }px;
        }
      `
    }

    if (this.type && this.type == 'footer' && this.all) {
      common = `
      .footer {
        background-color: ${ this.all.content.estilos.pie_de_pagina.barra_de_navegacion_fixed_y_footer };
        color: ${ this.all.content.estilos.pie_de_pagina.color_enlace_barra_de_navegacion_fixed_y_footer };
      }
      .footer a,
      .footer ul.social-buttons li a {
        color: ${ this.all.content.estilos.pie_de_pagina.color_enlace_barra_de_navegacion_fixed_y_footer };
      }
      `
    }

    if (!this.type && this.all) {
      common = `
      .bloque-${ this.all.data.bloque.ID } {
        padding-top: ${ this.all.data.espaciado.antes }px;
        padding-bottom: ${ this.all.data.espaciado.despues }px;
        background-color: ${ this.all.content.estilos.color_de_fondo }
      }
  
      .bloque-${ this.all.data.bloque.ID } .bloque-title {
        color: ${ this.all.content.estilos.color_de_titulo };
      }

      .bloque-${ this.all.data.bloque.ID } p{
        color: ${ this.all.content.estilos.color_de_texto };
      }

      .bloque-${ this.all.data.bloque.ID } .boton-generico {
        background-color: ${ this.all.content.estilos.color_de_titulo };
        color: ${ this.all.content.estilos.color_de_enlace };
      }

      `
      
      if (this.all.data.bloque.post_type == 'bloque_iconos' || this.all.data.bloque.post_type == 'bloque_logos') {
  
      
        let bloque_icons = `

        .bloque-${ this.all.data.bloque.ID } .icono .fa-stack {
          border: ${ this.all.content.grosor_borde }px solid ${ this.all.content.color_borde };
        }

        .bloque-${ this.all.data.bloque.ID } .icono .icono-title {
          color: ${ this.all.content.estilos.color_de_titulo };
        }
    
        .bloque-${ this.all.data.bloque.ID } .icono .icono-texto {
          color: ${ this.all.content.estilos.color_de_texto };
        }
    
        .bloque-${ this.all.data.bloque.ID } .icono .separator {
          border-color: ${ this.all.content.estilos.color_de_texto };
        }
    
        .bloque-${ this.all.data.bloque.ID } .icono a {
          color: ${ this.all.content.estilos.color_de_fondo };
        }
        .bloque-${ this.all.data.bloque.ID } .icono .boton {
          color: ${ this.all.content.estilos.color_de_fondo };
          background-color: ${ this.all.content.estilos.color_de_titulo };
        }
        `
        common = common + bloque_icons
      } else if(this.all.data.bloque.post_type == 'bloque_formulario') {
        let bloque_formulario = `
        .bloque-formulario.bloque-${ this.all.data.bloque.ID } a {
          color: ${ this.all.content.estilos.color_de_texto };
        }

        .bloque-formulario.bloque-${ this.all.data.bloque.ID } label {
          color: ${ this.all.content.estilos.color_de_texto };
        }

        .bloque-${ this.all.data.bloque.ID } .btn {
          color: ${ this.all.content.estilos.color_de_fondo };
          background-color: ${ this.all.content.estilos.color_de_texto };
        }
        `
        common = common + bloque_formulario
      }
    }

    let slot = this.$slots.default

    let style = createElement('style', [common, slot])

    return style
  }
}
</script>
<style lang="scss" scoped>
.bloque-title {
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 15px;
}
</style>
