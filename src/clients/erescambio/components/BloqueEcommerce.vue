<template>
  <section class="wrapper-bloque wrapper-bloque-ecommerce" :id="id">
    <v-style :all="{data, content}">
      .bloque-{{data.bloque.ID}} .btn {
        color: {{ content.estilos.color_de_fondo }} !important;
        background: {{ content.estilos.color_de_titulo }} !important;
        border-color: {{ content.estilos.color_de_titulo }} !important;
      }
      .bloque-{{data.bloque.ID}} .fa-circle-notch{
        color: {{ content.estilos.color_de_titulo }} !important;
      }
    </v-style>    
    <div class="bloque-ecommerce" :class="`bloque-${data.bloque.ID}`">
      <div class="container-fluid text-center">
        <h2
          class="bloque-title bloque-title-small"
          v-if="data.titulo_bloque"
          v-html="data.titulo_bloque"
        />
        <div class="row">
          <div class="col-xs-12 col-md-12 text-center">
            
            <div v-html="content.descripcion" />
            
            
            
            <div 
            v-if="content.ecommerce.plataforma_pago == 'paypal'"
            class="centerTop"
            v-html="formulario_paypal" />
            
            
            <stripe-checkout
              v-if="sessionId != ''"
              ref="checkoutRef"
              :pk="publishableKey"
              :session-id="sessionId"
            />
            
            <i 
            v-if="loading"
            class="centerTop fas fa-circle-notch fa-spin"></i>  
            
            
            
            <div 
            class="centerTop"
            v-if="content.precio_fijo && !loading">
            
              <button 
              v-if="content.ecommerce.plataforma_pago == 'stripe' && sessionId == ''"
              @click="payDirectStripe" 
              class="btn">Pagar con tarjeta</button> 
              
            </div>
            
            <div 
            v-else>
              
              <div
              class="centerTop"
              v-if="!loading">
              
                <input 
                class="importe"
                v-model="precio" 
                aria-label="Pagar con tarjeta"
                placeholder="Importe">
                
                <button 
                @click="pagar" 
                class="btn">Pagar con tarjeta</button>
              
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'
  
  import { StripeCheckout   } from '@vue-stripe/vue-stripe';
  import axios from 'axios'

  export default {
    mixins: [bloques],
    components: {
      StripeCheckout,
    },
    data () {
      
      this.publishableKey = '';
      
      return { 
        formulario_paypal: '',
        precio: '',
        loading: false,
        sessionId: '', 
      };     
      
    },
    methods: {
      pagar (){
        
        if( this.precio != '' ){
          
          if( this.content.ecommerce.plataforma_pago == 'stripe' ){
            
            this.loading = true;            
            this.getSessionId();
            
          } else {
            
            this.loading = true;
            this.getSessionPaypal();
            
          } 
          
        }
        
      },
      submit () {
        this.$refs.checkoutRef.redirectToCheckout();
      },
      getSessionId(){
        
        const parentThis = this;
        
        var config = {
          method: 'post',
          url: parentThis.$config.apis.default + '/ztudio_webs/stripe/sessionId', 
          data : {
            id: parentThis.data.bloque.ID, 
            url: parentThis.content.ecommerce.url,
            datos: parentThis.content.ecommerce,
            precio: parentThis.precio       
          }
        };
        
        axios(config) 
        .then(function (response) {
          
          parentThis.publishableKey = parentThis.content.ecommerce.id_cuenta; 
          parentThis.sessionId = response.data.id;
          
          parentThis.$nextTick(() => { 
            parentThis.submit(); 
          })
          
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      getSessionPaypal(){
        
        const parentThis = this;
        
        var config = {
          method: 'post', 
          url: parentThis.$config.apis.default + '/ztudio_webs/paypal/form', 
          data : {
            id: parentThis.data.bloque.ID, 
            url: parentThis.content.ecommerce.url,
            datos: parentThis.content.ecommerce,
            precio: parentThis.precio       
          }
        };
        
        axios(config) 
        .then(function (response) {
          
          parentThis.$nextTick(() => { 
            parentThis.formulario_paypal = response.data;
            
            setTimeout( () => {
              document.querySelector(".payPaypal").click();               
            },100);
          });
          
          
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      payDirectStripe(){
        
        this.loading = true;
        
        this.precio = this.content.ecommerce.precio;
        
        this.getSessionId();
        
      }
    },
    mounted() {
      
      if( this.content.ecommerce.plataforma_pago == 'paypal' && this.content.precio_fijo ){
        this.formulario_paypal = this.content.ecommerce.formulario
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  
  .importe{
    border: 1px solid #eee;
    border-radius: 4px;
    height: 38px;
    padding: 5px 10px;
    text-align: center;
    max-width: 148px;
    font-size: 14px;
    display: block;
    text-align: center;
    margin: 25px auto 25px auto;
  }
  .fa-circle-notch{
    font-size: 30px;
  }
  .centerTop{
    margin-top: 30px;
  }
</style>
