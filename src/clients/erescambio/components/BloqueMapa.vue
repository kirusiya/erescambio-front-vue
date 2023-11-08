<template>
  <section 
    v-if="content.mapa"
    class="wrapper-bloque bloque-mapa" :id="id">
    
    <GoogleMapLoader
      :mapConfig="mapConfig"
      apiKey="AIzaSyCFeOF9zk0hFIYuMhmawwGAAsST4d3LtUE"
      :sedes="content.datos.sedes"
    />
    
    
  </section>
</template>

<script>
  import { bloques } from '../mixins/bloques'
  import GoogleMapLoader from './GoogleMapLoader'

  export default {
    mixins: [bloques],
    components: {
      GoogleMapLoader
    },
    computed: {
    mapConfig () {
        return {
          zoom: this.content.zoom,
          center: { lat: this.content.datos.lat, lng: this.content.datos.lng }
        }
      },
    },
    methods: {
    },
    created() {
      
      // var markerBounds = new google.maps.LatLngBounds();
      // var myLatLng;
      // 
      // myLatLng = new google.maps.LatLng(-25.344, 131.031);	
      // 
      // var mapCanvas = document.getElementById("mapa_" + data.bloque.ID); 
      // 
      // new google.maps.Marker({
      //                         position: myLatLng,
      //                         map: mapCanvas
      //                       });	
      // 
      // markerBounds.extend(myLatLng);	   
      // 
      // google.maps.event.addListener(mapCanvas, 'zoom_changed', function() {
      //   zoomChangeBoundsListener = 
      //       google.maps.event.addListener(mapCanvas, 'bounds_changed', function(event) {
      //           if (this.getZoom() > 16 && this.initialZoom == true) {
      //               this.setZoom(16); 
      //               this.initialZoom = false; 
      //           }
      //       google.maps.event.removeListener(zoomChangeBoundsListener);
      //   });
      // });
      // 
      // mapCanvas.initialZoom = true; 
      // mapCanvas.fitBounds(markerBounds);
      
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .mapa {
    overflow: hidden;
    line-height: 0;

    @media (max-width: 992px) {
      & {
        height: 40vh;
        position: relative;
      }
    }
  }
  @media (max-width: 992px) {
    /deep/ .mapa img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 40vh;
      width: auto !important;
      max-width: initial;
    }
  }
</style>
