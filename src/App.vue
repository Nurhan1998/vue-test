<template>
  <div class="wrapper">
    <PhotosSearchFilters />
    <PhotosLayout />
  </div>
</template>

<script setup lang="ts">
import PhotosSearchFilters from "./containers/Unsplash/PhotosSearchFilters/PhotosSearchFilters.vue";
import PhotosLayout from "./containers/Unsplash/PhotosLayout/PhotosLayout.vue";
</script>
<style scoped lang="scss">
@import "./app";
.wrapper {
  @include flex(column, center, center);
}
</style>
