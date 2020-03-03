import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Triangle from 'react-native-triangle';

export default class Step3 extends React.Component {
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
    const bibleApiPreview = this.props.navigation.getParam('bibleApiFont');
    const bibleRPreview = this.props.navigation.getParam('bibleRFont');
    console.log(bibleApiPreview);
    console.log(bibleRPreview);
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
              bibleApiResult: bibleApiPreview,
              bibleRResult: bibleRPreview,
            })
          }>
          <View style={styles.outerBorder}>
            <View style={styles.innerBorder}>
              <Text
                style={{
                  fontSize: 23,
                  textAlign: 'center',
                }}>
                {' '}
                Step 3: Preview Your Design{' '}
              </Text>
              <Text style={{paddingTop: 40, fontSize: 20, textAlign: 'center'}}>
                Preview how your decisions
              </Text>
              <Text style={{paddingTop: 10, fontSize: 20, textAlign: 'center'}}>
                created your design.
              </Text>
              <Text style={{paddingTop: 10, fontSize: 20, textAlign: 'center'}}>
                Not happy? Click back and make
              </Text>
              <Text style={{paddingTop: 10, fontSize: 20, textAlign: 'center'}}>
                changes!
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
              this.props.navigation.navigate('Preview', {
                pic: this.props.navigation.state.params.pic,
                bibleApiDone: bibleApiShow,
                bibleRDone: bibleRShow,
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
    paddingTop: 140,
    paddingBottom: 140,
  },
});
