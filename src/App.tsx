import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store } from './state'
import RepositoriesList from './RepositoriesList'

function App() {
  return (
    <Provider store={store}>
     <div className="App">
        <h1>Search for A Repo</h1>
        <RepositoriesList />
     </div>
    </Provider>

  );
}

export default App;
