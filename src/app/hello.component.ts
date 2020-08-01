import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hi there! My name is</h2>
              <h1>{{ name }}</h1>
              <p>{{ tagline }}</p>`,
  styles: [`h1 { font-family: Lato; } p { font-family: Lato; } h2 { color: royalblue; font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() tagline: string;
}
