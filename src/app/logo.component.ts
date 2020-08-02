import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  template: `<h1>AK <span class="dot"></span></h1>`,
  styles: [`h1 { font-weight: bolder; text-align: center;} .dot { height: 15px; width: 15px; background-color: royalblue; border-radius: 50%; display: inline-block; margin-bottom: 1%;}`]
})
export class LogoComponent  {}
