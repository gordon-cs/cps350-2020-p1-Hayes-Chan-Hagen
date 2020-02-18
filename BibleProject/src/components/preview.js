import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';

 export default class screenFour extends React.Component {
    static navigationOptions = {
      title: 'Preview',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (

        <View style={styles.bottomBar}>
                
                  <View style={styles.buttonFormat}>
                      <Button
                        title="Purpose"
                        onPress={() => navigate('Button1')}/>
               
                      <Button
                        title="Style"
                        onPress={() => navigate('Button2')}/>
            
                      <Button
                        title="Font"
                        onPress={() => navigate('Button3')}/>
       
                      <Button
                        title="Preview"
                        onPress={() => navigate('Button4')}/>
                  </View>
         </View>
      );
    }
  }