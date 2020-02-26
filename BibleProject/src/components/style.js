import React, {Component} from 'react';
import {Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../styles';

export default class style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //pic: null,
      bibleApiPreview: null,
    };
  }

  static navigationOptions = {
    title: 'Style',
  };

  render() {
    const {navigate} = this.props.navigation;
    const bibleApiStyle = this.props.navigation.getParam('bibleApiStep1');
    console.log(bibleApiStyle);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Graphic', {bibleApiDesign: bibleApiStyle})}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
            }}>
            {' '}
            Graphic Design{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#e1f2fb',
            width: Dimensions.get('window').width,
          }}
          onPress={() => navigate('Photo', {bibleApiDesign: bibleApiStyle})}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#e1f2fb',
              textAlign: 'center',
              borderWidth: 1,
              marginLeft: 80,
              marginRight: 80,
            }}>
            {' '}
            Photography{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
