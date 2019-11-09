import React, { Component } from 'react';

import{
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { grey } from 'ansi-colors';

export default class LoginForm extends Component {
    render(){
         return(
            <View style = {styles.container}>
                <TextInput 
                placeholder="+234 Phone number"
                style = {styles.textInput}
                >
                </TextInput>
                <TextInput 
                placeholder="Password"
                style = {styles.textInput}
                ></TextInput>
                <View style={styles.fPasswordCont}>
                    <TouchableWithoutFeedback>
                      <Text style={styles.fPassword}>forgotten password?</Text> 
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.orSignupCont}>
                        <Text style={{color:'gray'}}>or</Text>
                        <TouchableWithoutFeedback>
                               <Text style={styles.orSignupTxt}>Sign up</Text> 
                        </TouchableWithoutFeedback>
                    </View>
                
                </View>
              
            </View>
         )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textInput: {
        padding: '2%',
        margin: '2%',
        width: '88%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 222
    },
    fPassword: {
        alignSelf: 'flex-end',
        paddingRight: '5%',
        fontWeight: "500",
        color: "gray",
        marginTop: '1%',
    },
    fPasswordCont: {
        alignSelf: 'flex-end'
    },
    btnContainer: {
        width: "100%", 
        alignItems: "center",
        marginTop: '30%',
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
    }
})