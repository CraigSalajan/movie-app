export interface PaginatedResponse<T> {
  data: T[],
  totalPages: number;
}
