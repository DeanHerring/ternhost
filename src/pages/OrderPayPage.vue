<template>
  <order-modal></order-modal>

  <app-preloader></app-preloader>

  <order-hero>
    <template #content>
      <div class="order-wrapper">
        <order-pay-overview></order-pay-overview>
        <order-pay-cart></order-pay-cart>
      </div>
    </template>
  </order-hero>

  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import OrderHero from '@/components/order/OrderHero.vue';
import OrderPayOverview from '@/components/order/OrderPayOverview.vue';
import OrderPayCart from '@/components/order/OrderPayCart.vue';
import OrderModal from '@/components/order/OrderModal.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import { useCartStore } from '@/stores/useCartStore.js';
import { usePreloader } from '@/hooks/usePreloader.js';

export default {
  name: 'OrderPayPage',
  components: {
    OrderHero,
    OrderPayOverview,
    OrderPayCart,
    OrderModal,
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
    usePreloader(1);

    // this.store.isEmpty && this.$router.push('/');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.order-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
}
</style>
