import { IndustryDto } from "./Industry";

export interface StockDto {
  id: string,
  name: string,
  codalLink: string,
  chartsazLink: string,
  tablokhaniLink: string,
  tsetmcLink: string,
  rahvardLink: string,
  shakhesbanLink: string,
  industryId: string,
  industry: IndustryDto
}


export interface StockRowGroup {
  id: string,
  name: string,
  codalLink: string,
  chartsazLink: string,
  tablokhaniLink: string,
  tsetmcLink: string,
  rahvardLink: string,
  shakhesbanLink: string,
  industryId: string,
  industry: IndustryDto

  representative: {
    id: string,
    name : string
  },
}

export interface StockLinkExpand {
  id: string,
  name: string,
  links: {
    id: string,
    codalLink: string,
    chartsazLink: string,
    tablokhaniLink: string,
    tsetmcLink: string,
    rahvardLink: string,
    shakhesbanLink: string,
  },
  industryId: string,
  industry: IndustryDto
}

export interface StockCreateUpdateDto {
  Name: string,
  CodalLink: string,
  ChartsazLink: string,
  TablokhaniLink: string,
  TsetmcLink: string,
  RahvardLink: string,
  ShakhesbanLink: string,
  IndustryId: string,
}