import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';

export default class screenOne extends React.Component {
    static navigationOptions = {
      title: 'Purpose',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        
        <View style={styles.container}>

        <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                borderWidth: 1,
                padding: 15,
                backgroundColor: '#95adbe'
                }} //navigate needs to bring up check option for either going to share or create
              onPress={() => navigate('Button1')}> 
              <Text style={{fontSize: 40 }}> Shareable </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                borderWidth: 1,
                padding: 15,
                backgroundColor: '#27496d'
                }}
              onPress={() => navigate('Button1')}>
              <Text style={{fontSize: 40 }}> Screensaver </Text>
        </TouchableOpacity>
        
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
         </View>
      );
    }
  }



 