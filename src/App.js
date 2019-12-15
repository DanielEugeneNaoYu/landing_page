import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Videos from "./components/Videos";
import QR from "./components/QR";
import Navbar from "./components/Navbar";


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Header />
        <QR />
        <Videos />
        <About />
      </div>
    )
  }
}

export default App;
