/**
 * Simple React Native App to demonstrate interactive presentation of weather data.
 */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bible from './src/Bible';

export default class BibleApp extends Component {
  render() {
    return (
      <Bible/>
    );
  }
}