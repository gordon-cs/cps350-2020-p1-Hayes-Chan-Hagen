import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Simple extends React.Component {
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
      <View style={{flex: 1, backgroundColor: '#465881'}}>
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
            Simple
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'Quicksand-VariableFont:wght',
              backgroundColor: '#465881',
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
              flex: 1,
            }}>
            <Text
              style={{
                paddingTop: 50,
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.065 * width,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Quicksand-VariableFont:wght',
              }}>
              Aa{'  '}Bb{'  '}Cc{'  '}Dd{'  '}Ee{'  '}Ff{'  '}Gg
            </Text>
            <Text
              style={{
                paddingTop: 15,
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.065 * width,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Quicksand-VariableFont:wght',
              }}>
              Hh{'  '}Ii{'  '}Jj{'  '}Kk{'  '}Ll{'  '}Mm{'  '}Nn{'  '}Oo
            </Text>
            <Text
              style={{
                paddingTop: 15,
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.065 * width,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Quicksand-VariableFont:wght',
              }}>
              Pp{'  '}Qq{'  '}Rr{'  '}Ss{'  '}Tt{'  '}Uu
            </Text>
            <Text
              style={{
                paddingTop: 15,
                marginVertical: 5,
                width: Dimensions.get('window').width,
                fontSize: 0.065 * width,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Quicksand-VariableFont:wght',
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
