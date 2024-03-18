<template>
  <li class="domains__group-item">
    <header class="domains__group-item__header">
      <h1>Search Your Domain Now</h1>
    </header>
    <div class="domains__group-item__body">
      <order-search-domain-form></order-search-domain-form>

      <footer class="domains__group-item__footer" v-if="!domains.length">
        <p>
          Become the owner of a stylish and memorable domain that will be your digital reflection. Don't miss the
          opportunity to stand out from the crowd – acquire your unique domain right now with a special offer.
        </p>
        <router-link to="/">
          <base-button class="btn-secondary">Next</base-button>
        </router-link>
      </footer>

      <div class="preloader" v-if="isLoading">
        <img :src="assets.PreloaderGif" alt="Preloader" class="preloader__gif" />
      </div>

      <order-domains-catalog :domains="domains"></order-domains-catalog>
    </div>
  </li>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import OrderSearchDomainForm from './OrderSearchDomainForm.vue';
import OrderDomainsCatalog from './OrderDomainsCatalog.vue';

import { useCartStore } from '@/stores/useCartStore.js';
import { useFakeDomains } from '@/hooks/useFakeDomains.js';

import PreloaderGif from '@/assets/gifs/other/preloader.gif';

export default {
  name: 'OrderSearchDomain',
  components: {
    BaseButton,
    OrderSearchDomainForm,
    OrderDomainsCatalog,
  },
  data() {
    return {
      domains: [],
      isLoading: undefined,
      assets: {
        PreloaderGif,
      },
    };
  },
  mounted() {
    this.$emitter.on('_order_-load-domains', (name) => this.loadDomains(name));
  },
  methods: {
    loadDomains(name) {
      this.isLoading = true;

      const domains = useFakeDomains(name);

      if (domains) {
        this.domains = domains;

        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group-item {
  padding: 2.188rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  align-self: flex-start;
  @media screen and (max-width: 500px) {
    padding: 1.25rem;
    border-radius: 1rem;
  }
  &__header {
    h1 {
      @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
    }
  }
  &__body {
    margin-top: 1rem;
    p {
      @include fluid-type($text-sm, $text-base, $color: $gray-200);
      margin-top: 2.5rem;
    }
  }
  &__footer {
    button {
      width: 100%;
      box-shadow: 0 0.25rem 1.25rem 0 rgba(#779341, 0.3);
      margin-top: 1rem;
    }
  }
  .preloader {
    @include center;
    width: 100%;
    height: 28.063rem;
    &__gif {
      width: 100%;
    }
  }
}
</style>
