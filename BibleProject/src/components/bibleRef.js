import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BibleRef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: '',
    };
  }

  /* Saves ther verse given from the parent component to
   * use for rendering
   */
  componentDidMount() {
    this.setState({ref: this.props.bibleReference});
  }

  render() {
    return (
      <View>
        <Text style={styles.refFormat}>{this.state.ref}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  refFormat: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});
