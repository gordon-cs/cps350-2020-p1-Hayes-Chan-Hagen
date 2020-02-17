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
            
            <Button 
              title="Graphic Design"
              onPress={() => navigate('Button5')}/>
        
            <Button 
              title="Photography"
              onPress={() => navigate('Button5')}/>


        
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

  