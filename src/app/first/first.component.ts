import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div class="cmp">First Component</div>
    <style>
      .cmp {
        border: 3px solid darkcyan;        
      }
    </style>
  `,
})

export class FirstComponent {
  constructor() { }
}
