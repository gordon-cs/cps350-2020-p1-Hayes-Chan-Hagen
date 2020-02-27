import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Font',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiCalli = this.props.navigation.getParam('bibleApiType');
    const bibleRCalli = this.props.navigation.getParam('bibleRType');
    console.log(bibleApiCalli);
    console.log(bibleRCalli);
    console.log(this.props.navigation.state.params.pic);
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
              pic: this.props.navigation.state.params.pic,
              bibleApiFont: bibleApiCalli,
              bibleRFont: bibleRCalli,
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
              pic: this.props.navigation.state.params.pic,
              bibleApiFont: bibleApiCalli,
              bibleRFont: bibleRCalli,
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
