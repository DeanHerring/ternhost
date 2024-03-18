<template>
  <div class="basket">
    <template v-if="store.hostings.length">
      <order-pay-goods
        v-for="hosting in store.hostings"
        :key="hosting.id"
        :goods="hosting"
        title="Hosting"
      ></order-pay-goods>
    </template>

    <order-pay-more></order-pay-more>
  </div>
</template>

<script>
import OrderPayGoods from './OrderPayGoods.vue';
import OrderPayMore from './OrderPayMore.vue';

import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderPayOverview',
  components: {
    OrderPayGoods,
    OrderPayMore,
  },
  data() {
    return {
      store: useCartStore(),
    };
  },
};
</script>
