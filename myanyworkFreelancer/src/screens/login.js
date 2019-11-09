import React, { Component } from 'react';

import {
    KeyboardAvoidingView,
    Text,
    StyleSheet
} from 'react-native'

import LoginForm from '../components/login-form'
import { blue } from 'ansi-colors';

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                <Text style={{alignSelf: "center"}}>"Insert Logo HERE"</Text>
                <LoginForm/>
  
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
})
