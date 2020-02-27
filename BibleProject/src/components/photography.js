import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import Triangle from 'react-native-triangle';

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
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingBottom: 10,
            paddingTop: 10,
          }}>
          Click on your preferred design
        </Text>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'center',
          }}>
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
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 10,
            marginTop: 70,
          }}
        />
        <View
          style={{
            justifyContent: 'flex-start',
            marginLeft: 10,
            marginRight: 330,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Style', {
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
              })
            }>
            <Triangle
              width={40}
              height={40}
              color={'white'}
              direction={'left'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
