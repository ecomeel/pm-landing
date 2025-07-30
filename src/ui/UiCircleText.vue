<script lang="ts" setup>
defineOptions({ name: "UiCircleText" });
</script>

<template>
  <div class="circle-text">
    <img class="circle-text__circle" src="@/assets/images/circle-text.svg" alt="text">
    <p class="circle-text__text">
      <span>Хочу</span>
      <span>констультацию</span>
    </p>
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
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;

    span {
      display: block;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    width: 140px;

    &__text {
      font-size: 12px;
    }
  }
}
</style>
