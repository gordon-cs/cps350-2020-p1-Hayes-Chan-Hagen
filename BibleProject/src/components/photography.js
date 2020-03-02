import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from '../styles';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import Triangle from 'react-native-triangle';

export default class photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      bibleApiPreview: null,
      bibleRPreview: null,
    };
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiPhoto = this.props.navigation.getParam('bibleApiDesign');
    const bibleRPhoto = this.props.navigation.getParam('bibleRDesign');
    console.log(bibleApiPhoto);
    console.log(bibleRPhoto);
    return (
      <View style={{flex: 1, backgroundColor: '#e1f2fb'}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 5,
          }}>
          Click on your preferred design
        </Text>
        <View style={design.bottom}>
          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image1,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image1}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image2,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image2}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image3,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image3}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image4,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image4}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image5,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image5}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={design.bottomItem}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Step2', {
                    pic: image6,
                    bibleApiPreview: bibleApiPhoto,
                    bibleRPreview: bibleRPhoto,
                  });
                }}>
                <Image
                  source={image6}
                  style={{
                    width: '80%',
                    height: '100%',
                    marginBottom: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            height: '16%',
            marginBottom: 5,
          }}
        />
        <View
          style={{
            justifyContent: 'flex-start',
            marginLeft: 10,
            marginRight: 330,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Style', {
                bibleApiPreview: bibleApiPhoto,
                bibleRPreview: bibleRPhoto,
              })
            }>
            <Triangle
              width={30}
              height={30}
              color={'white'}
              direction={'left'}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 22, paddingLeft: 10}}>Back</Text>
        </View>
      </View>
    );
  }
}

const design = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  bottomItem: {
    width: '34%',
    height: '40%',
    padding: 15,
    marginHorizontal: '.5%',
  },
});
