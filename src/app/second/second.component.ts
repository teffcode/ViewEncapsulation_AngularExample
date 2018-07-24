import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="cmp">Second Component</div>
    <style>
      .cmp {
        border: 3px solid deepskyblue;
      }
    </style>
  `,
  encapsulation: ViewEncapsulation.Native
})

export class SecondComponent {
  constructor() { }
}