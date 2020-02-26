import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Step4',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiShow = this.props.navigation.getParam('bibleApiResult');
    console.log(bibleApiShow);
    console.log(this.props.navigation.state.params.pic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
              padding: 20,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 30,
            }}>
            {' '}
            Step 4: Finsihed{' '}
          </Text>
          <Text style={{paddingTop: 40, fontSize: 22, textAlign: 'center'}}>
            Save your image to share and send{' '}
          </Text>
          <Text style={{paddingTop: 10, fontSize: 22, textAlign: 'center'}}>
            or save as a new screensaver{' '}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              backgroundColor: '#465881',
              alignSelf: 'center',
              textAlign: 'center',
              borderWidth: 1,
              padding: 20,
              marginBottom: 120,
              marginLeft: 20,
              marginRight: 20,
            }}>
            {' '}
            Press Here{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
