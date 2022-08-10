import React from 'react';
import Header from './components/ui/atoms/Header';
import './App.css';
import AddressSearch from './components/ui/organisms/AddressSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text='郵便番号検索'></Header>
      </header>
      <AddressSearch></AddressSearch>
    </div>
  );
}

export default App;
