import { IUnsplashAPIResponse, TDefaultState } from "../store.ts";

export interface IPhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface IUserLinks extends Omit<IPhotoLinks, "download"> {
  likes: string;
  photos: string;
}

export interface IUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface IPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface IUser {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: IUserProfileImage;
  links: IUserLinks;
}

export interface IPhotoResponseItem {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: false;
  description: string;
  user: IUser;
  current_user_collections: unknown[];
  urls: IPhotoUrls;
  links: IPhotoLinks;
  alt_description: string;
}

export interface IUnsplashPhotosResponse
  extends IUnsplashAPIResponse<IPhotoResponseItem[]> {}

export interface IPhotosResponseState
  extends TDefaultState<IUnsplashPhotosResponse> {}
