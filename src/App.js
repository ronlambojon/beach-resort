import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/rooms' component={Rooms}/>
          <Route exact path='/rooms/:slug' component={SingleRoom}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
