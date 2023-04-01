import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrokerType } from 'src/app/Models/CommonModels';
import { IndustryService } from 'src/app/settings/industry-setting/industry-modal/industry.service';
import { StockServiceService } from 'src/app/settings/stock-setting/stock-service.service';

@Component({
  selector: 'app-ComponentBase',
  templateUrl: './ComponentBase.component.html',
  styleUrls: ['./ComponentBase.component.css']
})
export class ComponentBaseComponent {



  constructor(
  ) {
  }


}
