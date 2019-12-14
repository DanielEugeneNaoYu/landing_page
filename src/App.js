import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Videos from "./components/Videos";


class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Header />
          <Videos/ >
          <About/ >
        </div>
    )
  }
}

export default App;
