
  import React, { Component } from 'react';
  import { Button } from 'react-native';
  import {createAppContainer} from 'react-navigation';
  import {createStackNavigator} from 'react-navigation-stack';

 export default class screenFour extends React.Component {
    static navigationOptions = {
      title: 'Preview',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      );
    }
  }