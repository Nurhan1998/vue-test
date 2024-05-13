import { AxiosError } from "axios";

export interface IUnsplashAPIResponse<T> {
  total: number;
  total_pages: number;
  results: T;
}

export interface TDefaultState<T = null> {
  data: T | null;
  error: AxiosError | null | unknown;
  loading: boolean;
}

// export interface TDefaultListState<
//   T extends object,
//   R extends Array<T> = Array<T>,
// > extends TDefaultState<R> {}

export type TDropdownLabel<T> = {
  key: T;
  label: string;
};
