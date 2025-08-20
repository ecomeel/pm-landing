<script lang="ts" setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation } from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import sliderArrowBtn from "@/assets/images/icons/slider-arrow-btn.svg";
import { useWindowSize } from '@vueuse/core';

defineOptions({ name: "PhotoSlider" });

defineProps<{
  slides: string[]
}>()

const { width } = useWindowSize();

const slidesPerView = computed(() => {
  if (width.value > 767) {
    return 3
  }

  if (width.value > 549) {
    return 2
  }

  return 1
});
</script>

<template>
  <div class="photo-slider__container">
    <button
      type="button"
      class="photo-slider__btn photo-slider__btn_prev"
      id="prevPhotoSlide"
    >
      <img :src="sliderArrowBtn" alt="sliderPrevBtn">
    </button>
    <Swiper
      :modules="[ Navigation ]"
      space-between="8"
      :slides-per-view="slidesPerView"
      :navigation="{
        prevEl: '#prevPhotoSlide',
        nextEl: '#nextPhotoSlide',
      }"
      loop
      class="photo-slider"
    >
      <SwiperSlide
        class="photo-slider__slide"
        v-for="(slide, index) in slides"
        :key="slide.slice(0, 6) + index"
      >
        <img :src="slide" class="photo-slider__image" alt="Отзыв о работе">
      </SwiperSlide>
    </Swiper>
    <button
      id="nextPhotoSlide"
      type="button"
      class="photo-slider__btn photo-slider__btn_next"
    >
      <img :src="sliderArrowBtn" alt="sliderPrevBtn">
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
