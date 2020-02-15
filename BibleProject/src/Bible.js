/*
 * Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from './styles';
import purpose from  './components/purpose';
import style from './components/style';
import font from './components/font';
import preview from  './components/preview';
import HomeScreen from './components/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


export default  class Bible extends Component  {

    constructor(props)  {
        super(props);
        this.state  = {
            isLoading: true
      //Set up methods by binding this for them
    }

      this.getBibleApi = this.getBibleApi.bind(this);
      this.getBibleApi2 = this.getBibleApi2.bind(this);

    }

  /* Get real API data when component is first loaded.
   * (Later, might want to refresh this periodically)
   * Caution: repo must stay private since it contains secret API key.
   * Todo: move API key to a file not in repo.
   */
  componentDidMount() {
    this.getBibleApi2();
  }
  
  async getBibleApi() {
    console.log("getBibleApi uses try await await catch");
    const BibleURL = 'https://bible-api.com/john%203:16';
      try {
          let response = await fetch('https://bible-api.com/john%203:16');
          let responseJson = await response.json();
          console.log(responseJSon);
          return responseJson;
          } 
      catch (error) {
        console.error(error);
        }
        console.log(this.state.BibleData);
        }

  getBibleApi2() {
    console.log("getBibleApi2 uses fetch.then.then.catch");
    //const BibleURL = 'https://bible-api.com/john%203:16';
      return fetch('https://bible-api.com/john%203:16')
        .then((response) => response.json())
        .then((responseJson) => { 
          this.setState({
            isLoading: false,
            BibleData: responseJson
          })
      }
    ) .catch((error) => {
    console.error(error);
    });
  }

  render() {
    
    if (this.state.isLoading) {
      // No data, show something in the meantime
      return (
      <View style={{justifyContent:"center",backgroundColor:"#fff", alignItems:"center"}}>
        <Text>Waiting for data ...</Text>
      </View>

      );
    } else {

      // Show data from API
      return (
        <View style={styles.container}>
        
        <AppContainer/>   
        <Text style = {styles.verse}>{this.state.BibleData.text}</Text>   
              <Text style = {styles.container3}>{this.state.BibleData.reference}</Text>
           
             
        </View>
    );
   }
  }
}



  
  const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Button1: {screen: purpose},
  Button2: {screen: style},
  Button3: {screen: font},
  Button4: {screen: preview}

}, 
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(MainNavigator);



