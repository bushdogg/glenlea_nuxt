<template>
      <div class="wrapper presentation-page">
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                      <h2 class="title text-center">Welcome to the Glenlea Tennis Club</h2>
                    </div>
                    <div class="col-md-12 ml-auto mr-auto pb-5">
                      <div class="hero-images">
                          <img class="rounded img-raised" v-lazy="'img/contactus-header-image.jpg'" alt="">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <!--     *********    BLOG CARDS     *********      -->
        <committee-card></committee-card>
    </div>
</template>

<script>
  import { CommitteeCard, Button } from '@/components';

export default {
  watchQuery: ['contacts'],
  components: {
    CommitteeCard,
    [Button.name]: Button
  }
}
</script>