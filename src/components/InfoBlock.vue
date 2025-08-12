<script lang="ts" setup>
import type { PropType } from 'vue';
import InfoCard from './cards/InfoCard.vue';
import type { IInfoCard } from '@/types';
import UiCircleText from '@/ui/UiCircleText.vue';

defineOptions({ name: "InfoBlock" });

defineProps({
  cards: {
    type: Array as PropType<IInfoCard[]>,
    default: () => [],
  }
})
</script>

<template>
  <div class="info">
    <InfoCard 
      v-for="(card, index) in cards" 
      :key="index" 
      :card="card" 
      :cut-corner-position="index ? 'left' : 'right'"
    />
    <div class="info__circle">
      <UiCircleText class="info__circle--inner" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.95vw;
  position: relative;

  &__circle {
    position: absolute;
    // bottom: -35%;
    bottom: 0;
    left: 50%;
    // translate: -50%;
    translate: -50% 65%;
    background-color: #F5F5F5;
    border-radius: 100%;
    padding: 20px;

    &--inner {
      width: 170px;

      :deep(p > span) {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1439px) {
    gap: 20px;

    &__circle {
      padding: 12px;
    }
  }

  @media (max-width: 1023px) {
    &__circle {

      &--inner {
        width: 150px;

        :deep(p > span) {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    gap: 12px;

    &__circle {
      padding: 4px;
      translate: -50% 70%;

      &--inner {
        width: 130px;

        :deep(p > span) {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 549px) {
    grid-template-columns: 1fr;

    
    > *:not(:last-child) {
      width: 80vw;

      &:not(:first-child) {
        justify-self: end;
      }
    }

    &__circle {
      display: none;
    }
  }
}
</style>
