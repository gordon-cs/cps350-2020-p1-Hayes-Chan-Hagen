import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles'; 

export default class screenThree extends React.Component {
    static navigationOptions = {
      title: 'Font',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (

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
      );
    }
  }