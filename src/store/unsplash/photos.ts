import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { IPhotosFiltersState } from "../../types/unsplash/photos-search-filters.ts";
import { defaultDataState, defaultFilters } from "./constants.ts";
import { getPhotos } from "../../api/unsplash.ts";
import { getActiveFilters } from "./utils.ts";
import {
  IPhotoResponseItem,
  IPhotosResponseState,
} from "../../types/unsplash/photos.ts";

export const usePhotosStore = defineStore("photos-store", () => {
  const filtersState = reactive<Partial<IPhotosFiltersState>>({
    ...defaultFilters,
  });
  const page = ref<number>(1);
  const detailedOpenedImg = ref<IPhotoResponseItem | null>(null);

  const imagesState = reactive<IPhotosResponseState>({ ...defaultDataState });

  const handleCloseModal = () => {
    detailedOpenedImg.value = null;
  };

  // ASYNC
  const handleApplyFilters = async () => {
    try {
      imagesState.loading = true;
      imagesState.data = await getPhotos({
        ...getActiveFilters(filtersState),
        page: page.value,
      });
    } catch (e) {
      imagesState.error = e;
    } finally {
      imagesState.loading = false;
    }
  };

  return {
    handleApplyFilters,
    detailedOpenedImg,
    imagesState,
    filtersState,
    page,
    handleCloseModal,
  };
});
