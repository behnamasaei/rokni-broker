import { IndustryNotebookDto } from "./Notebook";
import { StockDto } from "./Stock";


export interface IndustryDto {
  id: string,
  name: string,
  codalLink: string,
  chartsazLink: string,
  tablokhaniLink: string,
  chartIndex: string,
  tsetmcLink: string,
  rahvardLink: string,
  shakhesbanLink: string,
  chartixLink:string,
  sortNumber: number,
  industryNotebookId?: string,
  industryNotebook: IndustryNotebookDto,
  stocks?: StockDto[]
}

export interface IndustryCreateUpdateDto {
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
  sortNumber: number,
  industryNotebookId: string
}