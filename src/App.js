import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";


class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Header />
          <About/ >
        </div>
    )
  }
}

export default App;
