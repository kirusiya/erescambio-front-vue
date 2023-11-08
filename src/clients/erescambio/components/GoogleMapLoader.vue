<template>
  <div>
    <div id="map" class="google-map" ref="googleMap"></div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
    sedes: Array    
  },

  data() {
    return {
      google: null,
      map: null,
      mapOptions: {
                    center: {
                      lat: 0,
                      lng: 0
                    },
                    zoom: 8
                  }
    }
  },
  methods: {

  },
  async mounted() {
    
    const loader = new Loader({
      apiKey: this.apiKey,
      version: "weekly",
      libraries: ["places"]
    })
    
    await loader
    .load()
    .then((google) => {
      
      this.mapOptions.center.lat = parseFloat(this.mapConfig.center.lat);
      this.mapOptions.center.lng = parseFloat(this.mapConfig.center.lng);
      this.mapOptions.zoom = parseFloat(this.mapConfig.zoom); 
       
      var myMap = new google.maps.Map(document.getElementById("map"), this.mapOptions);
      
      var myLatLng = new google.maps.LatLng(parseFloat(this.mapConfig.center.lat), parseFloat(this.mapConfig.center.lng));
      
      new google.maps.Marker({
            position: myLatLng,
            map: myMap
          });	
            
      if( this.sedes.length > 0 ){
        
        this.sedes.forEach((sede) => {
          
          var myLatLngSede = new google.maps.LatLng(parseFloat(sede.lat), parseFloat(sede.lng));
          
          new google.maps.Marker({
                position: myLatLngSede,
                map: myMap
              });	
              
        });
        
        
      }
      
    })
    .catch(e => {
      console.log(e)  
    });
  
  }  
}
</script>
<style>
#map{
  height: 600px;
}
</style>
