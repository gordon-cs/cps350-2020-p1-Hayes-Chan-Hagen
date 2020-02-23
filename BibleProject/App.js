/**
 * Simple React Native App to demonstrate interactive presentation of weather data.
 */
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import purpose from './src/components/purpose';
import style from './src/components/style';
import font from './src/components/font';
import preview from './src/components/preview';
import HomeScreen from './src/components/home';
import graphicDesign from './src/components/graphicDesign';
import photography from './src/components/photography';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Button1: {screen: purpose},
    Button2: {screen: style},
    Button3: {screen: font},
    Button4: {screen: preview},
    Button5: {screen: graphicDesign},
    Button6: {screen: photography},
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(MainNavigator);
