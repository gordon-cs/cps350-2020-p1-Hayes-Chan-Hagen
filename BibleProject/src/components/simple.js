import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Simple extends React.Component {
  static navigationOptions = {
    title: 'Simple',
  };
  render() {
    console.log(this.props.navigation.state.params);
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#465881'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            alignSelf: 'center',
            paddingTop: 10,
          }}
          onPress={() =>
            navigate('KindlyJ', {
              pic: this.props.navigation.state.params.pic,
              bibleApiPreview: this.props.navigation.state.params
                .bibleApiPreview,
            })
          }>
          <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 60}}>
            Simple
          </Text>
          <Text
            style={{
              fontSize: 40,
              //fontFamily: '',
              backgroundColor: '#465881',
              textAlign: 'center',
              borderWidth: 1,
              alignSelf: 'center',
              padding: 15,
            }}>
            {' '}
            Searocks Regular{' '}
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                paddingTop: 100,
                fontSize: 45,
                textAlign: 'center',
                alignSelf: 'center',
                //fontFamily: 'Kindly Jasmine',
              }}>
              Aa Bb Cc Dd Ee Ff Gg
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 45,
                textAlign: 'center',
                alignSelf: 'center',
                //fontFamily: 'Kindly Jasmine',
              }}>
              Hh Ii Jj Kk Ll Mm Nn Oo
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 45,
                textAlign: 'center',
                alignSelf: 'center',
                //fontFamily: 'Kindly Jasmine',
              }}>
              Pp Qq Rr Ss Tt Uu
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 45,
                textAlign: 'center',
                alignSelf: 'center',
                //fontFamily: 'Kindly Jasmine',
              }}>
              Vv Ww Xx Yy Zz
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
