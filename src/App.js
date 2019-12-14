import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Videos from "./components/Videos";
import QR from "./components/QR";


class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Header />
          <QR />
          <Videos />
          <About />
        </div>
    )
  }
}

export default App;
