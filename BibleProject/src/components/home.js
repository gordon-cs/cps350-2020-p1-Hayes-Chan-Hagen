/*
 * Got help from Dr. Tuck and Jahnuel
 */
import React, {Component, AsyncStorage} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import DailyVerse from './dailyVerse';
import BibleRef from './bibleRef';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    //Set up methods by binding this for them
    this.getBibleApi = this.getBibleApi.bind(this);
    this.getBibleApi2 = this.getBibleApi2.bind(this);
  }

  /* Get real API data when component is first loaded.
   * (Later, might want to refresh this periodically)
   * Caution: repo must stay private since it contains secret API key.
   * Todo: move API key to a file not in repo.
   */
  componentDidMount() {
    this.getBibleApi2();
  }

  async getBibleApi() {
    console.log('getBibleApi uses try await await catch');
    const BibleURL = 'https://bible-api.com/john%203:16';
    try {
      let response = await fetch('https://bible-api.com/john%203:16');
      let responseJson = await response.json();
      console.log(responseJSon);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
    console.log(this.state.BibleData);
  }

  getBibleApi2() {
    console.log('getBibleApi2 uses fetch.then.then.catch');
    const BibleURL =
      'http://beta.ourmanna.com/api/v1/get/?format=json&order=random';
    return fetch(BibleURL)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          BibleData: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      // No data, show something in the meantime
      return (
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <Text>Waiting for data ...</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: '#95adbe'}}>
          <View style={{flex: 4}}>
            <Image
              resizeMode={'contain'}
              style={{
                marginTop: 50,
                height: 400,
                width: 400,
                marginVertical: 20,
                padding: '6%',
                alignSelf: 'center',
              }}
              source={require('./images/logo.png')}
            />
          </View>
          <View style={{flex: 2}}>
            <DailyVerse bibleVerse={this.state.BibleData.verse.details.text} />
            <BibleRef
              bibleReference={this.state.BibleData.verse.details.reference}
            />
            <View
              style={{
                flex: 3,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.beginButton}
              onPress={() => this.props.navigation.navigate('Button1')}>
              <Text style={{fontSize: 20}}> CLICK TO BEGIN DESIGNING </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
