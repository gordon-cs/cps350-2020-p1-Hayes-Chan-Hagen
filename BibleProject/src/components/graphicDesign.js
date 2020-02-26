import React, {Component} from 'react';
import {Button, View, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import background5 from './images/background5.png';
import background6 from './images/background6.png';

export default class graphicDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      bibleApiPreview: null,
      bibleRPreview: null,
    };
  }

  static navigationOptions = {
    title: 'Graphic Design',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiGraphic = this.props.navigation.getParam('bibleApiDesign');
    const bibleRGraphic = this.props.navigation.getParam('bibleRDesign');
    console.log(bibleApiGraphic);
    console.log(bibleRGraphic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
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
                pic: background1,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background1}
              style={{marginRight: 60, marginLeft: 60, width: 90, height: 170}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: background2,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background2}
              style={{marginRight: 60, marginLeft: 60, width: 90, height: 170}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: background3,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background3}
              style={{
                marginTop: 5,
                marginRight: 60,
                marginLeft: 60,
                width: 90,
                height: 170,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: background4,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background4}
              style={{
                marginTop: 5,
                marginRight: 60,
                marginLeft: 60,
                width: 90,
                height: 170,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: background5,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background5}
              style={{
                marginTop: 10,
                marginRight: 60,
                marginLeft: 60,
                width: 90,
                height: 170,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('Step2', {
                pic: background6,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              });
            }}>
            <Image
              source={background6}
              style={{
                marginTop: 10,
                marginRight: 60,
                marginLeft: 60,
                width: 90,
                height: 170,
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
          <Button
            title="Back"
            onPress={() =>
              this.props.navigation.navigate('Style', {
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
              })
            }
          />
        </View>
      </View>
    );
  }
}
