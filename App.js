import { StatusBar } from 'expo-status-bar';
import Firebase from './myFirebase/firebase'
// import firebase from 'firebase'
import React, { Component } from 'react';
import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import LoginForm from './components/LoginForm'
import Navigator from './components/Navigator'

import FlashScreen from './components/FlashScreen'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: null
    }
  }

  componentWillMount() {
    //   firebase.initializeApp({
    //     apiKey: "AIzaSyA4-3FrIIaad98BT8L4qoe9qVFRIQEEaF4",
    //     authDomain: "reactnativefirebase-fb24f.firebaseapp.com",
    //     databaseURL: "https://reactnativefirebase-fb24f.firebaseio.com",
    //     projectId: "reactnativefirebase-fb24f",
    //     storageBucket: "reactnativefirebase-fb24f.appspot.com",
    //     messagingSenderId: "467973807771",
    //     appId: "1:467973807771:web:4802df41c72d1ac0f2303e",
    //     measurementId: "G-K7RH06ZHB9"
    //   });
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true
        })
      }
      else {
        this.setState({
          isLoggedIn: false
        })
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return <Navigator />
      case false:
        return <LoginForm />
      default:
        <ActivityIndicator size="large" />
    }
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
