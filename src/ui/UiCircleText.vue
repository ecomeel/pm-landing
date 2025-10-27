<script lang="ts" setup>
import { computed } from 'vue'
import { ANKETA_LINK } from '@/constants'
import circleDark from "@/assets/images/circle-text.svg"
import circleLight from "@/assets/images/circle-text-white.svg"

defineOptions({ name: "UiCircleText" })

interface Props {
  showArrow?: boolean;
  color?: "black" | "white";
}

const props = withDefaults(defineProps<Props>(), {
  showArrow: true,
  color: "black",
})

const circleSrc = computed(() => props.color === "black" ? circleDark : circleLight)
</script>

<template>
  <div class="circle-text__outer" :class="{'circle-text__with-arrow': showArrow}">
    <div v-if="showArrow" class="circle-text__arrow-wrapper">
      <img
        alt="arrow"
        class="circle-text__arrow"
        src="@/assets/images/icons/long-arrow.svg"
      >
    </div>

    <a
      class="circle-text"
      :href="ANKETA_LINK"
      target="_blank"
    >
      <img
        alt="text"
        class="circle-text__circle"
        :src="circleSrc"
      >
      <div
        class="circle-text__text"
        :class="{ 'circle-text__text_white': props.color === 'white' }"
      >
        <span>Хочу</span>
        <span>консультацию</span>
      </div>
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
  flex: 0 0 auto;

  &__outer {
    display: flex;
    gap: 8px;
  }

  &__arrow {
    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }


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

    &_white > span{
      color: white;
    }

    span {
      display: block;
      text-align: center;
    }
  }

  @media (max-width: 1439px) {
    width: 180px;

    &__text {
      font-size: 13px;
    }
  }

  @media (max-width: 1023px) {
    width: 170px;

    &__text {
      font-size: 12px;
    }
  }

  @media (max-width: 767px) {
    width: 150px;

    &__with-arrow {
      width: calc(100vw * 2.15 / 3 - 24px);
    }

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
