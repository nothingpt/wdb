import React, { Component } from 'react';
import './App.css';

// Components
import ClientList from './components/ClientList';

class App extends Component {
  render() {
    return (
      <div>
        <ClientList />
      </div>
    );
  }
}

export default App;
