import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit {
  title = 'AppUI';
  menubar: MenuItem[] = [];

  ngOnInit(): void {
    this.menubar = [
      {
        label: 'صفحه نخست',
        routerLink:['/']
      },
      {
        label: 'تنظیمات',
        items: [{
          label: 'صنایع',
          routerLink: ['/settings/industry']
        },
        {
          label: 'سهام',
          routerLink: ['/settings/stock']
        },
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
  }
}
