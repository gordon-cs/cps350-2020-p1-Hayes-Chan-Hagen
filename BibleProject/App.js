/*
 *  Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ImageMarker, { markText, markImage } from "react-native-image-marker";
import { font } from 'react-native'; //font in package.json


export default class BibleData extends Component {
  
  constructor(props) {
    super(props);
    this.state = {       // Initialize state (don't call setState in ctor)
      isLoading: true,
      //couldn't quite get this part to work yet..
      translations: {
          'Cherokee': {
             name: 'Cherokee New Testament',
             identifier:	'cherokee'
          },
          'English': {
             name: 'King James Version',
             identifier: 'kjv'
          },		
          'English': {
             name: 'World English Bible',
             identifier: 'web (default)'
          },
          'Latin': {
             name: 'Clementine Latin Vulgate',
             identifier: 'clementine'
          },
          'Portuguese': {
             name: 'João Ferreira de Almeida',
             identifier: 'almeida'
          },
          'Romanian': {
             name: 'Romanian Corrected Cornilescu Version',
             identifier: 'rccv'	
          }
      }
  }
    this.getBibleApi = this.getBibleApi.bind(this);
    this.getBibleApi2 = this.getBibleApi2.bind(this);
    //this.handleTranslations = this.handleTranslations.bind(this);
    //this.markImage = this.markImage.bind(this);
    //this.BibleVerses = this.BibleVerses.bind(this);
  }

  handleTranslation(newTranslation) {
    this.setState({
      translation: newTranslation,
      isLoading: true,
    });
    this.getBibleApi(this.state.translation[newTranslation].identifier);
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

 

  /*markImage() {
    console.log("markImage uses fetch.then.then.catch");
    const markImageURL = "https://reactnativeexample.com/add-watermark-to-the-image-with-text-and-icon/";
      return fetch('https://reactnativeexample.com/add-watermark-to-the-image-with-text-and-icon/')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            ImageMarkerData: responseJson
          })
        }).catch((error) => {
          console.log(error)
          });
      }
  

  BibleVerses = () => {
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
      <View style={{justifyContent:"center",backgroundColor:"#fff", alignItems:"center"}}>
        <Text>Waiting for data ...</Text>
      </View>

      );
    } else {
      // Show data from API
      return (
      <View style={styles.container}>
        <Text style = {styles.placeholder}></Text>
        <View style={styles.circle}>
        <Text style={styles.sample}>Verse 4 2 Day</Text>
      </View>
       
        <Text style = {styles.verse}>{this.state.BibleData.text}</Text>
        <Text style = {styles.container3}>{this.state.BibleData.reference}</Text>
        <View style = {styles.rectangle2}></View>
        <View style= {styles.rectangle}>
        <Button button = {styles.buttonStyle} 
        title = "Purpose" 
        color = "#263859"
        />
      </View>
      </View>
    );
   }
  }
}
  const styles = StyleSheet.create({
    container: {
          flex: 0.5,
          justifyContent: "center",
          alignItems: 'center',
          backgroundColor: '#95adbe',
          //paddingLeft: 7,
          //paddingRight: 7,
          },
    placeholder: {
          paddingTop: 280,
          paddingBottom: 20,
          fontSize: 15,
          //justifyContent: "center",
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          paddingLeft: 7,
          paddingRight: 7,
          //fontWeight: 'bold'
          //fontFamily: 'AmaticSC-Regular',   //how to add fonts
          },
    verse: {
          fontSize: 22,
          //justifyContent: "center",
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          paddingTop: 60,
          paddingLeft: 7,
          paddingRight: 7,
          //fontWeight: 'bold'
          fontFamily: 'AmaticSC-Bold'
          },
    container3: {
          fontSize: 15,
          //justifyContent: "center",
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          paddingLeft: 7,
          paddingRight: 7,
          fontWeight: 'bold',
          //fontFamily: 'AmaticSC-Bold'
          },
    circle: {
          width: 200,
          height: 200,
          borderRadius: 200/2,
          backgroundColor: '#ffd082',
          justifyContent: 'center'
         },
    sample: {
          alignSelf: 'center', 
          fontWeight: 'bold', 
          color: 'black', 
          fontSize: 20,
      },
    rectangle: {
          width:400,
          height:80,
          backgroundColor: '#95adbe',
      },
    rectangle2: {
          width:400,
          height:50,
          backgroundColor: 'white',
      },
    buttonStyle: {
        //flex: .2,
        color: 'black',
        flexDirection: 'row',
        //alignItems: 'center',
        backgroundColor:'#f2f6f5',
        //borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
    }
  )
  
    
  
