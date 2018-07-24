import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>View Encapsulation</h3>
    <div class="cmp">
      App Component
      <app-first></app-first>
      <app-second></app-second>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
