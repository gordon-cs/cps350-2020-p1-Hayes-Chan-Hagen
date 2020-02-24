import React, {Component} from 'react';
import {Button, View, ImageStore} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';
import Marker, { Position, ImageFormat } from 'react-native-image-marker'
import testimage from './images/image1.png';


export default class screenFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }
  static navigationOptions = {
    title: 'Preview',
  };

  render() {
    if(this.state.loading){
      Marker.markText({
        src: testimage,
        text: 'text marker', 
        position: 'topLeft', 
        color: '#FF0000',
        fontName: 'Arial-BoldItalicMT', 
        fontSize: 44, 
        scale: 1, 
        quality: 100
    }).then((res) => {
        console.log("the path is"+res)
        this.setState({
            loading: false,
            markResult: res
        })
    }).catch((err) => {
        console.log(err)
        this.setState({
            loading: false,
            err
        })
    })
    }
    const {navigate} = this.props.navigation;
    return (
      
      <View>
        <img>
          src={res} 
        </img> 

      
      <View style={styles.bottomBar}>
        <View style={styles.buttonFormat}>
          <Button title="Purpose" onPress={() => navigate('Button1')} />

          <Button title="Style" onPress={() => navigate('Button2')} />

          <Button title="Font" onPress={() => navigate('Button3')} />

          <Button title="Preview" onPress={() => navigate('Button4')} />
        </View>
      </View>
      </View>
    );
  }
}
