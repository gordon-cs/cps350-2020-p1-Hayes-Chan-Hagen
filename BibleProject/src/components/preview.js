import React, {Component} from 'react';
import {
  Button,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';

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
    console.log(biblePreview);
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
          </ImageBackground>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flex: 0.06,
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
                onPress={() =>
                  this.props.navigation.navigate('Step3', {
                    biblePreview,
                  })
                }
              />
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Button
                title="Next"
                onPress={() =>
                  this.props.navigation.navigate('Step4', {
                    biblePreview,
                  })
                }
              />
            </View>
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
/*
 bottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFormat: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  beginButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    //paddingLeft: 70,
    //paddingRight: 70,
    backgroundColor: 'white',
  },
*/
