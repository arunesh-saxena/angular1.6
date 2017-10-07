import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './app.config';

import home from '../features/home';

import '../style/app.css';
import '../style/main.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.name = 'Arunesh saxena';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router', 'app.home'])
  .config(routing)
  .directive('myApp', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;