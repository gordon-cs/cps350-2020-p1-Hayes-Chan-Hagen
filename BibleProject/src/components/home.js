import React, { Component } from 'react';
import { Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Purpose"
          onPress={() => navigate('Button1')}
        />
      );
    }
  }