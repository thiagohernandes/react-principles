import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import SimpleComp from './SimpleComp';
import SimpleClassComp from './SimpleClassComp';
import TableProps from './TableProps';

const t = 'teste';

const characters = [
  {
      'name': 'Charlie',
      'job': 'Janitor'
  },
  {
      'name': 'Mac',
      'job': 'Bouncer'
  },
  {
      'name': 'Dee',
      'job': 'Aspring actress'
  },
  {
      'name': 'Dennis',
      'job': 'Bartender'
  }
];

class App extends Component {
  render() {
    return (
    /*  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

        <div className="container">
            <Table/>
            <SimpleComp/>
            <SimpleClassComp/>
        </div> */

        <div className="container">
            <TableProps characterData={characters} teste={t} />
        </div>
    );
  }
}

export default App;
