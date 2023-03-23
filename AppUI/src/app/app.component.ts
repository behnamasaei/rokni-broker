import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IndustryService } from './settings/industry-setting/industry-modal/industry.service';
import { IPagedAndSortedResultDto } from './Models/CommonModels';
import { IndustryDto } from './Models/Industry';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit {
  title = 'AppUI';
  menubar: MegaMenuItem[] = [];
  contactUsDisplay: boolean = false;
  pagedResult: IPagedAndSortedResultDto = { Sorting: '', SkipCount: 0, MaxResultCount: 1000 }
  industries: IndustryDto[] = [];
  /**
   *
   */
  constructor(
    private industryService: IndustryService
  ) {

  }

  ngOnInit(): void {
    this.industryService.getAll(this.pagedResult).subscribe((res) => {
      this.industries = res.items;
      this.seedMenu();
    })
  }

  showDialog() {
    this.contactUsDisplay = true;
  }

  seedMenu() {

    const industyMenu: any[] = [];
    let tempMenuItem: any[] = [];

    let counter = 0;
    while (counter < this.industries.length) {


      tempMenuItem.push(
        {
          label: this.industries[counter].name, routerLink: [`/industry/${this.industries[counter].id}`]
        }
      )

      if ((counter % 10 === 0 && counter !== 0) || (counter === this.industries.length - 1)) {
        industyMenu.push(
          [{
            items: tempMenuItem
          }]
        )
        tempMenuItem = [];
      }
      counter++;
    }

    this.menubar = [
      {
        label: 'صفحه نخست',
        routerLink: ['/']
      },
      {
        label: 'صنایع',
        items: industyMenu
      },
      {
        label: 'تنظیمات',
        items: [
          [
            {
              items: [{ label: 'صنایع', routerLink: ['/settings/industry'] }, { label: 'سهام', routerLink: ['/settings/stock'] }]
            },
          ]
        ]
      },
    ];
  }
}
