import React, {Component} from 'react';
import {Button, View, Image} from 'react-native';
import styles from '../styles';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import background5 from './images/background5.png';
import background6 from './images/background6.png';

export default class graphicDesign extends React.Component {
  static navigationOptions = {
    title: 'Graphic Design',
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <View
          style={{
            paddingTop: 12,
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
          }}>
          <Image source={background1} style={{width: 100, height: 180}} />
          <Image source={background2} style={{width: 100, height: 180}} />
        </View>

        <View
          style={{
            paddingTop: 12,
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
          }}>
          <Image source={background3} style={{width: 100, height: 180}} />
          <Image source={background4} style={{width: 100, height: 180}} />
        </View>

        <View
          style={{
            paddingTop: 12,
            flex: 1.5,
            flexDirection: 'row',
            alignContent: 'space-around',
            alignSelf: 'center',
            //flexWrap: 'wrap'
          }}>
          <Image source={background5} style={{width: 100, height: 180}} />
          <Image source={background6} style={{width: 100, height: 180}} />
        </View>

        <View style={styles.buttonFormat}>
          <Button
            title="Purpose"
            color="#d4d7dd"
            onPress={() => navigate('Button1')}
          />

          <Button
            title="Style"
            color="#738598"
            onPress={() => navigate('Button2')}
          />

          <Button
            title="Font"
            color="#3c4f65"
            onPress={() => navigate('Button3')}
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() => navigate('Button4')}
          />
        </View>
      </View>
    );
  }
}

//width: Dimensions.get('window').width}}
