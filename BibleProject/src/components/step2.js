import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Step2',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiText = this.props.navigation.getParam('bibleApiPreview');
    const bibleRText = this.props.navigation.getParam('bibleRPreview');
    console.log(bibleApiText);
    console.log(bibleRText);
    console.log(this.props.navigation.state.params.pic);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() =>
            navigate('Font', {
              pic: this.props.navigation.state.params.pic,
              bibleApiType: bibleApiText,
              bibleRType: bibleRText,
            })
          }>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
              padding: 35,
            }}>
            {' '}
            Step 2: Font{' '}
          </Text>
          <Text style={{paddingTop: 40, fontSize: 30, textAlign: 'center'}}>
            Choose type of font
          </Text>
          <Text style={{paddingTop: 10, fontSize: 30, textAlign: 'center'}}>
            for the scripture
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            marginLeft: 330,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Button
            title="Next"
            onPress={() =>
              this.props.navigation.navigate('Font', {
                pic: this.props.navigation.state.params.pic,
                bibleApiType: bibleApiText,
                bibleRType: bibleRText,
              })
            }
          />
        </View>
      </View>
    );
  }
}
