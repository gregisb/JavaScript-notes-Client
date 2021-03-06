import React, { Fragment } from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';
import Header from './components/header';
import HomeScreen from './screens/home';
import Routes from './routes'
 
const App = () => (
  <Fragment>
    <Routes/>
  </Fragment>
)
 
export default App;