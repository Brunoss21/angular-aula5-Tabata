import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CiclosComponent } from './ciclos/ciclos.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CiclosComponent],
  template: `
    <app-ciclos></app-ciclos>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
