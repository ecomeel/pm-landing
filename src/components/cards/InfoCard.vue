<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IInfoCard } from '@/types'
import UiSquareList from '@/ui/UiSquareList.vue'

defineOptions({ name: "InfoCard" })

defineProps({
  card: {
    type: Object as PropType<IInfoCard>,
    required: true,
  },

  noBodyBackground: {
    type: Boolean,
    default: false,
  },

  withBorderBody: {
    type: Boolean,
    default: false,
  },

  cutCornerPosition: {
    type: String as PropType<"right" | "left">,
    default: "right",
  }
})
</script>

<template>
  <div class="card" :class="`card__corner_${cutCornerPosition}`">
    <header class="card__header">
      <h3>{{ card.title }}</h3>
      <img
        alt="arrow"
        class="card__header-arrow"
        src="@/assets/images/icons/arrow-right-bottom-white.svg"
      >
    </header>

    <div
      class="card__body"
      :class="[
        { card__body_bordered: withBorderBody },
        { card__body_transparent: noBodyBackground }
      ]"
    >
      <UiSquareList :list="card.list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;

  &__header {
    padding: 20px 2.18vw;
    background-color: $beige-color;
    color: white;
    display: flex;
    align-items: center;
    gap: .8vw;

    h3 {
      @include subtitle-semi-bold;
    }
  }

  &__body {
    padding: 30px 2.18vw 70px;
    flex: 1 0 auto;
    background-color: #FFF;

    &_transparent {
      background-color: transparent;
    }

    &_bordered {
      border-right: 1px solid $black-color;
      border-left: 1px solid $black-color;
      border-bottom: 1px solid $black-color;
    }
  }

  @media (max-width: 1439px) {
    &__header {
      padding: 16px 20px;
      gap: 12px;

      &-arrow {
        width: 16px;
      }

      h3 {
        font-size: 18px;
      }
    }

    &__body {
      padding: 20px 20px 50px;
    }
  }

  @media (max-width: 767px) {
    &__header {
      padding: 18px 28px;
      gap: 8px;

      // &-arrow {
      //   width: 16px;
      // }

      h3 {
        letter-spacing: -0.01em;
        font-size: 20px;
      }
    }

    &__body {
      padding: 24px 28px;
    }
  }

  @media (max-width: 549px) {
    &__header {
      padding: 9px 14px;
      gap: 1.25vw;

      &-arrow {
        width: 2.8vw;
      }

      h3 {
        font-size: 3.75vw;
      }
    }

    &__body {
      padding: 16px;
    }
  }
}
</style>
