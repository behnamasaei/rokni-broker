import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { StockDto } from 'src/app/Models/Stock';
import { IndustryService } from '../industry-setting/industry-modal/industry.service';
import { StockModalComponent } from './stock-modal/stock-modal.component';
import { StockServiceService } from './stock-service.service';
import { IPagedAndSortedResultDto } from 'src/app/Models/CommonModels';

@Component({
  selector: 'app-stock-setting',
  templateUrl: './stock-setting.component.html',
  styleUrls: ['./stock-setting.component.scss'],
  providers: [DialogService, MessageService]
})
export class StockSettingComponent implements OnInit {
  stocks: StockDto[] = [];
  paged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 1000 }

  constructor(public dialogService: DialogService,
    private service: StockServiceService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit(): void {
    this.service.getWithDetail(this.paged).subscribe((res) => this.stocks = res.items)

  }

  openNew() {
    const ref = this.dialogService.open(StockModalComponent, {
      header: 'افزودن سهام',
      width: '70%'
    }).onClose.subscribe((res: StockDto) => {
      this.stocks.push(res);
    });
  }

  edit(stock: StockDto) {
    const ref = this.dialogService.open(StockModalComponent, {
      header: 'ویرایش سهام',
      width: '70%',
      data: stock
    }).onClose.subscribe((res: StockDto) => {
      if(res){
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
      }
    });
  }
}

