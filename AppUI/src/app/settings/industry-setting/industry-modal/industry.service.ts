import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { IPagedAndSortedResultDto, IPagedResult } from 'src/app/Models/CommonModels';
import { IndustryCreateUpdateDto, IndustryDto } from 'src/app/Models/Industry';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private httpClient: HttpClient) { }

  getAll(input: IPagedAndSortedResultDto): Observable<IPagedResult<IndustryDto>> {
    return this.httpClient.get<IPagedResult<IndustryDto>>(environment.baseApi +
      `/api/app/industry?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getChoosen(input: IPagedAndSortedResultDto): Observable<IPagedResult<IndustryDto>> {
    return this.httpClient.get<IPagedResult<IndustryDto>>(environment.baseApi +
      `/api/app/industry/choosen?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getListWithDetail(input: IPagedAndSortedResultDto): Observable<IPagedResult<IndustryDto>> {
    return this.httpClient.get<IPagedResult<IndustryDto>>(environment.baseApi +
      `/api/app/industry/with-details?Sorting=${input.Sorting}&SkipCount=${input.SkipCount}&MaxResultCount=${input.MaxResultCount}`);
  }

  getById(id: string | null): Observable<IndustryDto> {
    return this.httpClient.get<IndustryDto>(environment.baseApi + `/api/app/industry/${id}`);
  }

  getByIdWithDetails(id: string | null): Observable<IndustryDto> {
    return this.httpClient.get<IndustryDto>(environment.baseApi +
      `/api/app/industry/${id}/by-id-with-detail`);
  }

  post(industry: IndustryCreateUpdateDto): Observable<IndustryDto> {
    return this.httpClient.post<IndustryDto>(environment.baseApi + '/api/app/industry', industry);
  }

  put(industry: IndustryCreateUpdateDto): Observable<IndustryDto> {
    return this.httpClient.put<IndustryDto>(environment.baseApi + `/api/app/industry/${industry.id}`, industry);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseApi + `/api/app/industry/${id}`);
  }

  updateChoosen(id: string, choosen: boolean): Observable<boolean> {
    return this.httpClient.put<boolean>(environment.baseApi + `/api/app/industry/${id}/choosen?choosen=${choosen}`, null);
  }
}
