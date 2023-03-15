import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-ciclos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css'],
})
export class CiclosComponent implements OnInit {
  timer;
  tAtiv: number = 0;

  iniciar() {
    if (this.tAtiv == 0) {
      this.timer = setInterval(() => {
        this.tAtiv = this.tAtiv + 1;
      }, 1000);
    }
  }

  zerar() {
    clearInterval(this.timer);
    this.tAtiv = 0;
  }

  ngOnInit() {}
}
