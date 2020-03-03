import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Share, StyleSheet} from 'react-native';
//import ImgToBase64 from 'react-native-image-base64';
//import RNFetchBlob from 'rn-fetch-blob';

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    header: null,
  };

  shareImage() {
    Share.share(
      {
        title: 'Share Image',
        url: require('../components/images/background1.png'),
        message: 'Verse of the day',
      },
      {
        dialogTitle: 'Share this verse',
      },
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    const bibleApiShow = this.props.navigation.getParam('bibleApiPreview');
    console.log(bibleApiShow);
    console.log(this.props.navigation.state.params.pic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View style={styles.outerBorder}>
            <View style={styles.innerBorder}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                }}>
                {' '}
                Step 4: Finished{' '}
              </Text>
              <Text style={{paddingTop: 40, fontSize: 22, textAlign: 'center'}}>
                Save your image to share and send{' '}
              </Text>
              <Text style={{paddingTop: 10, fontSize: 22, textAlign: 'center'}}>
                or save as a new screensaver{' '}
              </Text>

              <TouchableOpacity onPress={this.shareImage}>
                <Text
                  style={{
                    fontSize: 25,
                    backgroundColor: '#465881',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderWidth: 1,
                    padding: 15,
                    marginTop: 50,
                  }}>
                  {' '}
                  Press Here{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerBorder: {
    borderWidth: 4,
    borderColor: '#ffd369',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerBorder: {
    borderWidth: 4,
    borderColor: '#e1f2fb',
    padding: 5,
    paddingTop: 150,
    paddingBottom: 150,
  },
});
