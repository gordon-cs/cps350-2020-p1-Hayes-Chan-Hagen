import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from  '../styles';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class screenTwo extends React.Component {
    static navigationOptions = {
      title: 'Style',
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
                }}
              onPress={() => navigate('Button5')}>
              <Text style={{fontSize: 40 }}> Graphic Design </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                borderWidth: 1,
                padding: 15,
                backgroundColor: '#e1f2fb'
                }}
              onPress={() => navigate('Button6')}>
              <Text style={{fontSize: 40 }}> Photography </Text>
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

  