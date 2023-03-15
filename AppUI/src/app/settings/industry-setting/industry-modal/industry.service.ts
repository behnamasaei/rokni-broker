import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { Industry } from 'src/app/Models/Industry';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Industry[]> {
    return this.httpClient.get<Industry[]>(environment.baseApi + '/api/Industry/get-all-industries');
  }

  post(industry : Industry): Observable<Industry> {
    const body = {
      name : industry.name
    }
    return this.httpClient.post<Industry>(environment.baseApi + '/api/Industry' , body);
  }

  put(industry : Industry): Observable<Industry> {
    const body = {
      id: industry.id,
      name : industry.name
    }
    return this.httpClient.put<Industry>(environment.baseApi + `/api/Industry/${industry.id}`,body);
  }

  delete(id:string): Observable<any> {
    return this.httpClient.delete(environment.baseApi + `/api/Industry/${id}`);
  }
}
