import * as React from 'react';
import './App.css';
import * as logo from './logo.svg';

enum A {
  B = 1,
  C,
  D,
}

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {A.B}, {A.C}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
