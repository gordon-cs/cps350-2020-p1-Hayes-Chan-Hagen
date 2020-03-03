import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      bibleApi: null,
    };
  }
  static navigationOptions = {
    header: null,
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
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={design.bottom}>
              <ImageBackground
                source={backgroundImage}
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    marginLeft: 20,
                    marginRight: 20,
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: 'Kindly Jasmine',
                      marginLeft: 20,
                      marginRight: 20,
                      color: 'black',
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
                      color: 'black',
                    }}>
                    {bibleRef}{' '}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={{flex: 0.09, backgroundColor: '#95adbe'}}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: '1%',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                justifyContent: 'space-between',
                paddingBottom: 46,
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
                    pic: this.props.navigation.state.params.pic,
                    bibleApi: this.props.navigation.state.params.biblePreview,
                    bibleRef,
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

const design = StyleSheet.create({
  bottom: {
    height: '100%',
  },
});
