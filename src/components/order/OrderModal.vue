<template>
  <section class="modal" ref="overlay">
    <div class="modal__body" ref="body">
      <header class="modal__body-header">
        <h1>Do you want to cancel your order?</h1>
        <h3>Selected services and parameters are not saved</h3>
      </header>

      <div class="modal__body-button">
        <base-button class="btn-secondary" @click="this.toggle">Return to Order</base-button>
        <base-button class="btn-white">Cancel The Order</base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'OrderModal',
  components: {
    BaseButton,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.$emitter.on('_order_-show-modal', this.toggle);
  },
  methods: {
    toggle() {
      const tl = gsap.timeline();

      !this.isShow
        ? tl
            .to(this.$refs.overlay, {
              duration: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
            })
            .to(this.$refs.body, {
              duration: 0,
              opacity: 0,
              y: '-25%',
              display: 'none',
            })
            .to(this.$refs.overlay, {
              duration: 0.25,
              opacity: 1,
            })
            .to(this.$refs.body, {
              duration: 0.25,
              y: '0%',
              display: 'block',
              opacity: 1,
            })
        : tl
            .to(this.$refs.body, {
              duration: 0.25,
              y: '-25%',
              opacity: 0,
            })
            .to(this.$refs.overlay, {
              duration: 0.25,
              opacity: 0,
            })
            .to(this.$refs.body, {
              duration: 0,
              display: 'none',
            })
            .to(this.$refs.overlay, {
              duration: 0,
              display: 'none',
            });

      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($blue-200, 0.3);
  z-index: 9999;
  display: none;
  &__body {
    width: 666px;
    max-width: 90%;
    background-color: $white-100;
    border-radius: 1.875rem;
    padding: 2rem;
    text-align: center;
    &-header {
      h1 {
        @include fluid-type($text-2xl, $text-3xl, 700, $blue-200);
      }
      h3 {
        @include fluid-type($text-xl, $text-xl, 500, rgba($blue-200, 0.5));
        margin-top: 1rem;
      }
    }
    &-button {
      display: flex;
      flex-direction: column;
      margin-top: 6.25rem;
      button {
        width: 100%;
        &:last-child {
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
