<template>
  <header class="box__services-header">
    <h3>More information about the domain service</h3>
    <div class="box__services-header__hide">
      <h3>{{ this.isShow ? 'Hide' : 'Open' }}</h3>

      <font-awesome-icon :icon="this.isShow ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" class="icon">
      </font-awesome-icon>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GoodsExtraHeader',
  props: {
    isShow: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';
.box__services-header {
  @include center-y-between;
  h3 {
    @include fluid-type($text-base, $text-base, 500, $gray-200);
  }
  &__hide {
    @include center-y;
    cursor: pointer;
    .icon {
      color: $gray-200;
      margin-left: 0.25rem;
    }
  }
}
</style>
