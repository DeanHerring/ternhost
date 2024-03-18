<template>
  <app-preloader></app-preloader>

  <order-hero>
    <template #hero-text>
      <h1>A Great Domain Needs A Great Website</h1>
      <h3>Incorporate website hosting with your domain and showcase your vision to the world</h3>
    </template>

    <template #content>
      <order-hosting-offer></order-hosting-offer>
    </template>
  </order-hero>

  <order-skip>
    <template #hero-skip>
      <h2>Alternatively, you have the option to bypass this step and generate <br />a domain at a later time.</h2>

      <router-link to="/order/pay" v-if="!store.isEmpty">I'll select my hosting at a later time ></router-link>
      <router-link to="/" v-else>I'll select my hosting at a later time ></router-link>
    </template>
  </order-skip>

  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import OrderHero from '@/components/order/OrderHero.vue';
import OrderSkip from '@/components/order/OrderSkip.vue';
import OrderHostingOffer from '@/components/order/OrderHostingOffer.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import { useCartStore } from '@/stores/useCartStore.js';
import { usePreloader } from '@/hooks/usePreloader.js';

export default {
  name: 'OrderHostingPage',
  components: {
    OrderHero,
    OrderSkip,
    OrderHostingOffer,
    AppFooter,
    AppTerms,
    AppPreloader,
  },
  data() {
    return {
      store: useCartStore(),
    };
  },
  mounted() {
    usePreloader();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero-text {
  margin-top: 3.125rem;
  text-align: center;
  h1 {
    @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
  }
  h3 {
    @include fluid-type($text-base, $text-2xl, 500, $white-100);
    margin-top: 1.875rem;
  }
}

.skip {
  padding: 5rem 0;
  .container {
    text-align: center;
    h2 {
      @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
    }
    a {
      @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
      display: block;
      margin-top: 0.938rem;
    }
  }
}
</style>
