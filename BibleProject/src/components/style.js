import React, {Component} from 'react';
import {Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles';
import ImagePicker from 'react-native-image-picker';

export default class style extends React.Component {
  static navigationOptions = {
    title: 'Style',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Button5')}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
            }}>
            {' '}
            Graphic Design{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#e1f2fb',
            width: Dimensions.get('window').width,
          }}
          onPress={() => navigate('Button6')}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#e1f2fb',
              textAlign: 'center',
              borderWidth: 1,
              marginLeft: 80,
              marginRight: 80,
            }}>
            {' '}
            Photography{' '}
          </Text>
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
