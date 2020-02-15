/*
 * Got help from Dr. Tuck
 */

import React, { Component } from 'react';
import { Text, Button, View, Picker } from 'react-native';

export default class BibleData extends Component {
    render() {
      return (
          <View>
              BibleData = {this.props.BibleData}
          </View>
        
      );
    }
  }



  /*class Purpose extends Component {
      constructor(props) {
        super(props);
        this.purposeOnPress = this.purposeOnPress.bind(this);
        this.state = {
          color: props.color
        };
      }
      purposeOnPress() {
        console.log("purpose pressed");
        switch (this.state.color) {
        case 'black':
          this.setState({
            color: 'white'
          });
          break;
        case 'white':
          this.setState({
            color: 'black'
          });
          break;
        default:
          this.setState({
            color: 'red'
          });
        }
      }

    render() {

        return (
            <Text style={{color: this.state.color,
                fontSize: this.props.fontSize,
                fontWeight: this.props.fontWeight,
                textAlign: 'center',
        }}
                  onPress = { this.purposeOnPress }>
            </Text>
          );
        }
      }*/
      
    
  