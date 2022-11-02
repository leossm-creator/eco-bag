<template>
  <v-container>
    <v-row>
      <div class="wallet swiper">
        <div class="swiper-wrapper">
          <!-- Slides -->
          <v-card
            class="swiper-slide my_cards mx-auto"
            max-width="344"
            v-for="card in cards"
            :key="card.voucher_code"
            :color="card.color"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline">{{ card.title }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ card.amount }} $
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  card.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-img contain height="100" width="80" :src="card.logo"></v-img>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded text @click.stop="dialog = true">Redeem</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-row>
    <v-row>
      <v-col>
        <v-list subheader>
          <v-subheader>Partners</v-subheader>

          <div class="voucherList">
            <v-list-item v-for="card in cards" :key="card.title">
              <v-list-item-avatar>
                <v-img :alt="`${card.title} logo`" :src="card.logo"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="card.title"></v-list-item-title>
              </v-list-item-content>
              <v-btn depressed @click.stop="dialog2 = true">Redeem</v-btn>
            </v-list-item>
          </div>
        </v-list>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-toolbar :color="current.color" dark>{{ current.title }}</v-toolbar>
        <!-- <v-card-text>
          <div class="pa-4">Hello world!</div>
        </v-card-text> -->
        <v-img src="../assets/img/barcodeImage.png"></v-img>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" max-width="290">
      <v-card>
        <v-card-title class="">Top up</v-card-title>
        <v-card-text>
          <v-card
            class="card_small mx-auto"
            max-width="250"
            :color="current.color"
            dark
          >
            <v-row>
              <v-col cols="6">
                <v-img
                  contain
                  height="100"
                  width="80"
                  :src="current.logo"
                ></v-img>
              </v-col>
              <v-col
                cols="6"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div class="font-weight-medium text-h6">$ {{ row }}</div>
              </v-col>
            </v-row>
          </v-card>

          <v-chip-group
            v-model="row"
            mandatory
            active-class="green--text text--lighten-1"
            style="margin-top: 15px"
          >
            <v-chip value="3">$ 3</v-chip>
            <v-chip value="5">$ 5</v-chip>
            <v-chip value="10">$ 10</v-chip>
          </v-chip-group>

          <v-card class="mx-auto mt-3" max-width="400" elevation="0">
            <p>
              Purchase <span class="numV text-subtitle-1">${{ row }}</span> voucher for
              Woolworths using <span class="numP font-weight-medium text-body-1">{{ getP }}</span> points.
            </p>
          </v-card>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialog2 = false">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="topUp"> Top Up </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
// import Swiper core and required modules
import Swiper, { EffectCards } from "swiper";
import { Pagination } from "swiper";

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
      row: null,
      points: 20,
      swiper: null,
      dialog: false,
      dialog2: false,
      current: {
        title: "Woolworths",
        logo: "https://cdn0.woolworths.media/content/content/icon-header-logo.png",
        color: "#60AB31",
        amount: "5.00",
        voucher_code: "PRETTY_HUNGRY",
        expiry_date: "31/12/23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      cards: [
        {
          title: "Woolworths",
          logo: "/logos/woolworths_logo.png",
          color: "#60AB31",
          amount: "4.25",
          voucher_code: "PRETTY_HUNGRY",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Coles",
          logo: "/logos/coles_logo.png",
          color: "#e72024",
          amount: "3.10",
          voucher_code: "PRETTY_TIRED",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Starbucks",
          logo: "/logos/starbucks_logo.png",
          color: "#006341",
          amount: "2.00",
          voucher_code: "PRETTY_SLEEPY",
          expiry_date: "31/12/23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Patagonia",
          logo: "/logos/patagonia_logo.jpg",
          color: "#382075",
          amount: "15.00",
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
      Swiper.use([Pagination, EffectCards]);

      this.swiper = new Swiper(".wallet", {
        effect: "cards",
        grabCursor: true,
        cardsEffect: {
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChange: function () {
            let currentIndex = this.activeIndex;

            self.current = self.cards[currentIndex];
          },
        },
      });
    },
    topUp() {
      this.dialog2 = false;
      this.cards[0].amount = 7.25;
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    getP() {
      if (this.row == 3) {
        return 30;
      } else if (this.row == 5) {
        return 50;
      } else if (this.row == 10) {
        return 80;
      } else {
        return 30;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("swiper/css/effect-creative");
.swiper {
  padding-top: 50px;
  padding-bottom: 50px;
}

.wallet {
  width: 100%;
  padding: 30px;
}

.my_cards {
  max-height: 180px;
}

.voucherList {
  height: fit-content;
  max-height: 300px;
  overflow: scroll;
}

.swiper-slide:not(.swiper-slide-active) {
  filter: blur(1px);
}

.card_small {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.numV {
  color: #31ab50;
}

.numP {
  color: #31ab50;
}
</style>