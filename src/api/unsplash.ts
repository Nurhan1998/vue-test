import unsplashAPI from "./index.ts";

import { IUnsplashPhotosResponse } from "../types/unsplash/photos.ts";
import { IGetPhotosParams } from "../types/unsplash/photos-search-filters.ts";
export const getPhotos = async (
  params: IGetPhotosParams,
): Promise<IUnsplashPhotosResponse> => {
  const resp = await unsplashAPI.get<IUnsplashPhotosResponse>(
    "/search/photos",
    {
      params,
    },
  );
  //adapters
  return resp.data;
};
