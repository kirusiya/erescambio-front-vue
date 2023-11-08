<template>

    <div class="individual-politica container pb-5">

        <v-style>
        #politica_texto{
          color: {{ $content.estilos.bloque_general.color_de_texto }};
          background: {{ $content.estilos.bloque_general.color_de_fondo }};
        }
        #politica_texto a {
          color: {{ $content.estilos.bloque_general.color_de_enlace }};
        }
        #politica_texto h1,
        #politica_texto h2,
        #politica_texto h3,
        #politica_texto h4,
        #politica_texto h5,
        #politica_texto h6 {
          color: {{ $content.estilos.bloque_general.color_de_titulo }};
        }    
        #politica_texto .date-and-author {
          color: {{ $content.estilos.bloque_general.color_de_enlace }}; 
          font-family: {{ $content.estilos.bloque_fonts.fuente_cabecera }};
        }
        </v-style>


        <div id="politica_texto"></div>

        
    </div>

</template>

<script>


export default {
     props: {
        slug: String,
        tipo: String
    },
    data() {
        return {
            
        }
    },
    methods: {
        mostrarLeyes(autor, tipo, lang, url) {

            async function getLeyes() {
                var idioma = "";

                if (lang != "es_ES") idioma = `&l=` + lang;

                let urlFinal = `https://www.erescambio.com/informacion-legal/?i=` + autor + `&t=` + tipo + idioma + `&u=` + url;
                const resp = await fetch(urlFinal)

                return await resp.text();
            }

            getLeyes().then((data) => {
                const collection = document.querySelector("#politica_texto")
                collection.innerHTML = data;
            });

        },
    },
    created() {
        console.log(this.$content)
        this.mostrarLeyes(this.$content.author, this.tipo, this.$content.lang, this.$content.metas.url)
    }
}
</script>

<style lang="scss" scope>
.individual-politica {
    padding-top: 126px;

}
.pbody .individual-politica {
    padding-top: 50px;

}
</style>