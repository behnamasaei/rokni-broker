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

  post(industry: IndustryCreateUpdateDto ): Observable<IndustryDto> {
    const body = {
      name: industry.name
    }
    return this.httpClient.post<IndustryDto>(environment.baseApi + '/api/app/industry', body);
  }

  put(industry: IndustryCreateUpdateDto , id:string): Observable<IndustryDto> {
    return this.httpClient.put<IndustryDto>(environment.baseApi + `/api/app/industry/${industry.id}`, industry);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseApi + `/api/app/industry/${id}`);
  }
}
