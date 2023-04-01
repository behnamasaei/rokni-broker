import { IndustryDto } from "./Industry";
import { StockNotebookDto } from "./Notebook";

export interface StockDto {
  id: string,
  name: string,
  codalLink: string,
  chartsazLink: string,
  tablokhaniLink: string,
  tsetmcLink: string,
  chartIndex: string,
  rahvardLink: string,
  shakhesbanLink: string,
  chartixLink:string,
  industryId: string,
  choosen:boolean,
  stockNotebook: StockNotebookDto,
  stockNotebookId: string,
  industry: IndustryDto
}


export interface StockCreateUpdateDto {
  id?: string,
  name: string,
  codalLink: string,
  chartsazLink: string,
  chartIndex: string,
  tablokhaniLink: string,
  tsetmcLink: string,
  rahvardLink: string,
  shakhesbanLink: string,
  chartixLink:string,
  industryId: string,
  sortNumber: number,
  choosen:boolean,
  stockNotebookId: string
}