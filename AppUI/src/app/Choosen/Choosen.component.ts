import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../settings/industry-setting/industry-modal/industry.service';
import { StockServiceService } from '../settings/stock-setting/stock-service.service';
import { IPagedAndSortedResultDto, IPagedResult, NoteBookType } from '../Models/CommonModels';
import { IndustryDto } from '../Models/Industry';
import { StockDto } from '../Models/Stock';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { NotebookComponent } from '../Notebook/Notebook.component';
import { IndustryNotebookDto } from '../Models/Notebook';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';

@Component({
  selector: 'app-Choosen',
  templateUrl: './Choosen.component.html',
  styleUrls: ['./Choosen.component.scss']
})
export class ChoosenComponent implements OnInit {

  industries: IPagedResult<IndustryDto>
  industryPeged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 4 }

  stocks: IPagedResult<StockDto>
  stockPeged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 4 }

  constructor(
    private industryService: IndustryService,
    private stockService: StockServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.industryService.getChoosen(this.industryPeged).subscribe((data) => { this.industries = data; })

    this.stockService.getChoosen(this.stockPeged).subscribe((data) => { this.stocks = data; });
  }



  industryNoteBook(industry: IndustryDto) {
    const ref = this.dialogService.open(NotebookComponent, {
      header: 'یادداشت',
      width: '70%',
      height: '90%',
      data: {
        type: NoteBookType.industry,
        id: industry.id,
        noteBookId: industry.industryNotebookId
      }
    }).onClose.subscribe((res: IndustryNotebookDto) => {
      if (res) {
        debugger
        let index = this.industries.items.findIndex(e => e.id === industry.id);
        this.industries.items[index].industryNotebook = res;
        this.messageService.add({ severity: 'success', detail: 'عملیات با موفقیت انجام شد' })
      }
    })
  }

  noteBookStock(stock: StockDto) {
    const ref = this.dialogService.open(NotebookComponent, {
      header: 'یادداشت',
      width: '70%',
      height: '90%',
      data: {
        type: NoteBookType.stock,
        id: stock.id,
        noteBookId: stock.stockNotebookId
      }
    }).onClose.subscribe((res: StockDto) => {
      if (res) {
        this.messageService.add({ severity: 'success', detail: 'عملیات با موفقیت انجام شد' })
      }
    })
  }

  paginateIndustry(event: any) {
    this.industryPeged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.industryService.getChoosen(this.industryPeged).subscribe(res => {
      this.industries = res
    });
  }

  paginateStock(event: any) {
    this.stockPeged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.stockService.getChoosen(this.stockPeged).subscribe(res => {
      this.stocks = res
    });
  }

  updateChoosenIndustry(id: string, choosen: boolean, industry: IndustryDto) {
    this.industryService.updateChoosen(id, choosen).subscribe((result: boolean) => {
      if (result) {
        industry.choosen = !industry.choosen;
        let index = this.industries.items.findIndex(e => e.id === id);
        this.industries.items[index] = industry;
      }
    });
  }

  updateChoosenStock(id: string, choosen: boolean, stock: StockDto) {
    this.stockService.updateChoosen(id, choosen).subscribe((result: boolean) => {
      if (result === true) {
        stock.choosen = !stock.choosen;
        let index = this.stocks.items.findIndex(e => e.id === id);
        this.stocks.items[index] = stock;
      }
    });
  }

  openFrameModal(link: string) {
    const ref = this.dialogService.open(IframeModalComponent, {
      width: '90%',
      height: '100%',
      dismissableMask: true,
      maximizable: true,
      rtl: true,
      resizable: true,
      draggable: true,
      data: {
        url: link
      }
    })
  }

}
