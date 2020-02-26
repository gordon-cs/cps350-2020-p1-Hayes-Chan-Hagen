import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class font extends React.Component {
  static navigationOptions = {
    title: 'Font',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiCalli = this.props.navigation.getParam('bibleApiType');
    console.log(bibleApiCalli);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() =>
            navigate('Calligraphy', {
              bibleApiFont: bibleApiCalli,
            })
          }>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              backgroundColor: '#95adbe',
              padding: 30,
              borderWidth: 1,
            }}>
            {' '}
            Calligraphy{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#465881',
            width: Dimensions.get('window').width,
            paddingTop: 10,
          }}
          onPress={() =>
            navigate('Simple', {
              //pic: this.props.navigation.state.params.pic,
              bibleApiPreview: this.props.navigation.state.params
                .bibleApiPreview,
            })
          }>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              backgroundColor: '#465881',
              borderWidth: 1,
              padding: 30,
              marginLeft: 100,
              marginRight: 100,
            }}>
            {' '}
            Simple{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
