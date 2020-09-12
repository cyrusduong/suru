import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Toolbar from './components/Toolbar';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Header />
      <List />
    </div >
  );
}

export default App;
