import { StockDto } from "./Stock";


export interface IndustryDto {
  id: string,
  name: string,
  stocks ?: StockDto[]
}

export interface IndustryCreateUpdateDto {
  id?: string,
  name: string,
}