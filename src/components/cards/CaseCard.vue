<script lang="ts" setup>
import type { ICase } from '@/types'
import type { PropType } from 'vue'
import UiSquareList from '@/ui/UiSquareList.vue'

defineOptions({ name: "CaseCard" })

defineProps({
  workCase: {
    type: Object as PropType<ICase>,
    required: true,
  },

  caseNumber: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <div class="card" :class="{ card_left: caseNumber % 2 === 0 }">
    <div class="card__content-wrapper">
      <div class="card__text-content">
        <h3 class="card__title">
          {{ `КЕЙС №${caseNumber}` }}
        </h3>
        <p class="card__subtitle" v-html="workCase.subtitle" />
        <div class="card__results-header">
          <p>Результаты, которых нам удалось достичь</p>
          <!-- TODO: Add arrow down -->
        </div>
        <UiSquareList class="card__results-list" :list="workCase.results" />
      </div>
      <div class="card__image">
        <img :alt="`Кейс ${caseNumber}`" :src="workCase.pictureSource">
      </div>
    </div>
    <div class="card__underline" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;

  &_left {
    .card {
      &__underline {
        align-self: flex-start;
      }

      &__content-wrapper {
        flex-direction: row-reverse;
        justify-content: flex-end
      }
    }
  }

  &__title {
    @include h2;
  }

  &__subtitle {
    @include subtitle-bold;
  }

  &__results-header {
    p {
      text-decoration: underline;
      @include subtitle-semi-bold;
    }
  }

  &__content-wrapper {
    display: flex;
    align-items: center;
    gap: 70px;
    width: 100%;
  }

  &__text-content {
    display: flex;
    flex-direction: column;
    gap: 24px;

  }

  &__image {
    width: 300px;
    flex: 0 0 auto;
    display: flex;

    > img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__underline {
    height: 12px;
    width: 60vw;
    background-color: $beige-color;
    align-self: flex-end;
  }

  @media (max-width: 1279px) {
    &__text-content {
      gap: 16px;
    }

    &__underline {
      height: 10px;
    }
  }

  @media (max-width: 767px) {
    &__content-wrapper {
      gap: 30px;
    }

    &__text-content {
      gap: 12px;
    }

    &__image {
      display: none;
    }

    &__underline {
      display: none;
    }
  }
}
</style>
