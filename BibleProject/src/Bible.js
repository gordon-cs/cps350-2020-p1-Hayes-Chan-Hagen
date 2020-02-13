/*
 * Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
//import ImageMarker from 'react-native-image-marker'
//import ImagePicker from 'react-native-image-picker';
//import { font } from 'react-native'; //font in package.json
//import BibleData from './BibleData';
import logo from './images/logo.png';
//import homepage from './homepage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default  class Bible extends Component  {

    constructor(props)  {
        super(props);
        this.state  = {
            isLoading: true
      //Set up methods by binding this for them
    }
    
      //this.ImageMarker =  this.ImageMarker.bind(this);
      this.getBibleApi = this.getBibleApi.bind(this);
      this.getBibleApi2 = this.getBibleApi2.bind(this);
      //this.onPress = this.onPress.bind(this);
      //this.handleTranslations = this.handleTranslations.bind(this);
      //this.markImage = this.markImage.bind(this);
      //this.BibleVerses = this.BibleVerses.bind(this);
      //this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
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
            <View style={styles.logo}><Image source = {logo}/></View>
              <Text style = {styles.verse}>{this.state.BibleData.text}</Text>   
              <Text style = {styles.container3}>{this.state.BibleData.reference}</Text>
           
         
            <View style={styles.bottomBar}>
                <View style={styles.purposeB} >
                  
                  <Button title = "Purpose" color = '#d4d7dd'//want this text to be black not white..
                   onPress = {() => navigate('Layout')}> 
                    </Button></View>  
               
                <View style={styles.styleB} >
                  <Button title = "Style" color = '#738598' //want this text to be black not white..
                   onPress = {() => navigate('Layout')}> 
                    </Button></View>
                
                <View style={styles.fontB} >
                  <Button title = "Font" color = '#3c4f65'//want this text to be black not white..
                   onPress = {() => navigate('Layout')}> 
                    </Button></View>
              
                <View style={styles.previewB} >
                  <Button title = "Preview" color = '#f5c16c'//want this text to be black not white..
                   onPress = {() => navigate('Layout')}> 
                    </Button></View>  
            </View>        
        </View>
    );
   }
  }
}

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to layout page"
        onPress={() => navigate('Layout')}
      />
    );
  }
}

class LayoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Layout',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home Page"
        onPress={() => navigate('Home')}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
    Home: {screen: HomePage},
    Layout: {screen: LayoutScreen},
  }, {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
};
/*
      onPress= () => {
      alert('Clicked')

    onButtonPress() {
    this.props.navigation.navigate('Second_screen');
    }

    <Button
        title="Go to layout page"
        onPress={() => navigate('Layout')}
      />

       onPress= () => {
      const { navigate } = this.props.navigation;
      navigate('Layout')
  }

 */


// More info on all the options is below in the API Reference... just some common use cases shown here
/*const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  
  
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
  });*/


  const styles = StyleSheet.create({
    bottomBar: {
          flex: 1,
          flexDirection: 'row',
          //height: 60,
          justifyContent:'center',
          //alignItems: 'center'
          //marginBottom: 40
          },
    purposeB: { 
          // marginLeft: 5,
          // marginRight: 5,
          // marginBottom: 15,
          flex: 1, 
          //backgroundColor: '#d4d7dd', 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    styleB: { 
          // marginLeft: 8,
          // marginRight: 8,
          // marginBottom: 8,
          flex:  1, 
          //backgroundColor: '#738598', 
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    fontB: { 
          // marginLeft: 8,
          // marginRight: 8,
          // marginBottom: 8,
          flex:  1, 
          //backgroundColor: '#3c4f65',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    previewB: { 
          // marginLeft: 5,
          // marginRight: 5,
          // marginBottom: 15,
          flex: 1, 
          //backgroundColor: '#f5c16c',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center'
          },
    container: {
          //flex: 0.5,
          justifyContent: "center",
          //alignItems: 'center',
          backgroundColor: '#95adbe',
          //paddingLeft: 7,
          //paddingRight: 7,
          flex: 1, 
          //justifyContent:"center",
          //alignItems:"center"
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
          fontSize: 17,
          //borderWidth:  1,
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          //paddingTop: 60,
          paddingLeft: 21,
          paddingRight: 21,
          //fontWeight: 'bold'
          //fontFamily: 'AmaticSC-Bold'
          },
    container3: {
          flex: 1,
          fontSize: 15,
          //paddingBottom: 20,
          //justifyContent: "center",
          textAlign: 'center',
          //alignItems: 'center',
          //backgroundColor: '#6e5773'
          //paddingLeft: 7,
          //paddingRight: 7,
          fontWeight: 'bold',
          //fontFamily: 'AmaticSC-Bold'
          },
    buttonStyle: {
        color: 'black',
        justifyContent: 'flex-end',
        //alignItems: 'center',
        backgroundColor:'#f2f6f5',
        //borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        //bottom: 0,
        //position: 'absolute'
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10 
      },
      logo: {
        //justifyContent: 'center',
        alignItems: 'center',    
        paddingTop: 50,
        //paddingBottom: 4,
      },
    }
  )
  
    
  

