<template>
    <div class="wrapper presentation-page">
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="title text-center">Locations</h2>
                        <h5 class="text-center">Together with its main clubhouse and courts, Glenlea utilise several alternative venues for matches to accomodate the number of teams.</h5>
                    </div>
                </div>
            </div>
        </div>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-8 col-sm-12 ml-auto mr-auto">
                          <h5 class="title">Main clubhouse & courts, Ferguson St, Novar Gardens.</h5>
                          <gmap-map
                                  class="map"
                                  :center="center"
                                  :zoom="16"
                                  :options="options"
                                  map-type-id="terrain"
                                  >
                              <gmap-marker 
                                  :position="center"
                              >
                              </gmap-marker>
                          </gmap-map>
                        </div>
                        <div class="col-xl-6 col-md-8 col-sm-12 ml-auto mr-auto">
                          <h5 class="title">Aroona, Aroona Avenue, Glenelg North</h5>
                          <gmap-map
                                  class="map"
                                  :center="centerAroona"
                                  :zoom="16"
                                  :options="options"
                                  map-type-id="terrain"
                                  >
                              <gmap-marker 
                                  :position="markerAroona.position"
                                  :label="markerAroona.label"
                              >
                              </gmap-marker>
                          </gmap-map>
                        </div>
                        <div class="col-xl-6 col-md-8 col-sm-12 ml-auto mr-auto">
                          <h5 class="title">Lockleys Tennis Club</h5>
                          <gmap-map
                                  class="map"
                                  title="Lockleys+Tennis+Club"
                                  :center="centerLockleys"
                                  :zoom="16"
                                  :options="options"
                                  map-type-id="terrain"
                                  >
                              <gmap-marker 
                                  :position="markerLockleys.position"
                                  :label="markerLockleys.label"
                              >
                              </gmap-marker>
                          </gmap-map>
                        </div>
                    </div>
                </div>
            </div>





    </div>

</template>

<script>
import {API_KEY} from '@/constants'
import Vue from 'vue'
  import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
  Vue.use(VueGoogleMaps, {
    load: {
      key: API_KEY
    }
  });

export default {
    data() {
        return { 
            center: {lat: -34.974526, lng: 138.5328693},
            markers: [{
              position: {lat: -34.974526, lng: 138.5328693},
              label: {
                text: "Glenlea Tennis Club",
                color: "#C70E20",
                fontWeight: "bold"
              }
            }],
            options: {
                styles: []
            },
            centerAroona: {lat: -34.967385908200164, lng: 138.52361109778045},
            markerAroona: {
              position: {lat: -34.967385908200164, lng: 138.52361109778045},
              label: {
                text: "Glenlea Alternative Venue - Aroona",
                color: "#C70E20",
                fontWeight: "bold"
              }
            },
            centerLockleys: {lat: -34.92905788805504, lng: 138.52280742964905},
            markerLockleys: {
              position: {lat: -34.92905788805504, lng: 138.52280742964905},
              label: {
                text: "Glenlea Alternative Venue - Lockleys",
                color: "#C70E20",
                fontWeight: "bold"
              }
            },
        }
    }
}
</script>

<style scoped lang="scss">
    .map {
        width: 100%;
        margin: 0 auto;
        height: 400px;
        padding: 0;
    }

</style>