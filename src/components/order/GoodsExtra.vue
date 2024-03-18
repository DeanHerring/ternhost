<template>
  <li class="services__group-item">
    <div class="services__group-item__name">
      <h3>{{ this.extra.title }}</h3>
    </div>
    <div class="services__group-item__end">
      <div class="service-price">
        <h3>${{ this.extra.price }}</h3>
        <h3 class="discount">${{ this.$getPriceWithDiscount(this.extra.price, this.extra.discount) }}</h3>
      </div>

      <base-switch></base-switch>
    </div>
  </li>
</template>

<script>
import BaseSwitch from '@/components/UI/BaseSwitch.vue';

export default {
  name: 'GoodsExtra',
  props: {
    extra: Object,
  },
  components: {
    BaseSwitch,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.services__group-item {
  @include center-y-between;
  background-color: $white-200;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 0.25rem;
  @media screen and (max-width: 500px) {
    display: block;
  }
  &:first-child {
    margin-top: 0;
  }
  &__name {
    @include center-y;
    h3 {
      @include fluid-type($text-base, $text-base, 500, $blue-200);
      margin-left: 0.75rem;
    }
    .icon {
      width: 1.5rem;
      aspect-ratio: 1 / 1;
      font-size: 1.5rem;
      color: $blue-200;
    }
  }
  &__end {
    @include center-y;
    @media screen and (max-width: 500px) {
      justify-content: space-between;
    }
    .service-price {
      @include center-y;
      h3 {
        @include fluid-type($text-base, $text-base, 500, $gray-200);
        text-decoration: line-through;
        &.discount {
          @include fluid-type($text-base, $text-base, 700, $blue-200);
          text-decoration: none;
        }
        &:last-child {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
