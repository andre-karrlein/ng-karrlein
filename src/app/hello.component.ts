import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hi there! My name is</h2>
              <h1>{{ name }}</h1>
              <p>{{ tagline }}</p>`,
  styles: [`h2 { color: royalblue; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() tagline: string;
}
