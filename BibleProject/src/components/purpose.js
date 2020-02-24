import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class purpose extends React.Component {
  static navigationOptions = {
    title: 'Purpose',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApi = this.props.navigation.getParam('bibleApi');
    console.log(bibleApi);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Style', {bibleApiStyle: bibleApi})}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
            }}>
            {' '}
            Shareable{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#465881',
            width: Dimensions.get('window').width,
          }}
          onPress={() => navigate('Style', {bibleApiStyle: bibleApi})}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: '#465881',
              textAlign: 'center',
              borderWidth: 1,
              marginLeft: 80,
              marginRight: 80,
            }}>
            {' '}
            Screensaver{' '}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonFormat}>
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
            onPress={() => navigate('Font')}
          />

          <Button
            title="Preview"
            color="#f5c16c"
            onPress={() => navigate('Purpose')}
          />
        </View>
      </View>
    );
  }
}
