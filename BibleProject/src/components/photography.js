import React, {Component} from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ImagePicker from 'react-native-image-picker';
import styles from '../styles';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

export default class photography extends React.Component {
  static navigationOptions = {
    title: 'Photography',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiPhoto = this.props.navigation.getParam('bibleApiDesign');
    return (
      <View style={{flex: 1, backgroundColor: '#e1f2fb'}}>
        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image1,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image1}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image2,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image2}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image3,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image3}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image4,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image4}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image5,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image5}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Preview', {
                photo: image6,
                bibleApiPreview: bibleApiPhoto,
              });
            }}>
            <Image
              source={image6}
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
            onPress={() => this.props.navigation.navigate('Button1')}
          />

          <Button
            title="Style"
            color="#738598"
            onPress={() => this.props.navigation.navigate('Button2')}
          />

          <Button
            title="Font"
            color="#3c4f65"
            onPress={() => this.props.navigation.navigate('Button3')}
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() => this.props.navigation.navigate('Button4')}
          />
        </View>
      </View>
    );
  }
}
