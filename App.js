import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen';

export default class App extends Component {
  render() {
    return (
      <TabScreen/>
    );
  }
}