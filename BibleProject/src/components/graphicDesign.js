import React, {Component} from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import background5 from './images/background5.png';
import background6 from './images/background6.png';

export default class graphicDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
      bibleApiPreview: null,
    };
  }

  static navigationOptions = {
    title: 'Graphic Design',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiGraphic = this.props.navigation.getParam('bibleApiDesign');
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background1,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background1}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background2,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background2}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background3,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background3}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background4,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background4}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageFormat}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background5,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background5}
              style={{marginRight: 60, marginLeft: 60, width: 100, height: 180}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                pic: background6,
                bibleApiPreview: bibleApiGraphic,
              });
            }}>
            <Image
              source={background6}
              style={{
                marginRight: 60,
                marginLeft: 60,
                width: 100,
                height: 180,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Button
            title="Purpose"
            color="#d4d7dd"
            onPress={() => navigate('Purpose')}
          />

          <Button
            title="Style"
            color="#738598"
            onPress={() => navigate('Style')}
          />

          <Button
            title="Font"
            color="#3c4f65"
            onPress={() =>
              navigate('Font', {
                pic: this.state.pic,
                bibleApiPreview: this.state.bibleApiPreview,
              })
            }
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() =>
              navigate('Preview', {
                pic: this.state.pic,
              })
            }
          />
        </View>
      </View>
    );
  }
}
