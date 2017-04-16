import React from 'react';
import s from './App.scss';
import {ModuleRegistry} from 'react-module-container';

class App extends React.Component {
  componentWillMount() {
    this.setState(() => ({
      AngularComponent: ModuleRegistry.component('angular.main')
    }));
  }
  render() {
    const AngularComponent = this.state.AngularComponent;
    const topology = {
      staticsBaseUrl: window.__STATICS_BASE_URL__
    };

    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'Hello React World!'}</h2>
        </div>
        <AngularComponent topology={topology}/>
      </div>
    );
  }
}

export default App;
