<script lang="ts" setup>
import mailIcon from "@/assets/images/icons/mail-icon.svg";
import tgIcon from "@/assets/images/icons/telegram-icon.svg";

defineOptions({ name: "FooterPage" });

const socials = [
  {
    link: "",
    icon: mailIcon,
    name: "Почта"
  },
  {
    link: "",
    icon: tgIcon,
    name: "Телеграм",
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__left-side">
      <div>
        <p>Самозанятая Гущина Анастасия Олеговна</p>
        <p>ИНН 780717115213</p>
      </div>
      <a href="">Согласие на получение информационных рассылок</a>
      <a href="">Согласие на обработку персональных данных</a>
      <a href="">Публичная оферта</a>
    </div>
    <div class="footer__links">
      <a class="footer__social" :href="social.link" v-for="(social, index) in socials" :key="index">
        <img :src="social.icon" :alt="social.name">
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 30px 5.59vw;
  background-color: #3A3A3A;
  display: flex;
  justify-content: space-between;

  a:hover {
    opacity: .7;
  }

  &__left-side {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div > p:last-child {
      margin-top: 5px;
    }

    p, a {
      display: block;
      color: white;
      @include subtitle;
      font-size: 20px;
      transition: opacity 0.2s;
      width: max-content;
    }
  }

  &__links {
    display: flex;
    gap: 12px;
  }

  &__social {
    display: block;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    transition: opacity 0.2s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1023px) {
    padding: 30px 24px;

    &__left-side {
      p, a {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 549px) {
    padding: 24px 16px;
    flex-direction: column;
    gap: 20px;

    &__left-side {
      p, a {
        width: unset;
        font-size: 16px;
      }
    }
  }
}
</style>
