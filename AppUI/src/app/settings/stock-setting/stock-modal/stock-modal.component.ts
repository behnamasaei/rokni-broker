import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndustryDto } from 'src/app/Models/Industry';
import { StockCreateUpdateDto, StockDto } from 'src/app/Models/Stock';
import { IndustryModalComponent } from '../../industry-setting/industry-modal/industry-modal.component';
import { IndustryService } from '../../industry-setting/industry-modal/industry.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IPagedAndSortedResultDto } from 'src/app/Models/CommonModels';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss'],

})
export class StockModalComponent implements OnInit {
  form: FormGroup;

  /**
   *
   */
  constructor(
    private config: DynamicDialogConfig,
    private service: StockServiceService,
    private ref: DynamicDialogRef,
    private industryService: IndustryService
  ) {

  }


  industries: IndustryDto[] = [];
  ipaged: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 1000 };

  ngOnInit(): void {
    this.industryService.getAll(this.ipaged).subscribe((res) => this.industries = res.items);

    if (this.config.data) {
      this.form = new FormGroup({
        name: new FormControl(this.config.data.name),
        codalLink: new FormControl(this.config.data.codalLink),
        chartsazLink: new FormControl(this.config.data.chartsazLink),
        tablokhaniLink: new FormControl(this.config.data.tablokhaniLink),
        tsetmcLink: new FormControl(this.config.data.tsetmcLink),
        rahvardLink: new FormControl(this.config.data.rahvardLink),
        shakhesbanLink: new FormControl(this.config.data.shakhesbanLink),
        industryId: new FormControl(this.config.data.industry),
      })
    } else {
      this.form = new FormGroup({
        name: new FormControl(''),
        codalLink: new FormControl(''),
        chartsazLink: new FormControl(''),
        tablokhaniLink: new FormControl(''),
        tsetmcLink: new FormControl(''),
        rahvardLink: new FormControl(''),
        shakhesbanLink: new FormControl(''),
        industryId: new FormControl(''),
      })
    }
  }


  save() {
    const stock: StockCreateUpdateDto = {
      Name: this.form.get('name')?.value,
      CodalLink: this.form.get('codalLink')?.value,
      ChartsazLink: this.form.get('chartsazLink')?.value,
      TablokhaniLink: this.form.get('tablokhaniLink')?.value,
      TsetmcLink: this.form.get('tsetmcLink')?.value,
      RahvardLink: this.form.get('rahvardLink')?.value,
      ShakhesbanLink: this.form.get('shakhesbanLink')?.value,
      IndustryId: this.form.get('industryId')?.value.id,
    }

    if (this.config.data) {

    } else {
      this.service.post(stock).subscribe((res)=>{
        console.log(res);
      })
    }
  }
}
