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
      title: 'Photography',
    };
    render() {
        return (
          <View style={{flex: 1, backgroundColor: '#95adbe'}}>
          <View style={{
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
            }}>
            
            <Image source = {image1} style={{ width: 100, height: 180 }}/>
            <Image source = {image2} style={{ width: 100, height: 180 }}/>
          </View>

          
          <View style={{
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
            }}>
  
            <Image source = {image3} style={{ width: 100, height: 180 }}/>
            <Image source = {image4} style={{ width: 100, height: 180 }}/>
          </View>
          

          <View style={{
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
            }}>
  
            <Image source = {image5} style={{ width: 100, height: 180 }}/>
            <Image source = {image6} style={{ width: 100, height: 180 }}/>
          </View>
            

  
                
          <View style={styles.buttonFormat}>
               <Button
                title="Purpose"
                color = '#d4d7dd'
                onPress={() => navigate('Button1')}/>

               <Button
                title="Style"
                color = '#738598'
                onPress={() => navigate('Button2')}/>

               <Button
                title="Font"
                color = '#3c4f65'
                onPress={() => navigate('Button3')}/>

               <Button
                title="Preview"
                color = '#f5c16c'
                onPress={() => navigate('Button4')}/>
              </View>
          </View>


          )
      }
  }