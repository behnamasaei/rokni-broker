import { Component } from '@angular/core';

@Component({
  selector: 'settings-component',
  template: `<router-outlet></router-outlet>`,
})
export class SettingsComponent {
  title = 'AppUI';
}
