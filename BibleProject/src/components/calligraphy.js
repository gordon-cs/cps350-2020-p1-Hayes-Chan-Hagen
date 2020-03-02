import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Calligraphy extends React.Component {
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
    const bibleApiPreview = this.props.navigation.getParam('bibleApiFont');
    const bibleRPreview = this.props.navigation.getParam('bibleRFont');
    console.log(bibleApiPreview);
    console.log(bibleRPreview);
    console.log(this.props.navigation.state.params.pic);
    var {width} = Dimensions.get('window');
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
              bibleRResult: bibleRPreview,
            })
          }>
          <Text
            style={{
              width: Dimensions.get('window').width,
              fontSize: 0.05 * width,
              textAlign: 'center',
              paddingBottom: 60,
              marginTop: 20,
              alignSelf: 'center',
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
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text
              style={{
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.09 * width,
                paddingTop: 70,
                textAlign: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
            </Text>
            <Text
              style={{
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.09 * width,
                paddingTop: 10,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
            </Text>
            <Text
              style={{
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.09 * width,
                paddingTop: 10,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
            </Text>
            <Text
              style={{
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.09 * width,
                paddingTop: 10,
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
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Font')}>
            <Triangle
              width={40}
              height={40}
              color={'white'}
              direction={'left'}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 22, paddingRight: 90}}>Back</Text>
          <Text style={{fontSize: 22, paddingLeft: 90}}>Next</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Step3', {
                pic: this.props.navigation.state.params.pic,
                bibleApiResult: bibleApiPreview,
                bibleRResult: bibleRPreview,
              })
            }>
            <Triangle
              width={40}
              height={40}
              color={'white'}
              direction={'right'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
