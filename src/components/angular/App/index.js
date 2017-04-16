import angular from 'angular';
import s from './App.scss';

angular.module('myApp', [])
  .component('mainApp', {
    template: `
      <div class="${s.root}">
        <div class="${s.header}">
          <h2>Hello Angular World!</h2>
        </div>
      </div>
    `
  });
