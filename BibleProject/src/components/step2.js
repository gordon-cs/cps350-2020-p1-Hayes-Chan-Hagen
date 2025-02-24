import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Step2 extends React.Component {
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
          <View style={styles.outerBorder}>
            <View style={styles.innerBorder}>
              <Text
                style={{
                  fontSize: 40,
                  textAlign: 'center',
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
            </View>
          </View>
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
            marginLeft: 345,
            marginRight: 10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, paddingRight: 10}}>Next</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Font', {
                pic: this.props.navigation.state.params.pic,
                bibleApiType: bibleApiText,
                bibleRType: bibleRText,
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
    padding: 20,
    paddingTop: 150,
    paddingBottom: 150,
  },
});
