import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles'; 

export default class screenFive extends React.Component {
    static navigationOptions = {
      title: 'Layout',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Text>HI</Text>

        );
    }
  }