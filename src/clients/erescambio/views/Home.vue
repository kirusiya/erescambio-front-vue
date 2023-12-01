<template>
  
  
  <div id="app" v-if="content.acf">

    <a href="#content" class="visually-hidden focusable skip-link survey-processed">
      Saltar al contenido principal
    </a>
    
    <header id="header" :class="`header navbar navbar-expand-lg navbar-dark fixed-top ${clase_header}`"> 
      
      <div class="container navbar_sub"> 
        
        <a
          :href="content.logo.link" 
          class="main-logo"
        >
          <img
            v-if="content.logo.ocultar_imagen != 1"
            :src="content.logo.imagen_perfil" 
            :alt="`${content.logo.imagen_perfil_alt}`"
            intrinsicsize="50x50"
            class="logo-imagen-web"
            height="50"
            width="50"
          />

          <span class="logo-text" v-html="content.logo.texto_perfil" />
        </a>

        <nav id="nav" class="nav" role="navigation"  :key="`menu_key_${refresh_menu}`">
        
          <ul 
          v-if="content.acf.ocultar_menu != true"
          class="menu" 
          :class="{'active': menuTrigger}">
            <li
              v-for="(item, i) in content.menus"
              :key="`menu-item-${i}`"
              class="menu-item nav-item nav-item-menu-button"
              :class="['menu-item-' + i, (item.menu_slug == pathname) ? 'active' : '']"     
            >
              <a
                class="menu-link"
                :href="item.menu_slug"
                :target="item.target"
                @click="triggerMenu"
                v-html="item.menu_texto" />
              
              <span
               v-if="item.submenus && item.submenus.length > 0"
               class="dropdown-toggle dropdown-toggle-split"
               @click="triggerSubmenu(i)"
              ></span>

              <div 
                v-if="item.submenus && item.submenus.length > 0"
                class="dropdown-menu">
                  
                  <a
                  v-for="(link, k) in item.submenus"
                  :key="`submenu-item-${k}`"
                  :class="['dropdown-item nav-link', (link.menu_slug == subpathname) ? 'active' : '']"              
                  :href="link.menu_slug"
                  :target="link.target"
                  @click="triggerMenu"
                  v-html="link.menu_texto" />
                  
              </div>
              
            </li>
            
            <li
              v-for="(item, i) in content.menu_extras.botones" 
              :key="`menu-item-boton-${i}`" 
              class="menu-item nav-item nav-item-menu-button botones"
              :class="`menu-item-${i} botones-boton-${i}`"
            >
              <v-style>
                .botones-boton-{{i}} a {
                  color: {{ item.color_del_texto }} !important; 
                  background-color: {{ item.color_de_fondo }} !important;
                }
                .botones-boton-{{i}} a:hover {
                  background-color: {{ item.color_hover }} !important;
                }
              </v-style>
              <a
                class="menu-link btn btn-sm" 
                :href="item.enlace"
                :target="item.destino"
                :title="item.texto_del_boton"
                @click="triggerMenu"
              >
                {{item.texto_del_boton}}
              </a>
            </li>
            
            <li
              v-if="content.menu_traducciones " 
              class="menu-item nav-item nav-item-menu-button botones menu-item-9999999"
            >
              <a
                class="menu-link"
                v-html="content.menu_traducciones.principal.label" />
              
              <span
               class="dropdown-toggle dropdown-toggle-split"
               @click="triggerSubmenu(9999999)"
              ></span>

              <div 
                class="dropdown-menu">
                  <a
                  v-for="(item, i) in content.menu_traducciones.traducciones"  
                  :key="`submenu-item-${i}`"
                  class="dropdown-item nav-link"
                  :href="item.link" 
                  :title="`${item.idioma}`"
                  @click="triggerMenu"
                  v-html="item.label" />
                  
              </div>
            </li>
            
            </ul>
          
            <ul 
            class="list-inline social-buttons"
            v-if="content.redes_menu == 0"
            >
              <li 
                v-for="(item, i) in content.redes_sociales"
                :key="`menu-item-${i}`"
                class="list-inline-item">
                <a :href="item" :title="i" target="_blank">
                  <i :class="`fa fa-${i}`"></i>
                </a>
              </li>
              
            </ul>
          
          

          <i v-if="content.acf.ocultar_menu != true"
          id="menu-trigger" class="fa fa-bars"
            @click="menuTrigger = !menuTrigger"
          ></i>
        </nav>
        
      </div>
    
    </header> 
    
    <main role="main" id="content">
      
      <Individual v-if="content.individual" :slug="slug" /> 
      
      <template
        v-else
        v-for="(bl, i) in content.acf.bloques"
      >
        <bloque-slider
          v-if="bl.bloque.post_type == 'bloque_sliders'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
          :class="`section_${i}`"
        />
        <bloque-iconos
          v-else-if="bl.bloque.post_type == 'bloque_iconos'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-logos
          v-else-if="bl.bloque.post_type == 'bloque_logos'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-formulario
          v-else-if="bl.bloque.post_type == 'bloque_formulario'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-mapa
          v-else-if="bl.bloque.post_type == 'bloque_mapa'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-sigueme
          v-else-if="bl.bloque.post_type == 'bloque_sigueme'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-texto
          v-else-if="bl.bloque.post_type == 'bloque_texto'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-imagen
          v-else-if="bl.bloque.post_type == 'bloque_imagen'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
          :estilos_generales="content.estilos"
        />
        <bloque-archivo
          v-else-if="bl.bloque.post_type == 'bloque_archivo'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-video
          v-else-if="bl.bloque.post_type == 'bloque_video'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-redes
          v-else-if="bl.bloque.post_type == 'bloque_redes'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-call-actions
          v-else-if="bl.bloque.post_type == 'bloque_calls_actions'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-testimonios
          v-else-if="bl.bloque.post_type == 'bloque_testimonios'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-blog
          v-else-if="bl.bloque.post_type == 'bloque_blog'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-newsletter
          v-else-if="bl.bloque.post_type == 'bloque_newsletter'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
          :autor="content.author"
          :lang="content.lang"
          :modalLeyes="modal"
        />
        <bloque-boton
          v-else-if="bl.bloque.post_type == 'bloque_boton'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-ecommerce
          v-else-if="bl.bloque.post_type == 'bloque_ecommerce'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-eventos
          v-else-if="bl.bloque.post_type == 'bloque_eventos' || bl.bloque.post_type == 'bloque_evento_online'"
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-eventos
          v-else-if="bl.bloque.post_type == 'bloque_eventos_online'" 
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-frases
          v-else-if="bl.bloque.post_type == 'bloque_frase'" 
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />
        <bloque-reto
          v-else-if="bl.bloque.post_type == 'bloque_reto'"  
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />      
        <bloque-iframe
          v-else-if="bl.bloque.post_type == 'bloque_iframe'"  
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />      
        <bloque-promociones
          v-else-if="bl.bloque.post_type == 'bloque_promociones'"  
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />      
        <bloque-codigo
          v-else-if="bl.bloque.post_type == 'bloque_codigo'"  
          :key="`bloque_${i}`"
          :id="bl.link_menu"
          :type="bl.bloque.post_type"
          :content="content.bloques_extended[`${bl.bloque.ID}`]"
          :data="bl"
        />      
        <template v-else></template>

      </template>
    
    </main>
    

    <footer class="footer" role="contentinfo">
      
      <v-style type="footer" :all="{content}" />
      
      <div class="container">
        <div class="legal">
          <div v-if="content.legales_footer">
            <ul class="unlist">
              <li>
              <a href="/nota-legal">{{ content.traducciones ? content.traducciones.txt_nota_legal : "Nota legal" }}</a>
              </li>
              <li>
              |
              </li>
              <li>
              <a href="/politica-de-privacidad">{{ content.traducciones ? content.traducciones.txt_politica_privacidad : "Política de privacidad" }}</a>
              </li>
              <li>
              |
              </li>
              <li>
              <a href="/politica-de-cookies">{{ content.traducciones ? content.traducciones.txt_politica_cookies : "Política de cookies" }}</a>
              </li>
              <li>
                |
                </li>
                <li>
                <a href="/declaracion-de-accesibilidad">{{ content.traducciones.txt_declaracion_accesibilidad ? content.traducciones.txt_declaracion_accesibilidad : "Declaración de accesibilidad" }}</a>
                </li>
            </ul>
          </div>
        </div>

        <div class="copyright">Copyright ©{{ yearToday }}</div>
      </div>
      
      <div class="container container_bottom">
        <div class="col-md-10 text-left links_personal">
          <div v-if="content.enlaces_footer != 0">
            <ul class="unlist" v-if="content.enlaces_footer">  
              <li 
              v-for="(item, i) in content.enlaces_footer"
              :key="`menu-footer-${i}`"
              >
                <a :href="item.enlace_footer" target="_blank">
                {{ item.nombre_footer }}
                </a>
              </li>
            </ul> 
          </div>
        </div>
        
        <div class="col-md-2 text-right legal">
          
          <ul 
            v-if="content.redes_menu == 2"
            class="list-inline social-buttons" style="margin-top: 0;">
            <li 
              
              v-for="(item, i) in content.redes_sociales"
              :key="`menu-item-${i}`"
              class="menu-item menu-item-social list-inline-item">
              <a :href="item" :title="i" target="_blank">
                <i :class="`fa fa-${i}`"></i>
              </a>
            </li>
          </ul>
        
        </div>
        
      </div>
      
    
    
      <div 
        v-if="content.ctas != 0" 
        v-html="content.ctas"
      /> 
      
      <div 
        v-if="content.autor_popup.data"  
        v-html="content.autor_popup.data"
      /> 
      
      <cookie-law theme="dark-lime" :buttonText="txt_vale">
        <div slot="message">
          {{ content.traducciones ? content.traducciones.txt_cookies : "Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo." }}
        </div>
      </cookie-law>
      
      <!--
      <popup id="popup_legal" class="fancybox-slide--current" :pactive="modal" @popup-update="modal = arguments[0]"> 
        <v-style>
        .wrapper-popup.p-active{
          padding: 0 !important;
        }
        .popup{
          width: 100%;
          height: 100%;
        }
        </v-style>
        
        <div class="container" id="contenido_leyes"></div>
        
      </popup>
      -->

      <div 
      v-if="content.mostrar_redes_sociales" 
      class="social_share">
        <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{backgroundColor: network.color}" 
            :url="content.metas.url" 
            :title="content.metas.google_title"
            :description="content.metas.google_description"
          >
          <i :class="network.icon"></i>
          <span>{{ network.name }}</span>
        </ShareNetwork>
      </div>
      
      
      <v-style type="header" :all="{content}">
        .header .main-logo span{
          color: {{content.estilos.bloque_navegacion.color_logo}};  
        }
        .header ul.menu > li.menu-item > a{
          font-size: {{content.estilos.bloque_navegacion.tamano_menu}}px;
        }
        ul.social-buttons li a{
          color: {{content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial}};
        }
        .dropdown-menu{
          background:  {{content.estilos.bloque_navegacion.color_nav_fixed}}; 
        }
        .dropdown-menu a{
          font-size: {{content.estilos.bloque_navegacion.tamano_submenu}}px !important;
          line-height: {{content.estilos.bloque_navegacion.tamano_submenu}}px !important; 
        }
        .dropdown-toggle{
          color: {{content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial}};
        }
        
        #autor-popup{
          background: {{ content.estilos.bloque_popup.color_de_fondo  }};
          color: {{ content.estilos.bloque_popup.color_de_texto  }};
        }
        
        #autor-popup .autor-popup-details a.btn{
          background-color: {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          color: {{ content.estilos.bloque_popup.color_de_fondo }} !important;
          border: 2px solid {{ content.estilos.bloque_popup.color_de_enlace }} !important;
        }
        #autor-popup .autor-popup-details a.btn:hover{          
          color: {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          border: 2px solid {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          background-color: {{ content.estilos.bloque_popup.color_de_fondo }} !important;
        }
        #autor-popup .autor-popup-details a{
          color: {{ content.estilos.bloque_popup.color_de_enlace }};
        }
        
        #autor-popup .autor-popup-details h3 a{
          color: {{ content.estilos.bloque_popup.color_de_titulo }};
        }
        
        #autor-popup .box-formulario{
          background: {{ content.estilos.bloque_popup.color_de_fondo }};
          color: {{ content.estilos.bloque_popup.color_de_texto }};
        }
        #autor-popup .wpcf7-form label {
          color: {{ content.estilos.bloque_popup.color_de_texto }};
        }
        #autor-popup .wpcf7-form a { 
          color: {{ content.estilos.bloque_popup.color_de_texto }};
        }
        #autor-popup .wpcf7-form input[type=submit]{
          cursor: pointer;
          background-color: {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          color: {{ content.estilos.bloque_popup.color_de_fondo }} !important;
          border: 2px solid {{ content.estilos.bloque_popup.color_de_enlace }} !important;
        }
        #autor-popup .wpcf7-form input[type=submit]:hover{
          color: {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          border: 2px solid {{ content.estilos.bloque_popup.color_de_enlace }} !important;
          background-color: {{ content.estilos.bloque_popup.color_de_fondo }} !important;
        }
        #autor-popup .ec-author-follow{
          color: {{ content.estilos.bloque_popup.color_de_fondo }} !important;
          background: {{ content.estilos.bloque_popup.color_de_titulo }} !important;
          border: 2px solid {{ content.estilos.bloque_popup.color_de_titulo }} !important; 
        }
        .wrapper-popup .popup,
        .wrapper-popup .popup p,
        .wrapper-popup .popup h1,
        .wrapper-popup .popup h2,
        .wrapper-popup .popup h3, 
        .wrapper-popup .popup h4,
        .wrapper-popup .popup h5,
        .wrapper-popup .popup h6
        {
          color: {{ content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial }} !important;
        }
        .wrapper-popup.p-active
        {
          background: {{ content.estilos.bloque_navegacion.barra_de_navegacion_inicial }} !important;
          color: {{ content.estilos.bloque_navegacion.color_enlace_barra_de_navegacion_inicial_activo }} !important;
        }
      </v-style>
      
      <v-style v-if="content.enlaces_footer !== false">
      .footer > .container{
        border-bottom: none;
      }
      </v-style>
      
      <v-style v-if="content.mostrar_redes_sociales">
        .contact_fixed {
          bottom: 60px;
        }
      </v-style>
      
    </footer>

    <div     
    v-if="content.acf.pie_de_pagina_obligatorio && content.acf.pie_de_pagina_obligatorio != '0'"
    class="footer-kit-digital container-fluid"
    :class="[(content.acf.pie_de_pagina_obligatorio == '2') ? 'black' : 'grey']">

      <div class="container-fluid text-kit">
        
        <div class="row"> 
          <div class="col text-center">
            PROGRAMA KIT DIGITAL COFINANCIADO POR LOS FONDOS NEXT GENERATION (EU) DEL MECANISMO DE RECUPERACIÓN Y RESILENCIA
          </div>
        </div>

      </div>

      <div class="container py-3">

        <div class="row">

          <div class="col-12 col-md-6 text-center py-2 pie-pagina-obl">
            <img src="../assets/imgs/FUE_footer_white.png" alt="Financiado por la Unión Europea" style="max-width: 230px;" v-if="content.acf.pie_de_pagina_obligatorio == '2'" />
            <img src="../assets/imgs/FUE_footer_black.png" alt="Financiado por la Unión Europea" style="max-width: 230px;" v-else />
          </div>

          <div class="col-12 col-md-6 text-center py-2">
            <img src="../assets/imgs/prtr_footer_white.png" alt="Plan de Recuperación, Transformación y Resiliencia" style="max-width: 250px;" v-if="content.acf.pie_de_pagina_obligatorio == '2'" />
            <img src="../assets/imgs/prtr_footer_black.png" alt="Plan de Recuperación, Transformación y Resiliencia" style="max-width: 250px;" v-else />
          </div>

        </div>
    
      </div>

    </div>

  </div>
</template>

<script>
import '../assets/css/grid.css'

import BloqueSlider from '../components/BloqueSlider'
import BloqueFormulario from '../components/BloqueFormulario'
import BloqueIconos from '../components/BloqueIconos'
import BloqueLogos from '../components/BloqueLogos'
import BloqueMapa from '../components/BloqueMapa'
import BloqueSigueme from '../components/BloqueSigueme'
import BloqueTexto from '../components/BloqueTexto'
import BloqueImagen from '../components/BloqueImagen'
import BloqueArchivo from '../components/BloqueArchivo'
import BloqueVideo from '../components/BloqueVideo'
import BloqueRedes from '../components/BloqueRedes'
import BloqueCallActions from '../components/BloqueCallActions'
import BloqueTestimonios from '../components/BloqueTestimonios'
import BloqueBlog from '../components/BloqueBlogNew'
import BloqueNewsletter from '../components/BloqueNewsletter'
import BloqueBoton from '../components/BloqueBoton'
import BloqueEcommerce from '../components/BloqueEcommerce'
import BloqueEventos from '../components/BloqueEventos'
import BloqueFrases from '../components/BloqueFrases'
import BloqueReto from '../components/BloqueReto'
import BloqueIframe from '../components/BloqueIframe'
import BloquePromociones from '../components/BloquePromociones' 
import BloqueCodigo from '../components/BloqueCodigo' 
import CookieLaw from 'vue-cookie-law'
import Individual from '../components/Individual'



import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Home',
  components: {
    BloqueSlider,
    BloqueFormulario,
    BloqueIconos,
    BloqueLogos,
    BloqueMapa,
    BloqueTexto,
    BloqueImagen,
    BloqueArchivo,
    BloqueVideo,
    BloqueRedes,
    BloqueCallActions,
    BloqueTestimonios,
    BloqueBlog,
    BloqueNewsletter,
    BloqueBoton,
    BloqueEcommerce,
    BloqueEventos,
    BloqueSigueme,
    BloqueFrases,
    BloqueReto,
    BloqueIframe,
    BloquePromociones,
    BloqueCodigo,
    CookieLaw,
    Individual
  },
  data() {
    return {
      content: {},
      menuStyle: {},
      menuTrigger: false,
      yearToday: new Date().getFullYear(), 
      metas: {},
      modal: false,
      sharing: {
        url: '',
        title: '',
        description: '',
        quote: '',
        hashtags: '' 
      },
      networks: [
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' }
      ],
      txt_vale: "Vale",
      individual: false,
      slug: null,
      clase_header: "",
      pathname: "",
      subpathname: "",
      refresh_menu: 0
    }
  },
  methods: {
    refreshmenu(){
      
      setTimeout( () => {
          this.pathname = window.location.pathname
          
          if( window.location.search ){
            this.pathname = "/" + window.location.search
          }
          if( window.location.hash ){
            if( window.location.search ){
              this.pathname = "/" + window.location.search
              this.subpathname = "/" + window.location.search + window.location.hash   
            } else {
              this.pathname = "/" + window.location.hash  
            }            
          }
           
          this.refresh_menu++
      },100)
      
    },
    getClassHeader() {      
      if( this.content.estilos.bloque_navegacion.sombra_inferior == true ){
        this.clase_header += " header-shadow ";        
      }
      if( this.content.estilos.bloque_navegacion.no_forzar_mayusculas == true ){
        this.clase_header += " header-minus ";        
      }
      if( this.content.estilos.bloque_navegacion.enlaces_en_negrita == true ){
        this.clase_header += " header-bold ";        
      }
    },
    getContent() {
      //this.content = this.$content
      
      if( this.content.estilos.bloque_navegacion.menu_encima_contenido != true ){ 
        document.body.classList.add('pbody')
      }
    },
    triggerMenu(){
      this.menuTrigger = false;
      document.querySelector(`.menu`).classList.remove('active');
      document.querySelector('body').classList.remove('popup-active');
      var popups = document.querySelectorAll('.wrapper-popup');   
      
      popups.forEach(function(popup) {
        popup.classList.remove('p-active');
      });
      
      this.refreshmenu()
    },
    triggerSubmenu(i) {
      
      if( document.querySelector(`.menu-item-${i}`).classList.contains('active') ){
        document.querySelector(`.menu-item-${i}`).classList.remove('active')
      } else {
        document.querySelectorAll('.menu-item').forEach((item) => {
          item.classList.remove('active')
        })
        
        document.querySelector(`.menu-item-${i}`).classList.add('active')
      }
    },
    submitFormPopup(event) {
      
      event.preventDefault();
      
      let $form = document.querySelector(".box-formulario .wpcf7-form");
      
      let toSend = new FormData($form);
      
      if ($form.checkValidity()) {

        this.sending = true

        let action = "https://www.erescambio.com/wp-content/themes/hello-theme-child/v3/mail/popup_form.php"
        
        document.querySelector('.box-formulario .wpcf7-response-output').innerHTML = `<i class="fas fa-circle-notch fa-spin" style="margin-bottom: 25px;"></i>`;
        
        this.$axios.post(action, toSend, {headers: {
          'Content-Type': 'multipart/form-data'
        }})
        .then((res) => {
          
          if( res.data.codigo == 0 ){
            document.querySelector('.box-formulario .wpcf7-response-output').innerHTML = `<div class="alert alert-danger" id="GRACIAS-FORM-CONTACTO"><button onclick="document.querySelector('.box-formulario .wpcf7-response-output').innerHTML=''" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><strong>${res.data.mensaje}</strong></div>`;            
          }else {
            document.querySelector('.box-formulario .wpcf7-response-output').innerHTML = `<div class="alert alert-success" id="GRACIAS-FORM-CONTACTO"><button onclick="document.querySelector('.box-formulario .wpcf7-response-output').innerHTML=''" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><strong>Mensaje enviado correctamente. </strong></div>`;            
          }
          
          $form.reset()
          this.sending = false
        })
        .catch(() => {
          
          document.querySelector('.box-formulario .wpcf7-response-output').innerHTML = `<div class="alert alert-danger" id="ERROR-FORM-CONTACTO"><button onclick="document.querySelector('#success').innerHTML=''" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><strong>Error al enviar el mensaje. Pruebe de nuevo. </strong></div>`;
          this.sending = false
        })
      } else {
        $form.reportValidity();
      }

      
    }
  },
  created() {
    
    this.content = this.$content
    
    this.getClassHeader()
    
    this.getContent()
    
    AOS.init({
      offset: 120
     }     
    );
    
  },
  mounted() {
    
    this.refreshmenu()
    
    this.getClassHeader()
    
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    setTimeout( () => {
        AOS.refresh();
    },100)
    
    this.txt_vale = this.content.traducciones ? this.content.traducciones.txt_vale : "Vale";
    
    let popup_mostrado = false;
    var windowsize = window.innerWidth;    
    var  scrolltrigger = 0;
    
    var cookieValor = getCookie("autor_popup_" + this.content.author); 
    
    if( cookieValor != "true" && this.content.autor_popup && this.content.autor_popup.data ){  
      
      
      
      if( this.content.autor_popup.cta.tipo_de_popup == 'scroll' ){        
        
        windowsize = window.innerWidth;
        
        scrolltrigger = parseFloat("0." + this.content.autor_popup.cta.porcentaje_de_scroll);
        
        if(windowsize < 768){
          scrolltrigger = parseFloat("0." + this.content.autor_popup.cta.porcentaje_de_scroll_movil);
        }       
      
      } else {
        
        if( document.getElementById("autor-popup") ){ 
          var tiempo = this.content.autor_popup.cta.segundos;
          
          setTimeout(function(){
              
              document.getElementById("autor-popup").classList.add("showing");    
              document.getElementById("autor-popup-bg").classList.add("showing");    
              document.body.classList.add("autor-popup-showing");    
              popup_mostrado = true;
              
          }, tiempo * 1000); 
        }
      
      }
      
      if( this.content.autor_popup.cta.contenido_popup == "contacto" ){
        document.getElementById("link_politica").setAttribute('href',"/informacion-legal/?i=" + this.content.post_author  + "&t=p&u=" + this.content.metas.url); 
        
        var formulario_popup =  document.querySelector(".box-formulario .wpcf7-form");
        
        formulario_popup.addEventListener("submit", this.submitFormPopup);
        
      }
      
    
    }
    
    
    const parentThis = this;
    
    window.onscroll = function() {
      var wintop = window.scrollY, docheight = document.body.clientHeight, winheight = window.innerHeight;
      
      if( wintop <= 100 ){
        document.getElementById("header").classList.remove("fijada");
      } else {
        document.getElementById("header").classList.add("fijada");
      }
      
      
      
      if( cookieValor != "true" && parentThis.content.autor_popup && parentThis.content.autor_popup.cta && parentThis.content.autor_popup.cta.tipo_de_popup == 'scroll' && parentThis.content.autor_popup.data ){   
        
        if( (wintop / (docheight - winheight) ) > scrolltrigger ){
          
          if( ! popup_mostrado ){
              document.getElementById("autor-popup").classList.add("showing");    
              document.getElementById("autor-popup-bg").classList.add("showing");    
              document.body.classList.add("autor-popup-showing");    
              popup_mostrado = true; 
          }
          
        }
      }
      
    };
    
    
    
    if (this.$route.hash) {
      location.href = this.$route.hash
    }

    //kiwop
    let images = document.querySelectorAll('.pie-pagina-obl img');
      images.forEach((image) => {
        image.addEventListener('load', () => {
          let originalWidth = image.naturalWidth;
          let originalHeight = image.naturalHeight;

          // Aplica el tamaño original a la imagen
          image.setAttribute('width', originalWidth);
          image.setAttribute('height', originalHeight);
        });
      });
    //kiwop
    
  }
}
</script>


<style lang="scss">
body {
  margin: 0;
  font-size: 14px;
}
body.pbody{
  padding-top: 76px;
  
  & .header{
    -webkit-box-shadow: 0 0 7px rgba(0,0,0,0.1) !important;
    box-shadow: 0 0 7px rgba(0,0,0,0.1) !important; 
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.1;
}

h1{
  font-size: 60px;
  text-transform: none;
}

h2{
  text-transform: none;	
  font-size: 60px;
}

@media (max-width: 1200px) {
	
}

@media (max-width: 768px) {
	h2{
		font-size: 50px; 
	}		
}

@media (max-width: 480px) {
	h2{
		font-size: 30px;
	}
}
 h4{
	font-size: 16px;
	text-transform: none;
	font-weight: 400;
	line-height: 30px;
 }
 
a {
  text-decoration: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.clearfix {
  display: block;
  clear: both;
}

/*
img {
  width: auto;
}
*/
.aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.fa-stack {
  border-radius: 50%;
  overflow: hidden;
  width: 160px !important;
  height: 160px !important;
  display: inline-block;
  margin: 0px auto;  
}

.text-center {
  text-align: center !important;
}
.text-right {
  text-align: right !important;
}
.h-100 {
  height: 100%;
}

.boton-generico {
  white-space: normal;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 3px;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  line-height: 22px;
  display: inline-block;
  cursor: pointer;
}

.alert {
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f44336;
}

.wpcf7-response-output{
  text-align: center;
  justify-content: center;
  display: flex;
  width: 100%;
}

  .wpcf7-response-output .close{
    margin-left: 20px;
  }


.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}

button.close {
    padding: 0;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
}

main > section{
  padding: 0;
}

/* W3C */
.visually-hidden {
    position: absolute !important;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    word-wrap: normal;
}
.visually-hidden.focusable:active, .visually-hidden.focusable:focus {
    overflow: visible;
    clip: auto;
    width: auto;
    height: auto;
    z-index: 9999;
    background: white;
    padding: 5px;
}

/* Bloque */
.wrapper-bloque::before{
  content: '';
  display: block;
  padding-top: 76px;
  margin-top: -76px;
}

/* Global Icons */
.global-icons {
  display: inline-flex !important;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 26px;
  margin: 0 25px;
  color: white;
  border: 2px solid transparent;
  transition: all ease .15s;
  justify-content: center;
  align-items: center;
  
  &.icon-phone {
    background-color: #8BC34A;
    border-color: #8BC34A;
    &:hover {
      color: #8BC34A;
    }
  }
  &.icon-email {
    background-color: #ff9800;
    border-color: #ff9800;
    &:hover {
      color: #ff9800;
    }
  }
  &.icon-whatsapp {
    background-color: #00E676;
    border-color: #00E676;
    &:hover {
      color: #00E676;
    }
  }
  &.icon-skype {
    background-color: #00AFF0;
    border-color: #00AFF0;
    &:hover {
      color: #00AFF0;
    }
  }
  &.icon-video {
    background-color: #3f51b5;
    border-color: #3f51b5;
    &:hover {
      color: #3f51b5;
    }
  }
  &.icon-telegram {
    border-color: #00bcd4;
    background: #00bcd4;
    &:hover {
      color: #00bcd4;
    }
  } 
  &.icon-agenda {
    border-color: #B225E2;
    background: #B225E2;
    &:hover {
      color: #B225E2; 
    }
  }    
  &:hover {
    background-color: transparent;
  }
}


form {

  input {
    &.form-control {
      display: block;
      width: 100%;
      padding: 20px;
      font-size: 1rem;
      line-height: 1.25;
      color: #495057;
      background-color: #fff;
      background-image: none;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      margin: 0px;
    }
  }
  & .form-group {
    input {
      padding: 20px;
    }


    &.form-floating {
        position: relative;
        
        & > input:focus,
        & > .form-control:not(:placeholder-shown){
          padding: 28px 20px 12px;
        }

        & >.form-control-plaintext::placeholder, & >.form-control::placeholder {
          color: transparent;
        }
        & > label {
            position: absolute;
            top: 0;
            left: 8px;
            width: 100%;
            height: 100%;
            padding: 1rem 0.75rem;
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
            pointer-events: none;
            border: 1px solid transparent;
            transform-origin: 0 0;
            transition: opacity .1s ease-in-out,transform .1s ease-in-out;
            font-weight: 700;            
            text-transform: uppercase;
            font-size: 16px;
            color: #ddd;
            font-family: Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif;
            text-transform: uppercase;
        }
        & > .form-control-plaintext~label, 
        & > .form-control:focus~label, 
        & > .form-control:not(:placeholder-shown)~label,
        & > .form-select~label {
            opacity: 1;
            transform: translateY(-6px) translateX(4px) scale(0.7);
        }
    }
    
  }

  & .form-control {
    width: 100%;
    margin-bottom: 24px;

    & > input {
      width: 100%;
      margin: 0;
      outline: none;
      display: block;
      width: 100%;
      padding: 20px;
      font-size: 18px;
      line-height: 1.25;
      color: #495057;
      background-color: #fff;
      background-image: none;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      box-sizing: border-box;
      font-family: inherit;
      font-weight: 400;
    }

    & > textarea {
      width: 100%;
      margin: 0;
      outline: none;
      display: block;
      width: 100%;
      padding: 20px;
      font-size: 18px;
      line-height: 1.25;
      color: #495057;
      background-color: #fff;
      background-image: none;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      box-sizing: border-box;
      font-family: inherit;
      font-weight: 400;
    }


    
    
  }
}

.navbar_sub.container{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
  
.nav{
  display: flex;
  align-items: center;
  .social-buttons {
    display: flex;
    align-items: center;
    margin: 0 0 0 15px;
    @media (min-width: 993px) {
      margin-top: 0px;
    }
    @media (max-width: 992px) {
      margin-top: 0;
      margin-right: 15px;
      margin-left: 0px;
    }
  }
}

.header {
  padding: 8px 1rem;
  -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
  -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
  transition: padding-top 0.3s, padding-bottom 0.3s;
  background-color: rgba(0,0,0,0.6);
  min-height: 70px;      
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1003;
  box-sizing: border-box;
  //overflow: hidden;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  
  &.header-shadow.fijada {
    -webkit-box-shadow: 0 0 7px rgba(0,0,0,0.1) !important;
    box-shadow: 0 0 7px rgba(0,0,0,0.1) !important; 
  }
  &.header-minus ul.menu > li.menu-item > a {
    text-transform: none;
  }
  &.header-minus .dropdown-menu a{
    text-transform: none;
  }
  &.header-bold ul.menu > li.menu-item > a {
    font-weight: bold;
  }
  &.header-bold .dropdown-menu a{
    font-weight: bold;
  }
  
  & #menu-trigger {
    float: right;
    display: none;
    cursor: pointer;

    @media (max-width: 992px) {
      & {
        display: block;
        font-size: 30px;
        line-height: 50px;
      }
    }
  }

  & > .navbar_sub > .main-logo {
    text-decoration: none;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    line-height: inherit;
    white-space: normal;

    & > img {
      height: 50px;
      width: auto;
      margin-right: 8px;
    }

    & > span {
      display: inline-block;
      margin-left: 10px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      
      @media (max-width: 360px) {
        &{
          display: none;         
        }
      }
    }
  }

  &.fijada .main-logo span {
    
    @media (max-width: 360px) {
      &{
        display: none;         
      }
    }
  }

  & ul.menu {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    
    
    & > li.menu-item > a{
        text-align: center;
    }
    
    & > li.menu-item > a.btn-sm{
      line-height: 20px;
      padding: 10px 1.2rem !important;
    }
    
    & > li.menu-item.botones.menu-item-0 {
      margin-left: 1.5rem!important;
    }
    
    

    @media (max-width: 992px) {
      & {
        position: absolute;
        top: 70px;
        right: 0;
        z-index: 1001;
        width: 100%;
        height: 0;
        overflow: hidden;
        margin-top: 0;
        transition: all ease .4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        opacity: 0;

        &:not(.active){
          transition: all ease .4s;
        }

        &.active {
          height: calc( 100vh - 70px );
          opacity: 1;
        }
      }
    }
    
    
    & > li.menu-item {
      display: flex;
      align-items: center;
      margin: 0;
      position: relative;
      
      & > span.dropdown-toggle {
          position: relative;
          width: 6px;
          justify-content: flex-end;
          pointer-events: none;
          margin-right: 14px;
      }
      
      
      @media (max-width: 992px) {
        & {
          display: block;
          margin-top: 0;
          padding-left: 15px;
          padding-right: 15px;
          text-align: left;
        }

        &.menu-item-social {
          display: inline-block;

          & a {
            border: none;
          }
        }
      }

      & > a {
        display: inline-block;
        transition: all ease .4s;
        padding: 20px 14px; 
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 300;

        @media (max-width: 992px) {
          & {
            padding: 10px 0;
            display: block;
            font-weight: 600 !important;
          }
        }
      }

      @media (max-width: 768px) {
        & {
          width: 100%;
          text-align: center;
        }
        &.botones.menu-item-0{
          margin-top: 20px;
          margin-left: 0 !important;
        }
        & > a {
          display: inline-block;
        }
        & > span.dropdown-toggle {
          position: absolute;
          margin-left: 15px;
          top: 7px;
          right: initial;
          height: initial;
          display: initial;
          align-items: initial;
          width: initial;
          justify-content: initial;
          pointer-events: initial;
          
          &:after{
            vertical-align: middle;
          }
        }
        & .dropdown-menu {
          box-shadow: none;
          text-align: center;
          & a {
            border: none;
            font-size: 13px !important;
            font-weight: 600 !important;
          }
        }
        &.active > .dropdown-menu {
          display: block;
          position: static;
          width: 100%;
          top: initial;
          left: initial;
          float: none;
        }
      }
    }
    
    
  }

  & #menu-trigger {
    margin: 0;
  }
}

.nav-item.nav-item-menu-button a.btn {
    margin-right: 10px;
    line-height: 0;
    padding: 1rem 1.2rem !important;
    text-transform: none !important;
}

  .bloque-title {
    text-align: center;
    margin: 10px 0px 45px 0px;
    &-small {
      margin: 0px 0px 15px;
    }

    @media(max-width: 768px){
      & {
        margin-bottom: 60px;
        padding: 0 15px;
      }
    }
  }
  
.image-full{
	display: none;
	width: 100%;
  line-height: 0;
}
	.image-full img{
		width: 100%;
	}
  @media(max-width: 991px){
  .image-full{
    display: inline-block;
  }	  	
  }
  
  

.footer {
  
  padding: 25px 0 30px 0px;
  font-size: 12px;

  & > .container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 15px;

    @media (max-width: 992px) {
      & {
        display: block; 
      }
    }
  }
  
  & > .container_bottom{
    border-bottom: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .links_personal a {
    margin-right: 30px;
  }

  & .legal,
  & .copyright {
    opacity: 0.7;
    
    & a {
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .unlist{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    
    & li{
      padding: 0 3px;
    }
  }
  
  @media (max-width: 769px) {
    & {
        text-align: center;
    }
    .text-right{
      text-align: center !important;
    }
    ul.social-buttons{
      margin-left: 0;
    } 
  }
  
}
#contenido_leyes{
  padding: 15px 15px;
  margin-top: 70px;  
  word-break: break-word;
  
  @media (max-width: 769px) {
    & {
      max-width: none;
    }
  }
}
.Cookie--dark-lime {
  z-index: 999999 !important;
}
.Cookie--dark-lime .Cookie__button {
  background: #FFFFFF !important;
  color: #424851 !important;
  border: 2px solid #FFFFFF !important;
  font-weight: bold;
}
.Cookie--dark-lime .Cookie__button:hover{
  background: #424851 !important;
  color: #FFFFFF !important;
  border: 2px solid #FFFFFF !important;
}

.wrapper-popup .popup{
  
  @media (max-width: 768px) {
    & {
      padding: 45px 15px !important;
    }
  }
}

// ::-webkit-scrollbar {
//     width: 6px;
//     height: 6px; 
// }
// /* Track */
// ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
//     -webkit-border-radius: 6px;
//     border-radius: 6px;
// }
// /* Handle */
// ::-webkit-scrollbar-thumb {
//     -webkit-border-radius: 6px;
//     border-radius: 6px;
//     background: rgba(50,50,50,0.8); 
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
// }
// ::-webkit-scrollbar-thumb:window-inactive {
//     background: rgba(50,50,50,0.4); 
// }
.swiper-container-autoheight .swiper-wrapper {
    transition-property: transform;
}

.swiper-slide{
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
}

.swiper-wrapper{
  -webkit-transform-style: preserve-3d;
}

.no_slider .swiper-wrapper{
  justify-content: center; 
}

.no_slider .swiper-slide-duplicate,
.no_slider .swiper-button-prev, 
.no_slider .swiper-button-next,
.no_slider .swiper-pagination {
  display: none !important;
}

.social_share{
    position: fixed;
    top: 20%;
    left: auto;
    float: right;
    right: 0;
    bottom: auto;
    z-index: 100020;
    background: none;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    
    @media (max-width: 768px) {
      & {
        top: auto;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        max-width: 100%;
        flex-direction: row;
      }
      
      a[class^="share-network-"]{
        flex: 1;
      }
      
    }
}


iframe{
  max-width: 100%;
}

.geodir-embed-container{
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  
  iframe{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.share-network-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }
  a[class^="share-network-"],
  div[class^="share-network-"]
   {
    flex: none;
    color: #FFFFFF;
    background-color: #333;
    border-radius: 0; 
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0;
    width: 48px;
    height: 48px;
    transition: width .15s ease-in-out;
    
    &:hover{
      width: 64px;
    }
    
    .fah {
      padding: 12px;
      flex: 0 1 auto;
      font-size: 24px;
    }
    span {
      padding: 0 10px;
      flex: 1 1 0%;
      font-weight: 500;
      display:none;
    }
  }

  .footer-kit-digital{
    &.grey{
      background: #E8EAEE;
      color: #0C0C0C;
      font-size: 12px;
    }

    &.black {
      background: #0C0C0C;
      color: #E8EAEE;
      font-size: 12px;
    }

    .text-kit{
      padding: 35px 0 10px 0;
      font-size: 10px;
      font-weight: 600;
    }
  }
</style>
