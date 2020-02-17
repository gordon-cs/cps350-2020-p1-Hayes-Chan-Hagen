import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import logo from './logo.png';
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
                
                  <View style={styles.purposeB}>
                      <Button
                        title="Purpose"
                        onPress={() => navigate('Button1')}/>
                  </View>

                  <View style={styles.styleB}>
                      <Button
                        title="Style"
                        onPress={() => navigate('Button2')}/>
                  </View>

                  <View style={styles.fontB}>
                      <Button
                        title="Font"
                        onPress={() => navigate('Button3')}/>
                  </View>

                  <View style={styles.fontB}>
                      <Button
                        title="Preview"
                        onPress={() => navigate('Button4')}/>
                  </View>

                 
                </View>
          
          </View>

       
      );
    }
  }