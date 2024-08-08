export interface PaginatedRestResponse<T> {
  data: T[],
  totalPages: number;
}

export type GQLResponse<K extends string, T> = {
  [key in K]: GQLData<T>;
};

export interface GQLData<T> {
  nodes: T[];
  pagination: Pagination
}


export interface Pagination {
  page: number;
  perPage: number;
  totalPages: number;
}
