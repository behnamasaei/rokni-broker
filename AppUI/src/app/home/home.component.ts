import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';
import { IndustryService } from '../settings/industry-setting/industry-modal/industry.service';
import { IndustryDto } from '../Models/Industry';
import { IPagedAndSortedResultDto, NoteBookType } from '../Models/CommonModels';
import { NotebookComponent } from '../Notebook/Notebook.component';
import { MessageService } from 'primeng/api';
import { IndustryNotebookDto } from '../Models/Notebook';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  industries: IndustryDto[] = [];
  totalIndustries: number = 0;
  paged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 4 }
  searchValue: string = '';

  constructor(
    private dialogService: DialogService,
    private industryService: IndustryService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.industryService.getListWithDetail(this.paged).subscribe(res => {
      this.industries = res.items;
      this.totalIndustries = res.totalCount;
    });
  }


  noteBook(industry: IndustryDto) {
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
        let index = this.industries.findIndex(e => e.id === industry.id);
        this.industries[index].industryNotebook = res;
        this.messageService.add({ severity: 'success', detail: 'عملیات با موفقیت انجام شد' })
      }
    })
  }

  paginate(event: any) {
    this.paged = { Sorting: '', SkipCount: event.first, MaxResultCount: event.rows }

    this.industryService.getListWithDetail(this.paged).subscribe(res => {
      this.industries = res.items;
      this.totalIndustries = res.totalCount;
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
