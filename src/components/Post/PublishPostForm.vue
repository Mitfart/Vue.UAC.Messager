<template>
  <div class="publish-form block">
    <h1 class="publish-form__title"> Опубликовать пост </h1>

    <label class="publish-form__label">
      <h2> Заголовок </h2>
      <InputField class="publish-form__field" placeholder="Введите заголовок"></InputField>
    </label>

    <label class="publish-form__label">
      <h2> Содержание </h2>
      <TextareaField class="publish-form__field" placeholder="Введите Содержание" :rows=rowsCount ></TextareaField>
    </label>

    <div class="publish-form__media">
      <div class="publish-form__buttons">
        <SecondaryBtn @click="AddContent('_1')"><IconSmile/></SecondaryBtn>
        <SecondaryBtn @click="AddContent('_2')"><IconFilm/></SecondaryBtn>
        <SecondaryBtn @click="AddContent('_3')"><IconPhoto/></SecondaryBtn>
        <SecondaryBtn @click="AddContent('_4')"><IconCopy/></SecondaryBtn>
      </div>

      <div class="loaded-media__container">
        <div v-for="content in mediaContent"
             class="loaded-media rect">
          <div class="loaded-media__content">
            {{ content }}
          </div>
          <div class="loaded-media__overflow">
            <SecondaryBtn class="loaded-media__btn rect btn_active"
                        @click="RemoveContent(content)">
              <IconMark/>
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>

    <label class="publish-form__label">
      <h2> Теги </h2>
      <InputField class="publish-form__field"
                  placeholder="Введите теги (до 3 шт.)"></InputField>
    </label>

    <footer>
      <PrimaryBtn @click="Dummy">
        Отправить
      </PrimaryBtn>
    </footer>

  </div>
</template>


<script setup>
import InputField from "@/components/form/fields/InputField.vue"
import TextareaField from "@/components/form/fields/TextareaField.vue";
import SecondaryBtn from "@/components/form/buttons/SecondaryBtn.vue";
import PrimaryBtn from "@/components/form/buttons/PrimaryBtn.vue";

import IconSmile from "@/icons/IconSmile.vue";
import IconFilm from "@/icons/IconFilm.vue";
import IconPhoto from "@/icons/IconPhoto.vue";
import IconCopy from "@/icons/IconCopy.vue";
import IconMark from "@/icons/IconMark.vue";

import {reactive} from "vue";


const rowsCount = 15;

const mediaContent = reactive([]);


function AddContent(content) {
  const contentI = mediaContent.indexOf(content);
  if (contentI < 0) {
    mediaContent.push(content);
    console.log('Add ' + content)
  }
  else console.log('CANT Add ' + content)
}

function RemoveContent(content) {
  const contentI = mediaContent.indexOf(content);
  if (contentI >= 0) {
    mediaContent.splice(contentI, 1);
    console.log('Remove ' + content)
  }
  else console.log('CANT Remove ' + content)
}

function Dummy() {console.log("Dummy log") }
</script>


<style scoped lang="scss">
@use "@/assets/scss/_vars.scss";

.publish-form {
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__field {
    width: 100%;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }

  .publish-form__media {
    & > * {
      margin-top: .5rem;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}

.loaded-media {
  width: 20%;
  min-width: 5rem;
  max-width: 10rem;
  border-radius: .5rem;
  overflow: hidden;

  position: relative;

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }

  &__overflow,
  &__content {
    background-color: rgba(vars.$c-primal-rgb, .25);

    position: absolute;

    width: 100%;
    height: 100%;
    object-fit: cover;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn {
    padding: 0;
    width: 2rem;

    position: relative;
    & .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }
  }


  &__overflow {
    opacity: 0;
  }
  &:hover {
    .loaded-media__overflow {
      opacity: 1;
    }
  }
}

</style>