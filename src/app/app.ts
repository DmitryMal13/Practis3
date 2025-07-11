import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    { id: 1, name: 'Объект 1', date: new Date(2025, 6, 11) },
    { id: 2, name: 'Объект 2', date: new Date(2025, 6, 12) },
    { id: 3, name: 'Объект 3', date: new Date(2025, 6, 13) },
  ];

  currentNumber = 10; // число для кастомного pipe
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive'
})
export class AddFivePipe implements PipeTransform {
  transform(value: number): number {
    return value + 5;
  }
}