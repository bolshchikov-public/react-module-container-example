import React from 'react';
import s from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'Hello React World!'}</h2>
        </div>
      </div>
    );
  }
}

export default App;
