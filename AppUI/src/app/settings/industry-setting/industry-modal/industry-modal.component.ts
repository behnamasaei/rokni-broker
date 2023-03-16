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
      })
    } else {
      this.form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
      })
    }
  }

  save() {
    let industry: IndustryCreateUpdateDto = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
    }
    if (this.config.data) {
      this.service.put(industry, this.form.get('id')?.value).subscribe(res => {
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
