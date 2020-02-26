import React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../styles';

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: null,
    };
  }
  static navigationOptions = {
    title: 'Step3',
  };
  render() {
    const {navigate} = this.props.navigation;
    const bibleApiShow = this.props.navigation.getParam('bibleApiResult');
    const bibleRShow = this.props.navigation.getParam('bibleRResult');
    console.log(bibleApiShow);
    console.log(bibleRShow);
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
            navigate('Preview', {
              pic: this.props.navigation.state.params.pic,
              bibleApiDone: bibleApiShow,
              bibleRDone: bibleRShow,
            })
          }>
          <Text
            style={{
              fontSize: 25,
              backgroundColor: '#95adbe',
              textAlign: 'center',
              borderWidth: 1,
              padding: 20,
              marginLeft: 20,
              marginRight: 20,
            }}>
            {' '}
            Step 3: Preview Your Design{' '}
          </Text>
          <Text style={{paddingTop: 40, fontSize: 25, textAlign: 'center'}}>
            Preview how your decisions
          </Text>
          <Text style={{paddingTop: 10, fontSize: 25, textAlign: 'center'}}>
            created your design.
          </Text>
          <Text style={{paddingTop: 10, fontSize: 25, textAlign: 'center'}}>
            Not happy? Click back and make
          </Text>
          <Text style={{paddingTop: 10, fontSize: 25, textAlign: 'center'}}>
            changes!
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
              this.props.navigation.navigate('Preview', {
                pic: this.props.navigation.state.params.pic,
                bibleApiDone: bibleApiShow,
                bibleRDone: bibleRShow,
              })
            }
          />
        </View>
      </View>
    );
  }
}
