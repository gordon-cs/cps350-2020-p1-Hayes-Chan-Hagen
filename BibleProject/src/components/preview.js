import React, {Component} from 'react';
import {Button, View, Image, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';

export default class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
  };

  render() {
    const backgroundImage = this.props.navigation.getParam('pic');
    const backgroundPhoto = this.props.navigation.getParam('photo');
    const biblePreview = this.props.navigation.getParam('bibleApiPreview');
    const {navigate} = this.props.navigation;
    if (backgroundImage) {
      return (
        <View style={{flex: 1}}>
          <View>
            <Image source={backgroundImage} />
            <Text>{biblePreview} Bible Api </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <View>
            <Image source={backgroundPhoto} />
            <Text>{biblePreview} Bible Api </Text>
          </View>
          <View style={styles.bottomBar}>
            <View style={styles.buttonFormat}>
              <Button title="Purpose" onPress={() => navigate('Button1')} />

              <Button title="Style" onPress={() => navigate('Button2')} />

              <Button title="Font" onPress={() => navigate('Button3')} />

              <Button title="Preview" onPress={() => navigate('Button4')} />
            </View>
          </View>
        </View>
      );
    }
  }
}
