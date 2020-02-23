import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';

export default class screenThree extends React.Component {
  static navigationOptions = {
    title: 'Font',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            //justifyContent: 'center',
            alignSelf: 'center',
            paddingTop: 10,
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Button3')}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Caligraphy</Text>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Kindly Jasmine',
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
            }}>
            {' '}
            Kindly Jasmine{' '}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              aspectRatio: 1,
              //borderWidth: 1
              //justifyContent: 'space-around',
              //alignSelf: 'center',
            }}>
            <Text
              style={{fontSize: 30, textAlign: 'center', alignSelf: 'center'}}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            //justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#465881',
            width: Dimensions.get('window').width,
            paddingTop: 10,
          }}
          onPress={() => navigate('Button3')}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Simple</Text>
          <Text
            style={{
              fontSize: 22,
              backgroundColor: '#465881',
              textAlign: 'center',
              borderWidth: 1,
              marginLeft: 110,
              marginRight: 110,
            }}>
            {' '}
            Searocks Regular{' '}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              aspectRatio: 1,
              //borderWidth: 1
              //justifyContent: 'space-around',
              //alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                alignSelf: 'center',
                marginLeft: 11,
                marginRight: 11,
              }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.buttonFormat}>
          <Button
            title="Purpose"
            color="#d4d7dd"
            onPress={() => navigate('Button1')}
          />

          <Button
            title="Style"
            color="#738598"
            onPress={() => navigate('Button2')}
          />

          <Button
            title="Font"
            color="#3c4f65"
            onPress={() => navigate('Button3')}
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() => navigate('Button4')}
          />
        </View>
      </View>
    );
  }
}
