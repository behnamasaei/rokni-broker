import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Industry } from 'src/app/Models/Industry';
import { IndustryModalComponent } from './industry-modal/industry-modal.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IndustryService } from './industry-modal/industry.service';

@Component({
  selector: 'app-industry-setting',
  templateUrl: './industry-setting.component.html',
  styleUrls: ['./industry-setting.component.scss'],
  providers: [DialogService, MessageService]
})
export class IndustrySettingComponent implements OnInit {

  industries: Industry[] = [];


  constructor(public dialogService: DialogService,
    private service: IndustryService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.service.getAll().subscribe((res: Industry[]) => this.industries = res);
  }

  openNew() {
    const ref = this.dialogService.open(IndustryModalComponent, {
      header: 'افزودن صنعت',
      width: '70%'
    }).onClose.subscribe((res: Industry) => {
      this.industries.push(res);
    });
  }

  edit(industry: Industry) {
    const ref = this.dialogService.open(IndustryModalComponent, {
      header: 'ویرایش صنعت',
      width: '70%',
      data: industry
    }).onClose.subscribe((res: Industry) => {
      let index = this.industries.indexOf(industry);
      this.industries[index] = res;
    })
  }


  confirm(industry: Industry) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.delete(industry);
      }
    });
  }

  delete(industry: Industry) {
    this.service.delete(industry.id).subscribe((res: any) => {
      if (res === true) {
        this.industries = this.industries.filter(i => i.id !== industry.id);
      }
    });
  }

}