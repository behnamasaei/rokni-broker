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

  getChoosen(input: IPagedAndSortedResultDto): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
      `/api/app/stock/choosen?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getSotckWithIndustryId(id: string | null, input: IPagedAndSortedResultDto): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
      `/api/app/stock/${id}/stock-with-industry-id?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getWithDetail(input: IPagedAndSortedResultDto): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
      `/api/app/stock/with-details?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getWithDetailByName(input: IPagedAndSortedResultDto, name: string): Observable<IPagedResult<StockDto>> {
    return this.httpClient.get<IPagedResult<StockDto>>(environment.baseApi +
      `/api/app/stock/with-details?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}&name=${name}`);
  }

  post(stock: StockCreateUpdateDto): Observable<StockDto> {
    return this.httpClient.post<StockDto>(environment.baseApi + '/api/app/stock', stock);
  }

  put(stock: StockCreateUpdateDto): Observable<StockDto> {
    return this.httpClient.put<StockDto>(environment.baseApi + `/api/app/stock/${stock.id}`, stock);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseApi + `/api/app/stock/${id}`);
  }

  updateChoosen(id: string, choosen: boolean): Observable<boolean> {
    return this.httpClient.put<boolean>(environment.baseApi + `/api/app/stock/${id}/choosen?choosen=${choosen}`, null);
  }
}
