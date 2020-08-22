import { Component, Input } from '@angular/core';

@Component({
  selector: 'web',
  templateUrl: './web.component.html',
  styleUrls: [ './web.component.css' ]
})
export class WebComponent  {
  @Input() name: string;
  @Input() tagline: string;
  @Input() quote: string;
}
