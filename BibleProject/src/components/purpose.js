import React, { Component } from 'react';
import { Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class screenOne extends React.Component {
    static navigationOptions = {
      title: 'Purpose',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Style"
          onPress={() => navigate('Button2')}
        />
      );
    }
  }



 