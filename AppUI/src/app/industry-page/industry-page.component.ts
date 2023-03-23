import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IndustryDto } from '../Models/Industry';
import { IndustryService } from '../settings/industry-setting/industry-modal/industry.service';
import { DialogService } from 'primeng/dynamicdialog';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';
import { StockDto } from '../Models/Stock';
import { IPagedAndSortedResultDto, NoteBookType } from '../Models/CommonModels';
import { NotebookComponent } from '../Notebook/Notebook.component';
import { MessageService } from 'primeng/api';
import { StockServiceService } from '../settings/stock-setting/stock-service.service';

@Component({
  selector: 'app-industry-page',
  templateUrl: './industry-page.component.html',
  styleUrls: ['./industry-page.component.scss']
})
export class IndustryPageComponent implements OnInit {
  itemId: string | null = '';
  industry: IndustryDto;
  stocks: StockDto[] = [];
  totalStockRecord: number = 0;
  paged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 6 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private industryService: IndustryService,
    private stockService: StockServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,) { }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Call your ngOnInit() method here:
        this.ngOnInit();
      }
    });
    this.itemId = this.route.snapshot.paramMap.get('id');

    this.industryService.getById(this.itemId).subscribe(industry => this.industry = industry);
    this.stockService.getSotckWithIndustryId(this.itemId, this.paged).subscribe(res => {
      this.stocks = res.items;
      this.totalStockRecord = res.totalCount
    })
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

  noteBookIndustry(industry: IndustryDto) {
    const ref = this.dialogService.open(NotebookComponent, {
      header: 'یادداشت',
      width: '70%',
      height: '90%',
      data: {
        type: NoteBookType.industry,
        id: industry.id,
        noteBookId: industry.industryNotebookId
      }
    }).onClose.subscribe((res: IndustryDto) => {
      if (res) {
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

  paginate(event: any) {
    this.paged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.stockService.getSotckWithIndustryId(this.itemId, this.paged).subscribe(res => {
      this.stocks = res.items;
      this.totalStockRecord = res.totalCount
    })
  }
}
