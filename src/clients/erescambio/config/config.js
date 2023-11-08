import axios from 'axios'
import { fonts } from '../assets/fonts/fonts'



let urlBase = 'https://www.erescambio.com/'

const config = {
  title: 'Erescambio',
  urlBase,
  apis: {
    default: 'https://www.erescambio.com/wp-json/wp/v2',
  },
  metaInfo(content) {
    let metas = {
      htmlAttrs: {
        lang: 'es',
        amp: true
      },
      link: [
        {
          rel: "canonical",
          href: content.metas.canonical
        },
        {
          rel: 'icon',
          href: content.metas.favicon
        },
        {
          rel: 'preload',
          as: 'style',
          href: '/fontawesome/css/all.min.css',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
      ],
      script: [],
      noscript: [],
      style: []
    }

    metas.link.push({
      rel: 'preload',
      href: content.logo.imagen_perfil,
      as: 'image'
    })

    /* Insert preload LCP element to header (slider in this case) */

    content.acf.bloques.map(bl => {
      if (bl.bloque.post_type == 'bloque_sliders') {
        content.bloques_extended[bl.bloque.ID].cabeceras.forEach(c => {
          metas.link.push({
            rel: 'preload',
            href: c.imagen_desktop,  
            as: 'image'
          })
          if (c.movil.imagen_responsive != '') {
            metas.link.push({
              rel: 'preload',
              href: c.imagen_movil, 
              as: 'image'
            })
          }
        })
      }
    })

    /* Insert fonts */

    /* Imported fonts above */
    let fuente_body = content.estilos.bloque_fonts.fuente_body;
    fuente_body = fuente_body.substr(0, fuente_body.indexOf(',')); 
    fuente_body = fuente_body.replaceAll("'","");
    let fuente_cabecera = content.estilos.bloque_fonts.fuente_cabecera;
    fuente_cabecera = fuente_cabecera.substr(0, fuente_cabecera.indexOf(',')); 
    fuente_cabecera = fuente_cabecera.replaceAll("'","");

    let fontFace = ''

    
    fonts.forEach(f => {
      
      
      
      if (f.name == fuente_body || f.name == fuente_cabecera){
        f.types.forEach(t => {
          let src = ''
          t.urls.forEach(ft => {
            metas.link.push({
              rel: 'preload',
              as: 'font',
              href: "/" + ft.url,   
              onload:"this.onload=null;this.rel='font'",
              crossorigin: true
            })
            src = src + `${src == '' ? '': ','} url(/${ft.url}) format('${ft.format}')`
          })
          
          fontFace = fontFace + `
            @font-face {
              font-family: '${f.name}'; 
              font-style: ${t.style};
              font-display: ${t.display};
              font-weight: ${t.weight};
              src: ${src};
              tet: '12'
            }
          `
        })
      }
    })
    
    metas.style.push({
      cssText: fontFace
    })
    
    metas.link.push({
      rel: 'preload',
      as: 'font',
      href: '/fontawesome/webfonts/fa-brands-400.woff2',
      onload:"this.onload=null;this.rel='font'",
      crossorigin: true
    })
    metas.link.push({
      rel: 'preload',
      as: 'font',
      href: '/fontawesome/webfonts/fa-regular-400.woff2',
      onload:"this.onload=null;this.rel='font'",
      crossorigin: true
    })
    metas.link.push({
      rel: 'preload',
      as: 'font',
      href: '/fontawesome/webfonts/fa-solid-900.woff2',
      onload:"this.onload=null;this.rel='font'",
      crossorigin: true
    })
    /*
    if (content.metas.index && content.metas.follow) {
      metas.meta.push({
        name: 'ROBOTS', content: `${content.metas.follow}, ${content.metas.index}`
      })
    }
    */
    if ( content.redes_sociales ){
     // metas.script.push({ type: 'text/javascript', src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a2bdc795963e363', async: true, body: true, defer: true});
    }
    
    if (content.metas.tag_manager_id) { 
      metas.script.push({
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${content.metas.tag_manager_id}');`  
      })
    }
    
    
    if (content.metas.GOOGLE_ANALYTICS) { 
    
      metas.script.push({
        src: `https://www.googletagmanager.com/gtag/js?id=${content.metas.GOOGLE_ANALYTICS}`,
        async: 'true'
      })
      
      metas.script.push({
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());      
        gtag('config', '${content.metas.GOOGLE_ANALYTICS}');`  
      })
    
    }
    
    if (content.metas.facebook_pixel_id) {
      metas.script.push({
        innerHTML: `setTimeout(function(){
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${content.metas.facebook_pixel_id}'); // Insert your pixel ID here.
        fbq('track', 'PageView');
        }, 3500);`
      })
      metas.noscript.push({
        innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${content.metas.facebook_pixel_id}&ev=PageView&noscript=1" />`
      })
    }
    
    
    return metas
  }
}

let link_pre = document.createElement('link')
link_pre.rel = 'preconnect'
link_pre.href = urlBase

let link_dns = document.createElement('link')
link_dns.rel = 'dns-prefetch'
link_dns.href = urlBase

/* let link_grid = document.createElement('link')
link_grid.rel = 'preload'
link_grid.href = 'fontawesome/css/all.min.css'
link_grid.as = 'style'
link_grid.onload = () => {link_grid.onload=null;link_grid.rel='stylesheet'}
document.querySelector('head').appendChild(link_grid) */


document.querySelector('head').appendChild(link_pre)
document.querySelector('head').appendChild(link_dns)


var urlParams = new URLSearchParams(window.location.search);

const getIDs = (domain) => {
  
  const host = domain 
  
  return axios.get(`${config.apis.default}/ztudio_webs_ids/?web=${host}`);
  
}

const getContent = (id_web) => {
  
  let pagina = '';
  
  var currentLocation = window.location;
  // this.slug = currentLocation.pathname    
  // if( this.slug && this.slug != "/"  ) this.individual = true
  
  if( currentLocation.pathname != "/" ){
    
    return axios.get(`${config.apis.default}/ztudio_webs_slug/${id_web}/${currentLocation.pathname.replaceAll('/','')}`);
    
  } else if ( urlParams.has('i') ){
    
    pagina = urlParams.get('i') + "?p=" + id_web; 
    return axios.get(`${config.apis.default}/ztudio_webs/${pagina}`);      
    
  } else {
    
    pagina = id_web;
    return axios.get(`${config.apis.default}/ztudio_webs/${pagina}`);   
    
  }
  
  // console.log("entra1")
  // const instance = axios.create();
  // // instance.defaults.headers = {
  // //   'Cache-Control': 'no-cache',
  // //   'Pragma': 'no-cache',
  // //   'Expires': '0', 
  // // };
  // 
  // return instance.request({
  //   url: `${config.apis.default}/ztudio_webs/${pagina}`,
  //   method: 'get'
  // });  
  
}

const getWeb = (url) => {
  return axios.get(`${config.apis.default}/ztudio_web_final/?web=${url}`);
}

export { config, getContent, getIDs, getWeb } 
