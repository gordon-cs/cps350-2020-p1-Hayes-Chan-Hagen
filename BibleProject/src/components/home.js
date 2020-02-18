import React, { Component } from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import logo from './images/logo.png';
import styles from '../styles';
import Bible from '../Bible';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style = {styles.container}>
          <View style = {styles.logo}><Image source = {logo}/></View>
           
            <Text>Hello!{this.props.bibleSource}</Text>
               
                <View style={styles.bottomBar}>
                
                  <View style={styles.buttonFormat}>
                      <TouchableOpacity
                      style={styles.beginButton}
                      onPress={() => navigate('Button1')}>
                      <Text> CLICK TO BEGIN DESIGNING </Text>
                      </TouchableOpacity>
                  </View>
                 
                </View>
          
          </View>

       
      );
    }
  }