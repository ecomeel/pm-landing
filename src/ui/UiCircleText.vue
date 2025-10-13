<script lang="ts" setup>
import { LINK } from '@/constants'

defineOptions({ name: "UiCircleText" })
</script>

<template>
  <div class="circle-text">
    <img
      alt="text"
      class="circle-text__circle"
      src="@/assets/images/circle-text.svg"
    >
    <a
      class="circle-text__text"
      :href="LINK.telegram"
      target="_blank"
    >
      <span>Хочу</span>
      <span>констультацию</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.circle-text {
  width: 200px;
  aspect-ratio: 1/1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    animation: spin 10s linear infinite;
  }

  &__text {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    letter-spacing: .03em;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    text-transform: uppercase;

    span {
      display: block;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    width: 150px;

    &__text {
      font-size: 11px;
    }
  }

  @media (max-width: 549px) {
    width: 35vw;

    &__text {
      font-size: 2.57vw;
    }
  }
}
</style>
