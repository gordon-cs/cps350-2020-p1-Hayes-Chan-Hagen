import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Step1 extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      bibleApiDisplay: null,
    };
  }*/
  static navigationOptions = {
    title: 'Step1',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApi = this.props.navigation.getParam('bibleApi');
    console.log(bibleApi);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Style', {bibleApiDisplay: bibleApi})}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
              padding: 35,
            }}>
            {' '}
            Step 1: Style{' '}
          </Text>
          <Text style={{paddingTop: 40, fontSize: 30, textAlign: 'center'}}>
            Pick the style
          </Text>
          <Text style={{paddingTop: 10, fontSize: 30, textAlign: 'center'}}>
            of your layout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
