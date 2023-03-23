import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { StockDto } from 'src/app/Models/Stock';
import { IndustryService } from '../industry-setting/industry-modal/industry.service';
import { StockModalComponent } from './stock-modal/stock-modal.component';
import { StockServiceService } from './stock-service.service';
import { IPagedAndSortedResultDto, NoteBookType } from 'src/app/Models/CommonModels';
import { NotebookComponent } from 'src/app/Notebook/Notebook.component';

@Component({
  selector: 'app-stock-setting',
  templateUrl: './stock-setting.component.html',
  styleUrls: ['./stock-setting.component.scss'],
  providers: [DialogService, MessageService]
})
export class StockSettingComponent implements OnInit {
  stocks: StockDto[] = [];
  totalRecords: number = 0;
  paged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 10 }
  loading: boolean = true;
  searchValue: string = '';

  constructor(public dialogService: DialogService,
    private service: StockServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {

  }

  ngOnInit(): void {
    this.loading = true;
  }

  loadData() {
    this.loading = true;
    this.service.getWithDetail(this.paged).subscribe((res) => {
      this.stocks = res.items;
      this.loading = false;
      this.totalRecords = res.totalCount;
    })
  }

  Search() {
    this.loading = true;
    this.service.getWithDetailByName(this.paged, this.searchValue).subscribe((res) => {
      this.stocks = res.items;
      this.loading = false;
      this.totalRecords = res.totalCount;
    })
  }

  paginate(event: any) {
    this.paged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.loading = true;
    this.service.getWithDetail(this.paged).subscribe((res) => {
      this.stocks = res.items;
      this.loading = false;
      this.totalRecords = res.totalCount;
    })
  }

  openNew() {
    this.dialogService.open(StockModalComponent, {
      header: 'افزودن سهام',
      width: '70%'
    }).onClose.subscribe((res: StockDto) => {
      this.stocks.unshift(res);
      this.totalRecords++;
    });
  }

  edit(stock: StockDto) {
    const ref = this.dialogService.open(StockModalComponent, {
      header: 'ویرایش سهام',
      width: '70%',
      data: stock
    }).onClose.subscribe((res: StockDto) => {
      if (res) {
        let index = this.stocks.indexOf(stock);
        this.stocks[index] = res;
      }
    })
  }

  confirm(stock: StockDto) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.deleteStock(stock);
      }
    });
  }

  deleteStock(stock: StockDto) {
    this.service.delete(stock.id).subscribe((res: any) => {
      if (res === null) {
        this.stocks = this.stocks.filter(i => i.id !== stock.id);
        this.totalRecords--;
      }
    });
  }

  noteBook(stock: StockDto) {
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
}

