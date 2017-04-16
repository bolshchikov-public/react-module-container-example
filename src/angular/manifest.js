import {ModuleRegistry, AngularLazyComponent} from 'react-module-container';

class NgMainApp extends AngularLazyComponent {
  constructor(props) {
    super(props, {
      files: [
        `${props.topology.staticsBaseUrl}angular-client.css`,
        `${props.topology.staticsBaseUrl}angular-client.bundle.js`
      ],
      module: 'myApp',
      component: 'main-app',
      unloadStylesOnDestroy: true
    });
  }
}

ModuleRegistry.registerComponent('angular.main', () => NgMainApp);
