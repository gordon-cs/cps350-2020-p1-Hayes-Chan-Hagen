import React, { Component } from 'react';
import { Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
  
export default class screenThree extends React.Component {
    static navigationOptions = {
      title: 'Font',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Preview"
          onPress={() => navigate('Button4')}
        />
      );
    }
  }