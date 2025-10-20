<script lang="ts" setup>
import { type PropType } from 'vue'
import InfoCard from './cards/InfoCard.vue'
import type { IInfoCard } from '@/types'
import UiCircleText from '@/ui/UiCircleText.vue'
import { useProject } from '@/composables'

defineOptions({ name: "InfoBlock" })

defineProps({
  cards: {
    type: Array as PropType<IInfoCard[]>,
    default: () => [],
  }
})

const { isMobileView } = useProject()
</script>

<template>
  <div id="info" class="info">
    <InfoCard
      v-for="(card, index) in cards"
      :key="index"
      :card="card"
      :cut-corner-position="index ? 'left' : 'right'"
    />
    <div class="info__circle">
      <UiCircleText class="info__circle--inner" :show-arrow="isMobileView" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.95vw;
  position: relative;

  @media (max-width: 1439px) {
    gap: 20px;

    &__circle {
      padding: 12px;
    }
  }

  @media (max-width: 767px) {
    gap: 12px;
    grid-template-columns: 1fr;

    &__circle {
      padding: 0;
    }
  }

  @media (min-width: 768px) {
    &__circle {
      position: absolute;
      bottom: 0;
      left: 50%;
      translate: -50% 65%;
      background-color: #F5F5F5;
      border-radius: 100%;
      padding: 20px;

      ::v-deep(.circle-text) {
        width: 170px;

        span {
          font-size: 12px;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    ::v-deep(.circle-text) {
      width: 200px;

      span {
        font-size: 14px;
      }
    }
  }
}
</style>
