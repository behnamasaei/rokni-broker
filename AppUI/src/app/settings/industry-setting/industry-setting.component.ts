import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { IndustryModalComponent } from './industry-modal/industry-modal.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IndustryService } from './industry-modal/industry.service';
import { IndustryDto } from 'src/app/Models/Industry';
import { IPagedAndSortedResultDto, IPagedResult } from 'src/app/Models/CommonModels';

@Component({
  selector: 'app-industry-setting',
  templateUrl: './industry-setting.component.html',
  styleUrls: ['./industry-setting.component.scss'],
  providers: [DialogService, MessageService]
})
export class IndustrySettingComponent implements OnInit {

  industries: IndustryDto[] = [];
  pagedResult: IPagedAndSortedResultDto = {
    Sorting: '',
    SkipCount: 0,
    MaxResultCount: 1000,
  }

  constructor(public dialogService: DialogService,
    private service: IndustryService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.service.getAll(this.pagedResult).subscribe((res: IPagedResult<IndustryDto>) => this.industries = res.items);
  }

  openNew() {
    const ref = this.dialogService.open(IndustryModalComponent, {
      header: 'افزودن صنعت',
      width: '70%'
    }).onClose.subscribe((res: IndustryDto) => {
      this.industries.push(res);
    });
  }

  edit(industry: IndustryDto) {
    const ref = this.dialogService.open(IndustryModalComponent, {
      header: 'ویرایش صنعت',
      width: '70%',
      data: industry
    }).onClose.subscribe((res: IndustryDto) => {
      if(res){
        let index = this.industries.indexOf(industry);
        this.industries[index] = res;
      }
    })
  }


  confirm(industry: IndustryDto) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.delete(industry);
      }
    });
  }

  delete(industry: IndustryDto) {
    this.service.delete(industry.id).subscribe((res: any) => {
      if (res === null) {
        this.industries = this.industries.filter(i => i.id !== industry.id);
      }
    });
  }

}