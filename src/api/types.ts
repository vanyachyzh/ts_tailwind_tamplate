export type ApiResponse<T> =
  | { data: T; error: null }
  | { data: null; error: unknown };
