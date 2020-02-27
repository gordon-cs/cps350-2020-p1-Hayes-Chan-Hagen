import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Preview',
  };

  render() {
    const {navigate} = this.props.navigation;
    const backgroundImage = this.props.navigation.getParam('pic');
    const backgroundPhoto = this.props.navigation.getParam('photo');
    const biblePreview = this.props.navigation.getParam('bibleApiDone');
    const bibleRef = this.props.navigation.getParam('bibleRDone');
    console.log(biblePreview);
    console.log(bibleRef);
    console.log(this.props.navigation.state.params.pic);
    if (backgroundImage) {
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('window').width,
              resizeMode: 'cover',
            }}
            source={backgroundImage}>
            <Text
              style={{
                backgroundColor: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Kindly Jasmine',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {biblePreview}{' '}
            </Text>
            <Text
              style={{
                backgroundColor: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Kindly Jasmine',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {bibleRef}{' '}
            </Text>
          </ImageBackground>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flex: 0.07,
              flexDirection: 'row',
              paddingTop: 10,
              justifyContent: 'space-between',
              paddingBottom: 10,
              marginLeft: 10,
              marginRight: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Step3', {
                  biblePreview,
                  bibleRef,
                })
              }>
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
                this.props.navigation.navigate('Step4', {
                  biblePreview,
                  bibleRef,
                  backgroundImage,
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
    } else {
      return (
        <View style={{flex: 1}}>
          <View>
            <Image source={backgroundPhoto} />
            <Text>{biblePreview}</Text>
          </View>
        </View>
      );
    }
  }
}
