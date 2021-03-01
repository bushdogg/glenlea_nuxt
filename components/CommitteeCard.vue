<template>
        <div class="cards">
            <div class="container">
                <div class="title">
                    <h3 class="title">Committee Details</h3>
                </div>
                <div class="row">
                    <div 
                      v-for="c in committee.data"
                      :key="c.id"
                      class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <card
                        class="bg-primary text-white">
                          <h4 class="card-title text-white">
                              {{ c.name }}
                          </h4>
                          <h5 class="card-description">
                            {{ c.title }}
                            <hr style="border: 2px solid white;">
                              <a v-if="c.phone"
                                :href="'tel:' + c.phone"
                              >
                                <p class="text-white">
                                {{ c.phone }}
                                </p>
                              </a>
                              <a v-if="c.email"
                                :href="'mailto:' + c.email"
                              >
                                <p class="text-white">
                                {{ c.email }}
                                </p>
                              </a>
                          </h5>
                      </card>
                   </div>
                </div>
            </div>
        </div>

</template>

<script>
  import { Card } from '@/components';

export default {
  components: {
    Card
  },
  // Also define data function and define posts property
  data() {
    return {
      committee: []
    }
  },
  //fetch
  async fetch() {
    this.committee = await fetch(
      this.$axios.defaults.baseURL + '/committee/read.php'
    ).then(res => res.json())
  },
  // call fetch only on client-side
  fetchOnServer: false  
}
</script>