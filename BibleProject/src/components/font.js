import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class font extends React.Component {
  static navigationOptions = {
    title: 'Font',
  };
  render() {
    console.log(this.props.navigation.state.params);
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#95adbe'}}>
        <TouchableOpacity
          style={{
            flex: 4,
            alignSelf: 'center',
            paddingTop: 10,
          }}
          onPress={() =>
            navigate('Preview', {
              pic: this.props.navigation.state.params.pic,
              bibleApiPreview: this.props.navigation.state.params
                .bibleApiPreview,
            })
          }>
          <Text style={{fontSize: 25, textAlign: 'center'}}>Caligraphy</Text>
          <Text
            style={{
              fontSize: 30,
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
            }}>
            <Text
              style={{
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Kindly Jasmine',
              }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
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
          onPress={() =>
            navigate('Preview', {
              pic: this.props.navigation.state.params.pic,
              bibleApiPreview: this.props.navigation.state.params
                .bibleApiPreview,
            })
          }>
          <Text style={{fontSize: 25, textAlign: 'center'}}>Simple</Text>
          <Text
            style={{
              fontSize: 30,
              backgroundColor: '#465881',
              textAlign: 'center',
              fontFamily: 'Searocks OTF',
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
              marginLeft: 120,
              marginRight: 120,
            }}>
            <Text
              style={{
                fontSize: 40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Searocks OTF',
              }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </Text>
          </View>
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
