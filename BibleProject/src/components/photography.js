import React, {Component} from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

export default class photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      bibleApiPreview: null,
      bibleRPreview: null,
    };
  }

  static navigationOptions = {
    title: 'Photography',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiPhoto = this.props.navigation.getParam('bibleApiDesign');
    const bibleRPhoto = this.props.navigation.getParam('bibleRDesign');
    console.log(bibleApiPhoto);
    console.log(bibleRPhoto);
    return (
      <View style={{flex: 1, backgroundColor: '#e1f2fb'}}>
        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: image1,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
              });
            }}>
            <Image
              source={image1}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: image2,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
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
              navigate('Step2', {
                pic: image3,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
              });
            }}>
            <Image
              source={image3}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: image4,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
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
              navigate('Step2', {
                pic: image5,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
              });
            }}>
            <Image
              source={image5}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: image6,
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
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
            onPress={() => this.props.navigation.navigate('Purpose')}
          />

          <Button
            title="Style"
            color="#738598"
            onPress={() => this.props.navigation.navigate('Style')}
          />

          <Button
            title="Font"
            color="#3c4f65"
            onPress={() =>
              navigate('Font', {
                pic: this.state.pic,
                bibleApiPreview: this.state.bibleApiPreview,
              })
            }
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() =>
              navigate('Preview', {
                pic: this.state.pic,
              })
            }
          />
        </View>
      </View>
    );
  }
}
