import React, {Component} from 'react';
import {
  Button,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
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
              {biblePreview} Bible Api{' '}
            </Text>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <View>
            <Image source={backgroundPhoto} />
            <Text>{biblePreview}</Text>
          </View>
          <View style={styles.bottomBar}>
            <View style={styles.buttonFormat}>
              <Button title="Purpose" onPress={() => navigate('Purpose')} />

              <Button title="Style" onPress={() => navigate('Style')} />

              <Button title="Font" onPress={() => navigate('Font')} />

              <Button title="Preview" onPress={() => navigate('Preview')} />
            </View>
          </View>
        </View>
      );
    }
  }
}
