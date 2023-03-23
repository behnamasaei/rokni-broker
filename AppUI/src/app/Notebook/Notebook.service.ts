import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndustryNotebookDto, NotebookCreateUpdateDto, StockNotebookDto } from '../Models/Notebook';
import { Observable } from 'rxjs';
import { IndustryDto } from '../Models/Industry';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor(private httpClient: HttpClient) { }

  getIndustryNotebook(id: string): Observable<IndustryNotebookDto> {
    return this.httpClient.get<IndustryNotebookDto>(`${environment.baseApi}/api/app/industry-notebook/${id}`);
  }

  getStockNotebook(id: string): Observable<StockNotebookDto> { 
    return this.httpClient.get<StockNotebookDto>(`${environment.baseApi}/api/app/stock-notebook/${id}`);
  }


  putIndustryNoteBook(id: string, input: NotebookCreateUpdateDto): Observable<IndustryNotebookDto> {
    return this.httpClient.put<IndustryNotebookDto>(`${environment.baseApi}/api/app/industry-notebook/${id}`, input);
  }


  putStockNoteBook(id: string, input: NotebookCreateUpdateDto): Observable<StockNotebookDto> {
    return this.httpClient.put<StockNotebookDto>(`${environment.baseApi}/api/app/stock-notebook/${id}`, input);
  }
}
