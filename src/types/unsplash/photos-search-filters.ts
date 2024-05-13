export enum EPhotosSortOptions {
  latest = "latest",
  relevant = "relevant",
}
export enum EPhotosContentFilters {
  low = "low",
  high = "high",
}

export enum EPhotoOrientation {
  landscape = "landscape",
  portrait = "portrait",
  squarish = "squarish",
}
export enum EPhotoSearchColors {
  black_and_white = "black_and_white",
  black = "black",
  white = "white",
  yellow = "yellow",
  orange = "orange",
  red = "red",
  purple = "purple",
  magenta = "magenta",
  green = "green",
  teal = "teal",
  blue = "blue",
}

export interface IPhotosFiltersState {
  order_by: EPhotosSortOptions;
  content_filter: EPhotosContentFilters;
  query: string;
  per_page: number;
  orientation: EPhotoOrientation;
  color: EPhotoSearchColors;
}

export interface IGetPhotosParams extends IPhotosFiltersState {
  page: number;
}
