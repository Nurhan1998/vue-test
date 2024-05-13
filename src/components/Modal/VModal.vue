<template>
  <NModal to="body" v-model:show="shownState">
    <NCard
      style="width: 30%"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      class="card"
    >
      <img :src="detailedOpenedImg?.urls.small" alt="f-w-img" />
      <div class="card__right">
        <div class="card-item">
          <span>Likes: </span>
          <p>{{ detailedOpenedImg?.likes }}</p>
        </div>
        <div class="card-item">
          <span>Created at: </span>
          <p>{{ detailedOpenedImg?.created_at }}</p>
        </div>

        <div class="card-item">
          <span>Description: </span>
          <p>{{ detailedOpenedImg?.alt_description }}</p>
        </div>
      </div>
    </NCard>
  </NModal>
</template>
<script setup lang="ts">
import { NModal, NCard } from "naive-ui";
import { usePhotosStore } from "../../store/unsplash/photos.ts";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const photosStore = usePhotosStore();
const { detailedOpenedImg } = storeToRefs(photosStore);

const shownState = ref<boolean>(false);

watch(
  () => detailedOpenedImg.value,
  (val) => (shownState.value = !!val),
);
</script>
<style lang="scss" scoped>
.card {
  display: flex;

  &__right {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &-item {
    color: black;
    display: flex;
    padding: 3px;
    align-items: center;
    justify-content: space-between;

    span {
      width: fit-content;
      word-break: keep-all;
      color: #8c8c8c;
    }
    p {
      margin: 0;
      padding-left: 10px;
    }
  }

  &-description {
    height: auto;
  }
}
</style>
