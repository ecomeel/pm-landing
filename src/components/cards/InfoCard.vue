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
    }

    &__body {
      padding: 20px 20px 50px;
    }
  }

  @media (max-width: 767px) {
    &__header {
      padding: 12px;
    }

    &__body {
      padding: 12px 12px 30px;
    }
  }

  @media (max-width: 549px) {
    &__body {
      padding-bottom: 16px;
    }
  }
}
</style>
