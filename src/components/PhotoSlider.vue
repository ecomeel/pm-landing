<script lang="ts" setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import sliderArrowBtn from "@/assets/images/icons/slider-arrow-btn.svg"
import { useWindowSize } from '@vueuse/core'

defineOptions({ name: "PhotoSlider" })

defineProps<{
  slides: string[]
}>()

const { width } = useWindowSize()

const slidesPerView = computed(() => {
  if (width.value > 767) {
    return 3
  }

  if (width.value > 549) {
    return 2
  }

  return 1
})
</script>

<template>
  <div class="photo-slider__container">
    <button
      id="prevPhotoSlide"
      class="photo-slider__btn photo-slider__btn_prev"
      type="button"
    >
      <img alt="sliderPrevBtn" :src="sliderArrowBtn">
    </button>
    <Swiper
      class="photo-slider"
      loop
      :modules="[ Navigation ]"
      :navigation="{
        prevEl: '#prevPhotoSlide',
        nextEl: '#nextPhotoSlide',
      }"
      :slides-per-view="slidesPerView"
      space-between="8"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="slide.slice(0, 6) + index"
        class="photo-slider__slide"
      >
        <img
          alt="Отзыв о работе"
          class="photo-slider__image"
          :src="slide"
        >
      </SwiperSlide>
    </Swiper>
    <button
      id="nextPhotoSlide"
      class="photo-slider__btn photo-slider__btn_next"
      type="button"
    >
      <img alt="sliderPrevBtn" :src="sliderArrowBtn">
    </button>
  </div>
</template>

<style lang="scss">
.swiper {
  &-slide {
    height: 300px;
    display: flex;
    justify-content: center;
  }
}

.photo-slider {
  &__container {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__image {
    height: 100%;
    width: auto;
    object-fit: contain;
    text-align: center;
  }

  &__btn {
    flex: 0 0 auto;
    background-color: black;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.5
    }

    img {
      width: 12px;
      height: 17px;
    }

    &_next {
      rotate: 180deg;
    }
  }

  @media (max-width: 767px) {
    &__container {
      gap: 12px;
    }
  }
}
</style>
