import React, { Component } from 'react';

import {
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View
} from 'react-native'

import {
    SignUpFormP1,
    SignUpFormVerification,
    ConfirmPassword
}from '../components/signup/signup-form'
import { blue } from 'ansi-colors';

export default class SignUp extends Component {
    render(){
        return(
            <View style={styles.container}> 
                {/* <SignUpFormP1/>
                <SignUpFormVerification/> */}
                <ConfirmPassword/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
})
