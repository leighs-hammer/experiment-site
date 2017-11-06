import React, { Component } from 'react';

/**
 * Styling & Assets
 */
import './App.css';
/**
* Components
*/

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="Grid">
        <Header />
        <aside />
        <div className="MainGrid" />
        <footer />
      </div>
    )
  }
}

export default App;
