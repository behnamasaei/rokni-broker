import { Component } from '@angular/core';

@Component({
  selector: 'settings-component',
  template: `
  <div class="container pt-5">
    <router-outlet></router-outlet>
  </div>
  `,
})
export class SettingsComponent {
  title = 'AppUI';
}
