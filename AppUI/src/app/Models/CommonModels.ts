export interface IPagedAndSortedResultDto {
  Sorting: string,
  SkipCount: number,
  MaxResultCount: number
}

export interface IPagedResult<T> {
  items: T[],
  totalCount: number
}