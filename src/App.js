import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Videos from "./components/Videos";
import QR from "./components/QR";
import Navbar from "./components/Navbar";
import Twitter from "./components/Twitter";


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Header />
        <QR />
        <Videos />
        <Twitter />
        <About />
      </div>
    )
  }
}

export default App;
