<template>
  <v-container>
    <div class="wallet swiper">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <v-card
          class="swiper-slide my_cards mx-auto"
          max-width="344"
          v-for="card in cards"
          :key="card.voucher_code"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ card.title }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ card.amount }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                card.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <!-- <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar> -->
            <v-img
            contain
              height="80"
              width="80"
              :src="card.logo"
            ></v-img>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text @click.stop="dialog = true"
              >REDEEM</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-toolbar color="primary" dark>{{ current.title }}</v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
// import Swiper core and required modules
import Swiper from "swiper";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default {
  name: "RewardsView",
  components: {},

  data: function () {
    return {
      swiper: null,
      dialog: false,
      current: {
        title: "Woolworths",
        logo: "https://cdn0.woolworths.media/content/content/icon-header-logo.png",
        color: "",
        barcode: "",
        amount: "5.00",
        voucher_code: "PRETTY_HUNGRY",
        expiry_date: "31/12/23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      cards: [
        {
          title: "Woolworths",
          logo: "/logos/woolworths_logo.png",
          color: "",
          barcode: "",
          amount: "5.00",
          voucher_code: "PRETTY_HUNGRY",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Coles",
          logo: "/logos/coles_logo.png",
          color: "",
          barcode: "",
          amount: "5.00",
          voucher_code: "PRETTY_TIRED",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Starbucks",
          logo: "/logos/starbucks_logo.png",
          color: "",
          barcode: "",
          amount: "5.00",
          voucher_code: "PRETTY_SLEEPY",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Patagonia",
          logo: "/logos/patagonia_logo.jpg",
          color: "",
          barcode: "",
          amount: "5.00",
          voucher_code: "PRETTY_BORED",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  },
  methods: {
    init() {
      let self = this;
      Swiper.use([Pagination, EffectCoverflow]);

      this.swiper = new Swiper(".wallet", {
        direction: "vertical",
        spaceBetween: -100,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChange: function () {
            let currentIndex = this.activeIndex;

            self.current = self.cards[currentIndex];
            // console.log(self.current);
          },
        },
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
@import url("swiper/css/effect-coverflow");
.swiper {
  padding-top: 50px;
  padding-bottom: 50px;
}

.wallet {
  width: 100%;
}

.my_cards {
  max-height: 210px;
}

.swiper-slide:not(.swiper-slide-active) {
  filter: blur(1px);
}
</style>