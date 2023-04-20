import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../settings/stock-setting/stock-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { StockDto } from '../Models/Stock';
import { IPagedAndSortedResultDto, IPagedResult, NoteBookType } from '../Models/CommonModels';
import { NotebookComponent } from '../Notebook/Notebook.component';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';

@Component({
  selector: 'app-filtred',
  templateUrl: './filtred.component.html',
  styleUrls: ['./filtred.component.scss']
})
export class FiltredComponent implements OnInit {
  stocks: IPagedResult<StockDto>
  stockPeged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 4 }


  constructor(
    private stockService: StockServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,) { }

  ngOnInit() {

    this.stockService.getFiltred(this.stockPeged).subscribe((data) => { this.stocks = data; });
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


  paginateStock(event: any) {
    this.stockPeged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.stockService.getChoosen(this.stockPeged).subscribe(res => {
      this.stocks = res
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
