
import React from 'react';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
  
  
    