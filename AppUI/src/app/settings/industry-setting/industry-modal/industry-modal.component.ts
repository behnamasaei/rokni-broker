import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndustryService } from './industry.service';

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
    private ref: DynamicDialogRef,) {
  }

  ngOnInit(): void {
    if(this.config.data){
      this.form = new FormGroup({
        id: new FormControl(this.config.data.id),
        name: new FormControl(this.config.data.name),
      })
    }else{
      this.form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
      })
    }
  }

  save() {
    if (this.config.data) {
      this.service.put(this.form.value).subscribe(res => {
        this.ref.close(res);
      });
    }
    else {
      this.service.post(this.form.value).subscribe(res => {
        this.ref.close(res);
      });
    }
  }
}
