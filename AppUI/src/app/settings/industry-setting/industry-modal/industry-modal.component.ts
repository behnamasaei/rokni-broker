import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndustryService } from './industry.service';
import { IndustryCreateUpdateDto } from 'src/app/Models/Industry';

@Component({
  selector: 'app-industry-modal',
  templateUrl: './industry-modal.component.html',
  styleUrls: ['./industry-modal.component.scss']
})
export class IndustryModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private config: DynamicDialogConfig,
    private service: IndustryService,
    private ref: DynamicDialogRef) {
  }

  ngOnInit(): void {
    if (this.config.data) {
      this.form = new FormGroup({
        id: new FormControl(this.config.data.id),
        name: new FormControl(this.config.data.name),
        codalLink: new FormControl(this.config.data.codalLink),
        chartsazLink: new FormControl(this.config.data.chartsazLink),
        tablokhaniLink: new FormControl(this.config.data.tablokhaniLink),
        tsetmcLink: new FormControl(this.config.data.tsetmcLink),
        rahvardLink: new FormControl(this.config.data.rahvardLink),
        shakhesbanLink: new FormControl(this.config.data.shakhesbanLink),
        chartIndex: new FormControl(this.config.data.chartIndex),
        sortNumber: new FormControl(this.config.data.sortNumber),
      })
    } else {
      this.form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        codalLink: new FormControl(''),
        chartsazLink: new FormControl(''),
        tablokhaniLink: new FormControl(''),
        tsetmcLink: new FormControl(''),
        rahvardLink: new FormControl(''),
        shakhesbanLink: new FormControl(''),
        industryId: new FormControl(''),
        chartIndex: new FormControl(''),
        sortNumber: new FormControl(''),
      })
    }
  }

  save() {
    let industry: IndustryCreateUpdateDto = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
      codalLink: this.form.get('codalLink')?.value,
      chartsazLink: this.form.get('chartsazLink')?.value,
      tablokhaniLink: this.form.get('tablokhaniLink')?.value,
      tsetmcLink: this.form.get('tsetmcLink')?.value,
      rahvardLink: this.form.get('rahvardLink')?.value,
      shakhesbanLink: this.form.get('shakhesbanLink')?.value,
      sortNumber: this.form.get('sortNumber')?.value,
      chartIndex: this.form.get('chartIndex')?.value,
      industryNotebookId: (this.config.data) ? this.config.data.industryNotebookId : '3fa85f64-5717-4562-b3fc-2c963f66afa6'
    }
    if (this.config.data) {
      this.service.put(industry).subscribe(res => {
        this.ref.close(res);
      });
    }
    else {
      this.service.post(industry).subscribe(res => {
        this.ref.close(res);
      });
    }
  }
}
