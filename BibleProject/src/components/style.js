import React, { Component } from 'react';
import { Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class screenTwo extends React.Component {
    static navigationOptions = {
      title: 'Style',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Font"
          onPress={() => navigate('Button3')}
        />
      );
    }
  }