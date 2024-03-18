<template>
  <div class="box">
    <header class="box__header">
      <div class="box__header-title">
        <h1>Hosting</h1>
        <span>{{ this.goods.title }}</span>
      </div>
      <div class="box__header-clear" @click="this.remove">
        <font-awesome-icon icon="fa-solid fa-trash-can" class="icon"></font-awesome-icon>
      </div>
    </header>

    <base-select :onSelect="onSelect" class="select">
      <template #intro>
        <base-select-intro>
          <h3 v-if="this.activeOffer">
            {{ this.activeOffer.duration }} months / ${{ this.activeOffer.price }}
            <span>${{ this.$getPriceWithDiscount(this.activeOffer.price, this.activeOffer.discount) }}</span>
          </h3>
          <h3 v-else>Select a duration</h3>
        </base-select-intro>
      </template>

      <template #body>
        <base-select-option v-for="value in this.goods.prices" :key="value.id" :value="value">
          <h3>
            {{ value.duration }} months / ${{ value.price }}
            <span>${{ this.$getPriceWithDiscount(value.price, value.discount) }}</span>
          </h3>
        </base-select-option>
      </template>
    </base-select>

    <div class="box__services">
      <goods-extra-header :isShow="this.isExtraShow" @click="this.isExtraShow = !this.isExtraShow"></goods-extra-header>

      <div class="services" v-if="this.isExtraShow">
        <ul class="services__group">
          <goods-extra v-for="extra in this.goods.extra" :key="extra.id" :extra="extra"></goods-extra>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/UI/BaseSelect.vue';
import BaseSelectIntro from '@/components/UI/BaseSelectIntro.vue';
import BaseSelectOption from '@/components/UI/BaseSelectOption.vue';

import GoodsExtra from './GoodsExtra.vue';
import GoodsExtraHeader from './GoodsExtraHeader.vue';

import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderPayGoods',
  props: {
    goods: Object,
  },
  components: {
    BaseSelect,
    BaseSelectIntro,
    BaseSelectOption,
    GoodsExtra,
    GoodsExtraHeader,
  },
  data() {
    return {
      store: useCartStore(),
      activeOffer: this.getActiveOffer(),
      isExtraShow: false,
    };
  },
  methods: {
    onSelect(data) {
      this.activeOffer = data;

      this.store.updateEntity(this.goods.uid, this.goods, { hosting: true });
    },
    getActiveOffer() {
      return this.goods.prices.filter((price) => price.duration === this.goods.duration)[0];
    },
    remove() {
      this.store.remove(this.goods.uuid, { hosting: true });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.select {
  margin: 1rem 0;
}

h3 {
  @include fluid-type($text-base, $text-base, 700, $gray-200);
  span {
    color: $blue-200;
  }
}

.box {
  padding: 2rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  box-shadow: 0 0.25rem 2rem 0 rgba($black-100, 0.08);
  margin: 1rem 0;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
  &:first-child {
    margin-top: 0;
  }
  &__header {
    @include center-y-between;
    &-title {
      @include center-y;
      h1 {
        @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
      }
      span {
        @include fluid-type($text-xs, $text-xs, 700, $white-100);
        padding: 0.33rem 0.5rem;
        border-radius: 0.25rem;
        background-color: $blue-200;
        margin-left: 0.75rem;
      }
    }
    &-clear {
      @include center;
      width: 3rem;
      aspect-ratio: 1 / 1;
      border-radius: 0.25rem;
      background-color: $white-200;
      cursor: pointer;
      .icon {
        color: $blue-200;
      }
    }
  }
  &__services {
    .services {
      margin-top: 1rem;
    }
  }
}
</style>
