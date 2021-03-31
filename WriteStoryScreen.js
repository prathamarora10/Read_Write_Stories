import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import db from '../config';
import * as firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {

  constructor(){
    super();
    this.state={
      title: '',
      author: '',
      story: ''
    }
  }

  submitStory = async () => {  
    db.collection('storyBook').doc("story").update({
      author: this.state.author,
      story: this.state.story,
      title: this.state.title
    });
    ToastAndroid.show('Story Published', ToastAndroid.LONG);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <Text
          style={{
            backgroundColor: 'pink',
            fontSize: 40,
            height: 75,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15,
            paddingLeft: 80,
          }}>
          Story Hub
        </Text>

        <TextInput
          placeholder="Story Title"
          style={{
            height: 35,
            borderWidth: 2,
            marginTop: 30,
            width: 313,
            marginLeft: 10,
          }}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TextInput
          placeholder="Author"
          style={{
            height: 35,
            borderWidth: 2,
            marginTop: 30,
            width: 313,
            marginLeft: 10,
          }}
          onChangeText={(text) => this.setState({ author: text })}
        />

        <TextInput
          multiline={true}
          placeholder="Write Your Story"
          style={{
            height: 250,
            borderWidth: 2,
            marginTop: 30,
            width: 313,
            marginLeft: 10,
          }}
          onChangeText={(text) => this.setState({ story: text })}
        />

        <TouchableOpacity
          onPress={() => {
            this.submitStory();
          }}
          style={{
            backgroundColor: 'pink',
            height: 50,
            marginTop: 15,
            marginLeft: 75,
            marginRight: 75,
            paddingLeft: 40,
            paddingTop: 5,
          }}>
          <Text style={{ fontSize: 30 }}> Publish </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
