<template>
  <router-link to="/order/domain">
    <div class="box add-new-product">
      <h1><font-awesome-icon icon="fa-solid fa-plus" class="icon"></font-awesome-icon> Add New Product</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'OrderPayMore',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.box {
  padding: 2rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  box-shadow: 0 0.25rem 2rem 0 rgba($black-100, 0.08);
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
  &.add-new-product {
    text-align: center;
    h1 {
      @include fluid-type($text-xl, $text-2xl, 600, $blue-200);
    }
  }
}
</style>
