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
                            <img class="rounded img-raised" v-lazy="'img/background-01.png'" alt="">
                        </div>
                    </div>
                        <div class="col-md-12 ml-auto mr-auto">
                            <h5>
                                Glenlea tennis club, a tennis club located in Adelaide, South Australia and is a member of the <a href="https://web.archive.org/web/20200305020437/http://gdta.net.au/">Glenelg District Tennis Association (GDTA)</a>.
                                Located on <a href="#map">Ferguson Street, Novar Gardens</a>.
                                <br>
                                Competitively, the club field a large number of tennis club teams for both juniors and seniors over the summer and  winter seasons. These playing in the GDTA and Tennis SA competitions. In addition, also run Wednesday Social Night tennis for all standards of players during school terms.

                                Glenlea is fortunate to have <span style="font-weight: 600;">Todd Langman</span> as our club coach, who is available for private lessons as well as running our junior practices on Wednesday afternoons. Todd is a <span style="font-weight: 600;">Tennis Australia</span> Level 2 Club Professional Coach who can cater for players of all abilities.

                                The major focus of our tennis club is to create a friendly, social atmosphere for players of all standards and regularly host social functions such as quiz nights, dinners and weekly BBQ’s back at the club. Glenlea also heads up to Melrose (Flinders Ranges) each year for the Easter tournament.

                                The club has great club rooms with bar facilities (beer, wine, cider and spirits) and kitchen. <span style="font-weight: 600;">EFTPOS</span> is available making it easier to purchase from the bar, pay for competition fees or club merchandise.
                            </h5>
                        </div>
                </div>
            </div>
        </div>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h3 class="title text-center">Club Mission Statement</h3>
                            <p>
                    Glenlea Tennis Club is a welcoming and inclusive sporting environment that ensures everyone; participants, coaches, officials, administrators, spectators or any other person involved in, or visiting the club, is made to feel welcome, included, and valued, regardless of age, ability, disability, income, education, sexual orientation, race or religion or personal attributes. 

                            </p>
                            <n-button
                                href="https://glenleatennisclub.com.au/files/Constitution-of-Glenlea-Tennis-Club.pdf" target="_blank"
                                type="primary">Glenlea Tennis Club Constitution</n-button>
                        </div>
                    </div>
                </div>
            </div>

        <div class="section" data-background-color="dark-green">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="text-center title">Sponsors
                        </h2>
                        <div class="space-50"></div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="section-cols section-sponsors">
                    <div class="row">
                        <div 
                            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-auto"
                            v-for="sponsor in sponsors"
                            :key="sponsor.id"
                            >
                            <div class="image-container">
                                <a
                                :href="sponsor.url" target="_blank"
                                >
                                    <img
                                        class="rounded img-raised"
                                        :src="sponsor.image"
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import { Button, Card, InfoSection } from '@/components';
  import { Carousel, CarouselItem, Tooltip } from 'element-ui'

export default {
    name: 'presentation',
    components: {
      [Button.name]: Button,
      [Tooltip.name]: Tooltip
    },
    data() {
        return {
        sponsors: [
          {
            id: 1,
            image: "/img/Logo-MC-GLENELG.jpg",
            url: "https://www.mortgagechoice.com.au/keith.caine/"
          },
          {
            id: 2,
            image: require("../static/img/smallacombe_building_logo.png"),
            url: "https://sbgroup.net.au/services/"
            },
          { 
            id: 3,
            image: require("../static/img/adelaide-lending-services.jpg"),
            url: "http://www.adelaidelendingservices.com.au/"
          },
          { 
            id: 4,
            image: require("../static/img/rw-logo-2017.svg"),
            url: "https://raywhiteglenelg.com.au/"
          },
          { 
            id: 5,
            image: require("../static/img/rje-global-blue.png"),
            url: "https://rjeglobal.com/"
          }

        ]
        }
    }
  }
</script>

<style scoped lang="scss">
    .github-buttons {
        display: flex;
        align-content: center;
    }

    .section-sponsors {
        img {
            margin: 20px 0px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
    }
</style>
