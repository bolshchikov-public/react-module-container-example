import angular from 'angular';
import s from './App.scss';

class MainAppController {
  constructor() {
    this.value = 5;
  }
  increase() {
    this.value += 1;
  }
  decrease() {
    this.value -= 1;
  }
}

angular.module('myApp', [])
  .component('mainApp', {
    controller: MainAppController,
    template: `
      <div class="${s.root}">
        <div class="${s.header}">
          <h2>Hello Angular World!</h2>
        </div>
        <div>
          <span>Counter: "{{$ctrl.value}}"</span>
          <button ng-click="$ctrl.increase()">+</button>
          <button ng-click="$ctrl.decrease()">-</button>
        </div>
      </div>
    `
  });
