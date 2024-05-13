<template>
  <div class="filters-wrapper">
    <NFlex>
      <NFlex>
        <VDropdown
          label="Order by"
          :data="sortOptions"
          v-model="filtersState.order_by"
        />
        <VDropdown
          label="Content filter"
          :data="contentFilterOptions"
          v-model="filtersState.content_filter"
        />
        <VDropdown
          label="Orientation"
          :data="orientationOptions"
          v-model="filtersState.orientation"
        />
        <VDropdown
          label="On page"
          :data="perPageOptions"
          v-model="filtersState.per_page"
        />
      </NFlex>
      <div class="search__wrapper">
        <input
          placeholder="Type something..."
          name="query"
          class="search__input"
          autocomplete="off"
          aria-expanded="false"
          v-model="searchInputText"
        />
        <button class="search__btn" @click="photosStore.handleApplyFilters()">
          Apply filters
        </button>
      </div>
    </NFlex>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { usePhotosStore } from "../../../store/unsplash/photos.ts";
import VDropdown from "../../../components/Dropdown/VDropdown.vue";
import {
  contentFilterOptions,
  orientationOptions,
  perPageOptions,
  sortOptions,
} from "../../../store/unsplash/constants.ts";
import debounce from "lodash/debounce";
import { NFlex } from "naive-ui";
import { DEBOUNCE_WAIT_TIME_MS } from "../../../constants/unsplash.ts";

const photosStore = usePhotosStore();
const { filtersState, page } = storeToRefs(photosStore);
const searchInputText = ref<string>("");

const updateFiltersQuery = (newValue: string) => {
  filtersState.value.query = newValue;
};

const debouncedSearchUpdate = debounce(
  updateFiltersQuery,
  DEBOUNCE_WAIT_TIME_MS,
);

watch(
  () => searchInputText.value,
  (val) => {
    debouncedSearchUpdate(val);
  },
);

onMounted(() => {
  searchInputText.value = filtersState.value.query ?? "";
  photosStore.handleApplyFilters();
});

watch(
  [() => filtersState, () => page],
  async () => {
    await photosStore.handleApplyFilters();
  },
  { deep: true },
);
</script>
<style lang="scss" scoped>
@import "photosSearchFilters";
</style>
