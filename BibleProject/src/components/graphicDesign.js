import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles'; 
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import background5 from './images/background5.png';
import background6 from './images/background6.png';



export default class screenSix extends React.Component {
    static navigationOptions = {
      title: 'Graphic Design',
    };
    render() {
        return (
            <View style={{backgroundColor:"#fff",
            flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      
            <Image source = {background1}/>
            <Image source = {background2}/>
            <Image source = {background3}/>
            <Image source = {background4}/>
            <Image source = {background5}/>
            <Image source = {background6}/>
           
          </View>
          )
      }
  }