import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style ={styles.title}>My Todo List 
            App</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop:20,
        backgroundColor: 'orange',
        borderRadius:30,
        marginLeft:40,
        marginRight:40


    },
    title:{
        textAlign: 'center',
        color: 'teal',
        fontSize: 30,
        fontWeight: 'bold',

    }
});
