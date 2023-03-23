import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-iframe-modal',
  templateUrl: './iframe-modal.component.html',
  styleUrls: ['./iframe-modal.component.scss']
})
export class IframeModalComponent implements OnInit {

  linkWebPage: string = '';

  /**
   *
   */
  constructor(
    private config: DynamicDialogConfig,
  ) {
    this.linkWebPage = this.config.data.url;
  }

  ngOnInit(): void {
    this.linkWebPage = this.config.data.url;
  }
}
