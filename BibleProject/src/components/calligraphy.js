import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Calligraphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Calligraphy',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiPreview = this.props.navigation.getParam('bibleApiFont');
    console.log(bibleApiPreview);
    console.log(this.props.navigation.state.params.pic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            alignSelf: 'center',
            paddingTop: 10,
          }}
          onPress={() =>
            navigate('Step3', {
              pic: this.props.navigation.state.params.pic,
              bibleApiResult: bibleApiPreview,
            })
          }>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              paddingBottom: 60,
              marginTop: 20,
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
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text
              style={{
                paddingTop: 70,
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Vv{'  '}Ww{'  '}Xx{'  '}Yy{'  '}Zz
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flex: 0.25,
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View style={{justifyContent: 'flex-start'}}>
            <Button
              title="Back"
              onPress={() => this.props.navigation.navigate('Font')}
            />
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Button
              title="Next"
              onPress={() =>
                this.props.navigation.navigate('Step3', {
                  pic: this.props.navigation.state.params.pic,
                  bibleApiResult: bibleApiPreview,
                })
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
