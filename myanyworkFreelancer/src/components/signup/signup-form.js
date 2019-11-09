import React, { Component } from 'react';

import{
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';
import { grey } from 'ansi-colors';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 44 : 0

export class SignUpFormP1 extends Component {
    render(){
         return(
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} style = {styles.container}>
                <View>
                    <Text style={{alignSelf: "center"}}>"Insert Logo HERE"</Text>
                </View>
                <View style={styles.enterPhoneCont}>
                    <Text style={styles.labelTxt}>Enter your phone number here: </Text>
                        <TextInput 
                            placeholder="+234 Phone number"
                            style = {styles.textInput}
                            >
                        </TextInput>
                </View>
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Next</Text>
                    </TouchableOpacity>
                    <View style={styles.orSignupCont}>
                        <TouchableWithoutFeedback>
                               <Text style={styles.orSignupTxt}>Cancel</Text> 
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </KeyboardAvoidingView>
         )
    }
}

export class SignUpFormVerification extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Text style={{alignSelf: "center"}}>"Insert Logo HERE"</Text>
                </View>
                <View style={styles.verifCont}>
                   <View>
                         <Text style={styles.vcLabelTxt}>Enter Verification code: </Text>
                    </View>
                    <View style={styles.vcCont}>
                        <TextInput style={styles.vcTxt}/>
                        <TextInput style={styles.vcTxt}/>
                        <TextInput style={styles.vcTxt}/>
                        <TextInput style={styles.vcTxt}/>
                    </View>
                    <View>
                        <TouchableWithoutFeedback >
                            <Text style={styles.resendBtnCont}>Resend</Text> 
                        </TouchableWithoutFeedback>
                    </View> 
                </View>
            </View>
         )
    }
}

export class ConfirmPassword extends Component {
    render(){
         return(
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} style = {styles.container}>
                <View>
                    <Text style={{alignSelf: "center"}}>"Insert Logo HERE"</Text>
                </View>
                <View style={styles.enterPhoneCont}>
                    <Text style={styles.labelTxt}>Create a password: </Text>
                        <TextInput 
                            placeholder="Password"
                            style = {styles.passtextInput}
                            >
                        </TextInput>
                        <TextInput 
                            placeholder="Confirm password"
                            style = {styles.passtextInput}
                            >
                        </TextInput>
                </View>
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Done</Text>
                    </TouchableOpacity>
                    <View style={styles.orSignupCont}>
                        <TouchableWithoutFeedback>
                               <Text style={styles.orSignupTxt}>Cancel</Text> 
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </KeyboardAvoidingView>
         )
    }
}

export default SignUpFormP1;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelTxt: {
        marginBottom: '10%'
    },
    textInput: {
        padding: '2%',
        margin: '2%',
        width: '80%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 222,
    },
    btnContainer: {
        width: "100%", 
        alignItems: "center",
        justifyContent: "flex-end"
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(233, 200, 255)',
        borderRadius: 11,
        width:  '88%',
        height: 44,
    },
    loginBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: '500',
        justifyContent: "center",
        alignSelf: "center"
    }, 
    orSignupCont: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: '6%',
        marginTop: '1.5%',
        marginBottom: '6%'
    },
    orSignupTxt: {
        paddingLeft: '1.5%',
        paddingRight: '1.5%',
        color: 111,
        fontWeight: '500'
    },
    enterPhoneCont: {
        width: '100%', 
        alignItems: "center"
    },
    // verfication code
    verifCont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    vcCont: {
        flexDirection: 'row',
        width: '50%',
        marginBottom: '5%',
        justifyContent: 'center'
    },
    vcLabelTxt: {
        marginBottom: '2%'
    },
    vcTxt: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 222,
        height: 44,
        marginRight: '5%',
        width: '20%'
    },
    resendBtnCont: {
        marginBottom: '90%'
    },
    // create password
    passtextInput: {
        padding: '2%',
        margin: '2%',
        marginBottom: '5%',
        width: '80%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 222,
    }
})