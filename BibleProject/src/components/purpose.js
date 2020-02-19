import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Dimensions } from 'react-native';
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
        
        <View style={{flex: 1, backgroundColor: '#95adbe'}}>

        <TouchableOpacity
              style={{
                flex: 4,
                justifyContent: 'center',
                alignSelf: 'center',
                }} //navigate needs to bring up check option for either going to share or create
              onPress={() => navigate('Button1')}> 
              <Text style={{fontSize: 40, backgroundColor: '#95adbe',
              textAlign: 'center', borderWidth: 1 }}> Shareable </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
              style={{
                flex: 4,
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#465881',
                width: Dimensions.get('window').width,
                }}
              onPress={() => navigate('Button1')}>
              <Text style={{fontSize: 40, backgroundColor: '#465881',
              textAlign: 'center', borderWidth: 1, marginLeft: 80, marginRight: 80  }}> Screensaver </Text>
        </TouchableOpacity>
        
        
                
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



 