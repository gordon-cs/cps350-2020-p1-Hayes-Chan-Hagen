import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles'; 
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';


export default class screenFive extends React.Component {
    static navigationOptions = {
      title: 'Layout',
    };
    render() {
        return (
            <View style={{justifyContent:"center",backgroundColor:"#fff",
            flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      
            <Image source = {image1}/>
            <Image source = {image2}/>
            <Image source = {image3}/>
            <Image source = {image4}/>
            <Image source = {image5}/>
            <Image source = {image6}/>
           
          </View>
          )
      }
  }