<template>
  <div class="service-switch" :class="{ enabled: this.isEnabled }" @click="this.toggleSwitch"></div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    on: Function,
    off: Function,
  },
  data() {
    return {
      isEnabled: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.isEnabled = !this.isEnabled;
      this.isEnabled ? this.on?.() : this.off?.();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.service-switch {
  width: 3.938rem;
  height: 1.875rem;
  border-radius: 3.125rem;
  background-color: $gray-200;
  position: relative;
  margin-left: 0.5rem;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0.188rem;
    left: 0.188rem;
    width: 1.5rem;
    aspect-ratio: 1 / 1;
    background-color: $white-100;
    border-radius: 50%;
  }
  &.enabled {
    background-color: $blue-100;
    &::after {
      left: calc(100% - 0.188rem);
      transform: translateX(-100%);
    }
  }
}
</style>
