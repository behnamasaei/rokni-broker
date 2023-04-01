export interface IPagedAndSortedResultDto {
  Sorting: string,
  SkipCount: number,
  MaxResultCount: number
}

export interface IPagedResult<T> {
  items: T[],
  totalCount: number
}


export enum NoteBookType{
  industry,
  stock
}

export enum BrokerType{
  industry,
  stock
}