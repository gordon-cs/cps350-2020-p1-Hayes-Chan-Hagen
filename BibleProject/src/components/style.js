import React, {Component} from 'react';
import {Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../styles';

export default class style extends React.Component {
  static navigationOptions = {
    title: 'Style',
  };

  render() {
    const {navigate} = this.props.navigation;
    const bibleApiFont = this.props.navigation.getParam('bibleApiStyle');
    console.log(bibleApiFont);
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            justifyContent: 'center',
            alignSelf: 'center',
          }} //navigate needs to bring up check option for either going to share or create
          onPress={() => navigate('Graphic', {bibleApiDesign: bibleApiFont})}>
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
          onPress={() => navigate('Photo', {bibleApiDesign: bibleApiFont})}>
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
            onPress={() => navigate('Preview')}
          />
        </View>
      </View>
    );
  }
}
