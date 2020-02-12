/*
 * Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ImageMarker, { Position, ImageFormat } from 'react-native-image-marker'
import ImagePicker from 'react-native-image-picker';
import { font } from 'react-native'; //font in package.json
import BibleData from './BibleData';
import logo from './images/logo.png';


export default  class Bible extends Component  {

    constructor(props)  {
        super(props);
        this.state  = {
            isLoading: true,
            /*translations: {
          'Cherokee': {
             name: 'Cherokee New Testament',
             identifier: 'cherokee'
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
      }*/
      //Set up methods by binding this for them
    }
      this.getBibleApi = this.getBibleApi.bind(this);
      this.getBibleApi2 = this.getBibleApi2.bind(this);
      //this.handleTranslations = this.handleTranslations.bind(this);
      //this.markImage = this.markImage.bind(this);
      //this.BibleVerses = this.BibleVerses.bind(this);
      //this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
    }

    /*handleTranslation(newTranslation) {
    this.setState({
      translation: newTranslation,
      isLoading: true,
    });
    this.getBibleApi(this.state.translation[newTranslation].identifier);
  }*/
  /* Get real API data when component is first loaded.
   * (Later, might want to refresh this periodically)
   * Caution: repo must stay private since it contains secret API key.
   * Todo: move API key to a file not in repo.
   */
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

  /*handleChoosePhoto = () => {
    console.log("pressed")
    const options = {
      noData: true
      
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log(response);
      if (response.uri) {
        this.setState({photo})
      }
    });
  };*/

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
      <View style={{justifyContent:"center",backgroundColor:"#fff", alignItems:"center"}}>
        <Text>Waiting for data ...</Text>
      </View>

      );
    } else {
      //const {photo} = this.state;
      // Show data from API
      return (
      <View style={styles.container}>
        <View><Image source = {logo}/></View>

        <Text style = {styles.verse}>{this.state.BibleData.text}</Text>   
        <Text style = {styles.container3}>{this.state.BibleData.reference}</Text>
        <View>
          
        
        <Button button = {styles.buttonStyle}
        title = "Purpose" 
        color = "#263859"
        onPress = { this.onPress }
        />
        </View>
        
      </View>
      
    );
   }
  }

   onPress= () => {
      alert('Clicked')
  }

}

/*
// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  



  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      this.setState({
        avatarSource: source,
      });
    }
  });

*/ 
const styles = StyleSheet.create({
    container: {
          //flex: 0.5,
          //justifyContent: "center",
          //alignItems: 'center',
          backgroundColor: '#95adbe',
          //paddingLeft: 7,
          //paddingRight: 7,
          flex: 1, 
          justifyContent:"center",
          alignItems:"center"
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
          //paddingTop: 60,
          //paddingLeft: 7,
          //paddingRight: 7,
          //fontWeight: 'bold'
          fontFamily: 'AmaticSC-Bold'
          },
    container3: {
          fontSize: 15,
          //justifyContent: "center",
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          //paddingLeft: 7,
          //paddingRight: 7,
          fontWeight: 'bold',
          //fontFamily: 'AmaticSC-Bold'
          },
    /*circle: {
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
      },*/
    /*rectangle: {
          width:400,
          height:80,
          backgroundColor: '#95adbe',
      },
    rectangle2: {
          width:400,
          height:50,
          backgroundColor: 'white',
      },*/
    buttonStyle: {
        flex: 1,
        color: 'black',
        justifyContent: 'flex-end',
        //alignItems: 'center',
        backgroundColor:'#f2f6f5',
        //borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        bottom: 0,
        position: 'absolute'
      },
     
    }
  )
  
    
  

