/**
 * Simple React Native App to demonstrate interactive presentation of weather data.
 */
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import style from './src/components/style';
import font from './src/components/font';
import preview from './src/components/preview';
import HomeScreen from './src/components/home';
import step1 from './src/components/step1';
import step2 from './src/components/step2';
import step3 from './src/components/step3';
import step4 from './src/components/step4';
import calligraphy from './src/components/calligraphy';
import simple from './src/components/simple';
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
    Step1: {screen: step1},
    Style: {screen: style},
    Graphic: {screen: graphicDesign},
    Photo: {screen: photography},
    Step2: {screen: step2},
    Font: {screen: font},
    Calligraphy: {screen: calligraphy},
    Simple: {screen: simple},
    Step3: {screen: step3},
    Preview: {screen: preview},
    Step4: {screen: step4},
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(MainNavigator);
