<script lang="ts" setup>
import type { ICase } from '@/types'
import type { PropType } from 'vue'
import UiSquareList from '@/ui/UiSquareList.vue'
import { useProject } from '@/composables'

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

const { isMobileView } = useProject()
</script>

<template>
  <div class="card" :class="{ card_left: caseNumber % 2 === 0 }">
    <template v-if="!isMobileView">
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
    </template>
    <template v-else>
      <div class="card__underline" />
      <div class="card__content-wrapper">
        <div class="card__top">
          <div class="card__top_left">
            <h3 class="card__title">
              {{ `КЕЙС №${caseNumber}` }}
            </h3>
            <p class="card__subtitle" v-html="workCase.subtitle" />
          </div>
          <div class="card__top_right">
            <img
              :alt="`Кейс ${caseNumber}`"
              loading="lazy"
              :src="workCase.pictureSource"
            >
          </div>
        </div>
        <div class="card__bottom">
          <div class="card__results-header">
            <p>Результаты, которых нам удалось достичь</p>
          <!-- TODO: Add arrow down -->
          </div>
          <UiSquareList :list="workCase.results" />
        </div>
      </div>
    </template>
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
    text-transform: uppercase;
    @include subtitle-bold;
  }

  &__results-header {
    p {
      text-transform: uppercase;
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
    &_left {
      .card__top {
        flex-direction: row-reverse;
      }
    }

    &__content-wrapper {
      display: block;
    }

    &__top {
      display: flex;
      align-items: center;
      gap: 4.06vw;

      > * {
        flex: 1 0 calc(50% - 2.03vw)
      }
    }

    &__underline {
      width: 110%;
      height: 8px;
    }

    &__results-header {
      margin: 16px 0 14px;
      width: 55vw;

      > p {
        font-size: 3.75vw;
        line-height: 1.2em;
      }
    }

    &__subtitle {
      margin-top: 12px;
    }
  }

  @media (max-width: 549px) {
    &__subtitle {
      margin-top: 8px;
    }

    &__results-header {
      margin: 16px 0 10px;
    }
  }
}
</style>
