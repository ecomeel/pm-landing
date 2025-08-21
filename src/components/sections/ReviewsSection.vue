<script lang="ts" setup>
import PhotoSlider from '../PhotoSlider.vue'
import reviewImg1 from "@/assets/images/reviews/review-1.png"
import reviewImg2 from "@/assets/images/reviews/review-2.png"
import reviewImg3 from "@/assets/images/reviews/review-3.png"
import reviewImg4 from "@/assets/images/reviews/review-4.png"

defineOptions({ name: "ReviewsSection" })

const reviewsList = [
  reviewImg1, reviewImg2, reviewImg3, reviewImg4
]
</script>

<template>
  <section class="review">
    <h2>
      <span>Отзывы</span> о моей работе
    </h2>

    <PhotoSlider :slides="reviewsList" />
  </section>
</template>

<style lang="scss" scoped>
.review {
  padding-bottom: 90px;

  h2 {
    @include h2;
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    padding-bottom: 60px;

    h2 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 549px) {
    padding-bottom: 35px;
  }
}
</style>
