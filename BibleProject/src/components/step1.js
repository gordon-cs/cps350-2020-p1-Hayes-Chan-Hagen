import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Step1 extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApi = this.props.navigation.getParam('bibleApi');
    const bibleRef = this.props.navigation.getParam('bibleRef');
    console.log(bibleApi);
    console.log(bibleRef);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() =>
            navigate('Style', {
              bibleApiDisplay: bibleApi,
              bibleRDisplay: bibleRef,
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
                Step 1: Style{' '}
              </Text>
              <Text style={{paddingTop: 40, fontSize: 30, textAlign: 'center'}}>
                Pick the style
              </Text>
              <Text style={{paddingTop: 10, fontSize: 30, textAlign: 'center'}}>
                of your layout
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
              this.props.navigation.navigate('Style', {
                bibleApiDisplay: bibleApi,
                bibleRDisplay: bibleRef,
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
    padding: 35,
    paddingTop: 150,
    paddingBottom: 150,
  },
});
