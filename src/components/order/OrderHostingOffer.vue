<template>
  <div class="plans">
    <tern-offer-durations :durations="this.offerDurations" class="order-hosting"></tern-offer-durations>

    <div class="plans__box">
      <ul class="offers" ref="offers">
        <tern-offer
          v-for="offer in this.offers"
          :key="offer.id"
          :offer="offer"
          :duration="this.getActiveOfferDuration()"
          :callback="this.add"
        ></tern-offer>
      </ul>
    </div>
  </div>
</template>

<script>
import TernOfferDurations from '@/components/tern/TernOfferDurations.vue';
import TernOffer from '@/components/tern/TernOffer.vue';

import { useCartStore } from '@/stores/useCartStore.js';
import { useLoadOffers } from '@/hooks/useLoadOffers.js';
import { offersMixin } from '@/mixins/offers.js';

import { v4 as uuid } from 'uuid';

export default {
  name: 'OrderHostingPlans',
  components: {
    TernOfferDurations,
    TernOffer,
  },
  mixins: [offersMixin],
  data() {
    return {
      offerDurations: [
        { id: 0, value: 1, isActive: false },
        { id: 1, value: 12, isActive: true },
        { id: 2, value: 36, isActive: false },
        { id: 3, value: 48, isActive: false },
      ],
      offers: [],
    };
  },
  mounted() {
    this.offers = useLoadOffers('order-hosting');
  },
  methods: {
    add(offer) {
      const store = useCartStore();

      store.add({ ...offer, duration: this.getActiveOfferDuration(), uuid: uuid() }, { hosting: true });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.plans {
  @include center-col;
  margin-top: 3rem;
  &__box {
    width: 100%;
    margin-top: 1.875rem;
    border-radius: 1.875rem;
    background-color: $white-100;
    padding: 1rem;
    box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
    .offers {
      width: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
