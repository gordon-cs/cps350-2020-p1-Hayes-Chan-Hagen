/*
 *  Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class BibleData extends Component {
  constructor(props) {
    super(props);
    this.state = {       // Initialize state (don't call setState in ctor)
      isLoading: true,
  }
    this.getBibleApi = this.getBibleApi.bind(this);
    this.getBibleApi2 = this.getBibleApi2.bind(this);
    //this.BibleVerses = this.BibleVerses.bind(this);
  }

  componentDidMount() {
    this.getBibleApi2();
  }

  async getBibleApi() {
    console.log("getBibleApi uses try await await catch");
    const BibleURL = 'https://bible-api.com/john%203:16';
      try {
          let response = await fetch('https://bible-api.com/john%203:16');
          let responseJson = await response.json();
          console.log(responseJSon);
          return responseJson;
          } 
      catch (error) {
        console.error(error);
        }
        console.log(this.state.BibleData);
        }

  getBibleApi2() {
    console.log("getBibleApi2 uses fetch.then.then.catch");
    const BibleURL = 'https://bible-api.com/john%203:16';
      return fetch('https://bible-api.com/john%203:16')
        .then((response) => response.json())
        .then((responseJson) => { 
          this.setState({
            isLoading: false,
            BibleData: responseJson
          })
      }
    ) .catch((error) => {
    console.error(error);
    });
  }

  /*BibleVerses = () => {
    return this.state.BibleData.verses.map((num) => {
      return (
        <View>
          <Text style={styles.container}>Verse</Text>
          <Text style={styles.container}>{num.text}</Text>
        </View>
        );
      }
    )
  }*/


  render() {
    if (this.state.isLoading) {
      // No data, show something in the meantime
      return (
        <Text>Waiting for data ...
        </Text>
      );
    } else {
      // Show data from API
      return (
      <View>
        <Text style = {styles.container}>{this.state.BibleData.reference}</Text>
        <Text style = {styles.container2}>{this.state.BibleData.text}</Text>
        
      </View>
    );
   }
  }
}
  const styles = StyleSheet.create({
    container: {
          //color: '#e9e2d0',
          fontWeight: 'bold',
          fontSize: 15,
          justifyContent: "center",
          textAlign: 'center',
          //backgroundColor: '#6e5773'
        },
    container2: {
          justifyContent: "center",
          textAlign: 'center',
    }
      }
  )
  
