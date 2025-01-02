// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Team from './components/team';
import Index from './components/index';
import Service from './components/service';
import Shop from './components/shop';
class App extends Component {

  render() {
    return <>
      <Index />
      <Service />
      <Team />
      <Shop />
    </>
  }
}
export default App;
