import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

import React, { useEffect, useState } from "react";

import { auth } from "../firebase";

import { createUserWithEmailAndPassword } from 'firebase/auth';



const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
            })
            .catch((error) => alert(error.message));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.cta}>Pievienojies</Text>
            <TextInput placeholder="E-pasts" style={styles.input} onChangeText={text => setEmail(text)} ></TextInput>
            <TextInput placeholder="Parole" style={styles.input} onChangeText={text => setPassword(text)} secureTextEntry ></TextInput>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn} onPress={register}>
                    <Text style={styles.btnText}>Reģistrēties</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cta: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    input: {
        width: 300,
        height: 50,
        borderRadius: 20,
        border: '1px solid black',
        padding: 20,
        marginBottom: 20,
    },
    btnGroup: {
        width: "15%",
    },
    btn: {
        backgroundColor: '#c7a4ff',
        width: "100%",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});