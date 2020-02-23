import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DailyVerse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse: '',
    };
  }

  /* Saves ther verse given from the parent component to
   * use for rendering
   */
  componentDidMount() {
    this.setState({verse: this.props.bibleVerse});
  }

  render() {
    return (
      <View>
        <Text style={styles.verseFormat}>{this.state.verse}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  verseFormat: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
});
