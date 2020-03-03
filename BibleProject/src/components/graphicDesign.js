import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import background5 from './images/background5.png';
import background6 from './images/background6.png';
import Triangle from 'react-native-triangle';

export default class graphicDesign extends React.Component {
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
    const bibleApiGraphic = this.props.navigation.getParam('bibleApiDesign');
    const bibleRGraphic = this.props.navigation.getParam('bibleRDesign');
    console.log(bibleApiGraphic);
    console.log(bibleRGraphic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
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
                    pic: background1,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background1}
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
                    pic: background2,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background2}
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
                    pic: background3,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background3}
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
                    pic: background4,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background4}
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
                    pic: background5,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background5}
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
                    pic: background6,
                    bibleApiPreview: bibleApiGraphic,
                    bibleRPreview: bibleRGraphic,
                  });
                }}>
                <Image
                  source={background6}
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
            height: '14%',
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
                pic: background6,
                bibleApiPreview: bibleApiGraphic,
                bibleRPreview: bibleRGraphic,
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
