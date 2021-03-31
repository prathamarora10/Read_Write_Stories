import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <Text
        style={{
          marginTop: 200,
          marginLeft: 90,
          fontSize: 30,
        }}>
        Read Story
      </Text>
    );
  }
}
