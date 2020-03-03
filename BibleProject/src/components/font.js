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
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiText = this.props.navigation.getParam('bibleApiType');
    const bibleRText = this.props.navigation.getParam('bibleRType');
    console.log(bibleApiText);
    console.log(bibleRText);
    console.log(this.props.navigation.state.params.pic);
    var {width} = Dimensions.get('window');
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            alignSelf: 'center',
          }}
          onPress={() =>
            navigate('Step3', {
              pic: this.props.navigation.state.params.pic,
              bibleApiFont: bibleApiText,
              bibleRFont: bibleRText,
            })
          }>
          <View style={{flex: 1, backgroundColor: '#95adbe'}}>
            <Text
              style={{
                width: Dimensions.get('window').width,
                fontSize: 0.04 * width,
                textAlign: 'center',
                paddingBottom: 20,
                marginTop: 20,
                alignSelf: 'center',
              }}>
              {' '}
              Calligraphy{' '}
            </Text>
            <Text
              style={{
                fontSize: 0.06 * width,
                fontFamily: 'Kindly Jasmine',
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
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: Dimensions.get('window').width,
                  fontSize: 0.07 * width,
                  paddingTop: 40,
                  textAlign: 'center',
                  fontFamily: 'Kindly Jasmine',
                }}>
                Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
              </Text>
              <Text
                style={{
                  width: Dimensions.get('window').width,
                  fontSize: 0.07 * width,
                  paddingTop: 10,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Kindly Jasmine',
                }}>
                Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
              </Text>
              <Text
                style={{
                  width: Dimensions.get('window').width,
                  fontSize: 0.07 * width,
                  paddingTop: 10,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Kindly Jasmine',
                }}>
                Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
              </Text>
              <Text
                style={{
                  width: Dimensions.get('window').width,
                  fontSize: 0.07 * width,
                  paddingTop: 10,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Kindly Jasmine',
                }}>
                Vv{'  '}Ww{'  '}Xx{'  '}Yy{'  '}Zz
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            //justifyContent: 'center',
            alignSelf: 'center',

            width: Dimensions.get('window').width,
            paddingTop: 10,
          }}
          onPress={() =>
            navigate('Step3', {
              pic: this.props.navigation.state.params.pic,
              bibleApiFont: bibleApiText,
              bibleRFont: bibleRText,
            })
          }>
          <View style={{flex: 1, backgroundColor: '#465881'}}>
            <Text
              style={{
                width: Dimensions.get('window').width,
                fontSize: 0.04 * width,
                textAlign: 'center',
                paddingBottom: 20,
                marginTop: 20,
                alignSelf: 'center',
              }}>
              {' '}
              Simple{' '}
            </Text>

            <Text
              style={{
                fontSize: 0.05 * width,
                fontFamily: 'Quicksand-VariableFont:wght',
                textAlign: 'center',
                borderWidth: 1,
                alignSelf: 'center',
                padding: 15,
              }}>
              {' '}
              Quicksand{' '}
            </Text>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text
                style={{
                  paddingTop: 30,
                  width: Dimensions.get('window').width,
                  fontSize: 0.05 * width,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Quicksand-VariableFont:wght',
                }}>
                Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  width: Dimensions.get('window').width,
                  fontSize: 0.05 * width,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Quicksand-VariableFont:wght',
                }}>
                Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  width: Dimensions.get('window').width,
                  fontSize: 0.05 * width,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Quicksand-VariableFont:wght',
                }}>
                Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  width: Dimensions.get('window').width,
                  fontSize: 0.05 * width,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Quicksand-VariableFont:wght',
                }}>
                Vv{'  '}Ww{'  '}Xx{'  '}Yy{'  '}Zz
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
