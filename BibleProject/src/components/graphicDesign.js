import React, {Component} from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
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
    const {navigate} = this.props.navigation;
    const bibleApiGraphic = this.props.navigation.getParam('bibleApiDesign');
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background1,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background1}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background2,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background2}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background3,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background3}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background4,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background4}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background5,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background5}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                pic: background6,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background6}
              style={{
                marginRight: 60,
                marginLeft: 60,
                width: 100,
                height: 180,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
