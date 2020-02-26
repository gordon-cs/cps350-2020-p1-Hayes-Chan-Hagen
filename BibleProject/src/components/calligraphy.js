import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Calligraphy extends React.Component {
  static navigationOptions = {
    title: 'Calligraphy',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiPreview = this.props.navigation.getParam('bibleApiFont');
    console.log(bibleApiPreview);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            alignSelf: 'center',
            paddingTop: 10,
          }}
          onPress={() => navigate('Step3', {bibleApiResult: bibleApiPreview})}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              paddingBottom: 60,
            }}>
            Caligraphy
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'Kindly Jasmine',
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
              alignSelf: 'center',
              padding: 15,
            }}>
            {' '}
            Kindly Jasmine{' '}
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                paddingTop: 100,
                fontSize: 50,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 50,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 50,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 50,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Vv{'  '}Ww{'  '}Xx{'  '}Yy{'  '}Zz
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
