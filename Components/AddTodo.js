import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);

    }
    const handleDelete = (item) => {
        props.Delete(item)
    
        
      }
    return (

        <View>
         <TextInput
             style={styles.input}
             placeholder='Enter items...'
             onChangeText={(val) => changeHandler(val)}
         />
         <Button onPress={() => submitHandler(text) } title='add-todo' />
        
        </View>
     
    )
   
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 40,
        borderBottomWidth:1,
        borderBottomColor:'teal',
        marginLeft:100,
        marginRight:100,
        fontSize:16,
        textAlign:'center'
        

    }
});