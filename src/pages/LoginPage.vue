<template>
  <tern-login-hero>
    <template #text>
      <h1>Login</h1>
      <h2>Lorem Ipsum is simply</h2>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
      </h3>
    </template>
    <template #form>
      <router-view></router-view>
    </template>
  </tern-login-hero>
  <tern-fast-login></tern-fast-login>
</template>

<script>
import TernLoginHero from '@/components/tern/TernLoginHero.vue';
import TernFastLogin from '@/components/tern/TernFastLogin.vue';

export default {
  name: 'SignupPage',
  components: {
    TernLoginHero,
    TernFastLogin,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

h1 {
  @include fluid-type($text-4xl, $text-4xl, 700, $white-100);
}

h2 {
  @include fluid-type($text-2xl, $text-2xl, $color: $white-100);
  margin: 1rem 0;
}

h3 {
  @include fluid-type($text-sm, $text-sm, 300, $white-100);
  max-width: 18.75rem;
}
</style>
