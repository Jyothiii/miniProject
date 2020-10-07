
import * as firebase from 'firebase';
import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            pass: '',
            errorMsg: '',
            loading: false
        }
    }

    onButtonPress() {
        const { email, pass } = this.state
        this.setState({
            errorMsg: '',
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(this.onSuccessLogin.bind(this))
            .catch((error) => {
                // firebase.auth().createUserWithEmailAndPassword(email,pass)
                // .then(this.onSuccessLogin.bind(this))
                // .catch((error)=>{
                this.setState({
                    errorMsg: error.toString(),
                    loading: false
                });
                // });

            });
    }

    onSuccessLogin() {
        this.setState({
            email: '',
            pass: '',
            loading: false,

        })
    }

    renderButton() {
        if (this.state.loading) {
            return <ActivityIndicator style={styles.btn} size="small" />;
        }
        return (
            <TouchableOpacity style={styles.btn} onPress={this.onButtonPress.bind(this)}>
                <Text >Sign in</Text>
            </TouchableOpacity>
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={{ width: 100, height: 100, borderRadius: 10 }}
                        source={require('../assets/react.png')} />
                </View>
                <View style={styles.loginContainer}>
                    <Text style={{ alignSelf: 'center' }}>Sign in</Text>
                    <View>
                        <Icon name='ios-person' size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder=" | Email" value={this.state.email}
                            onChangeText={email => this.setState({ email })} />
                    </View>
                    <View>
                        <Icon name='ios-key' size={30} style={styles.inputIcon} />
                        <TextInput style={styles.textInput} placeholder=" | password" secureTextEntry={true}
                            value={this.state.pass} onChangeText={pass => this.setState({ pass })} />
                    </View>
                    <Text style={styles.errorTextStyle}>{this.state.errorMsg}</Text>
                </View>


                {this.renderButton()}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    loginContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 1,
        width: '95%'
    },
    textInput: {
        height: 50,
        marginVertical: 20,
        paddingLeft: 40,
        borderRadius: 25,
        borderWidth: 1,
    },
    inputIcon: {
        position: 'absolute',
        top: 30,
        left: 10,
        paddingBottom: 10,
    },
    btn: {

        height: 40,
        margin: -20,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        paddingTop: 10,
        borderWidth: 1,
        fontWeight: 'bold',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 20
    },
    signUpStyle:{
        marginVertical:30
    }
})

export default LoginForm
