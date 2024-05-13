import {
  EPhotoOrientation,
  EPhotosContentFilters,
  EPhotosSortOptions,
} from "../../types/unsplash/photos-search-filters.ts";
import type { TDefaultState, TDropdownLabel } from "../../types/store.ts";

export const defaultFilters = {
  order_by: EPhotosSortOptions.latest,
  content_filter: EPhotosContentFilters.low,
  query: "dogs",
  per_page: 10,
  orientation: EPhotoOrientation.landscape,
  color: undefined,
};

export const defaultDataState: TDefaultState = {
  data: null,
  error: null,
  loading: false,
};

export const sortOptions: TDropdownLabel<EPhotosSortOptions>[] = [
  {
    key: EPhotosSortOptions.latest,
    label: "Latest",
  },
  {
    key: EPhotosSortOptions.relevant,
    label: "Relevant",
  },
];

export const contentFilterOptions: TDropdownLabel<EPhotosContentFilters>[] = [
  {
    key: EPhotosContentFilters.low,
    label: "Low",
  },
  {
    key: EPhotosContentFilters.high,
    label: "High",
  },
];
export const orientationOptions: TDropdownLabel<EPhotoOrientation>[] = [
  {
    key: EPhotoOrientation.landscape,
    label: "Landscape",
  },
  {
    key: EPhotoOrientation.portrait,
    label: "Portrait",
  },
  {
    key: EPhotoOrientation.squarish,
    label: "Squarish",
  },
];
export const perPageOptions: TDropdownLabel<number>[] = [
  {
    key: 10,
    label: "10 images",
  },
  {
    key: 20,
    label: "20 images",
  },
];
