<template>
  <div class="photos-layout">
    <div class="photos-info">
      <span class="photos-info__total">
        {{
          `Total: ${imagesState.data ? imagesState.data.total : 0} images found.`
        }}
      </span>
      <NPagination
        v-model:page="page"
        :page-count="imagesState.data?.total ?? 0"
      />
    </div>

    <div v-if="imagesState.loading">
      <div class="row">
        <NSkeleton
          v-for="skeleton of skeletonMock"
          :key="skeleton"
          class="column"
          width="400px"
          height="267px"
        />
      </div>
    </div>
    <div v-else class="photos-content-wrapper">
      <div
        v-if="
          imagesState.data &&
          !imagesState.data.results.length &&
          !imagesState.loading
        "
      >
        No images found...
      </div>
      <div v-else-if="imagesState.data && imagesState.data.results" class="row">
        <img
          v-for="img of imagesState.data.results"
          class="photo-item-img column"
          :src="img.urls.small"
          alt="img"
          @click="detailedOpenedImg = img"
        />
      </div>
    </div>
  </div>
  <VModal />
</template>
<script setup lang="ts">
import { NSkeleton, NPagination } from "naive-ui";
import { storeToRefs } from "pinia";
import { usePhotosStore } from "../../../store/unsplash/photos.ts";
import VModal from "../../../components/Modal/VModal.vue";

const skeletonMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const photosStore = usePhotosStore();
const { imagesState, page, detailedOpenedImg } = storeToRefs(photosStore);
</script>
<style lang="scss" scoped>
@import "photos-layout";
</style>
