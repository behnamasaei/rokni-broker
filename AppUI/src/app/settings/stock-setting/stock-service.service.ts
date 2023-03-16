import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { IPagedAndSortedResultDto, IPagedResult } from 'src/app/Models/CommonModels';
import { IndustryCreateUpdateDto } from 'src/app/Models/Industry';
import { StockCreateUpdateDto, StockDto } from 'src/app/Models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(input: IPagedAndSortedResultDto): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
       `/api/app/stock?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getWithDetail(input: IPagedAndSortedResultDto): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
       `/api/app/stock/with-details?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  post(industry: StockCreateUpdateDto ): Observable<StockDto> {
    return this.httpClient.post<StockDto>(environment.baseApi + '/api/app/stock', industry);
  }

  put(industry: IndustryCreateUpdateDto , id:string): Observable<StockDto> {
    return this.httpClient.put<StockDto>(environment.baseApi + `/api/app/stock/${industry.id}`, industry);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseApi + `/api/app/stock/${id}`);
  }
}
