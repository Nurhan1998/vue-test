import { IPhotosFiltersState } from "../../types/unsplash/photos-search-filters.ts";

export const getActiveFilters = (
  filters: Partial<IPhotosFiltersState>,
): IPhotosFiltersState => {
  return Object.entries(filters).reduce(
    (acc: IPhotosFiltersState, [key, value]) => {
      if (Boolean(value)) {
        return {
          ...acc,
          [key]: value,
        };
      }

      return acc;
    },
    {} as IPhotosFiltersState,
  );
};
