import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';
export default function App() {
  const [todos, setTodos] = useState([
    {text: 'coding classes', key:'1'},
    {text: 'fetching the child', key:'2'},
    {text: 'Reading notes', key:'3'},
    {text: 'Watching tv', key:'4'},
   
  ]);
const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
}

const submitHandler =(text) =>{
  if (text.length > 3){
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    });
  } else {
    Alert.alert('OOPS!', 'Todos must be over 3 chars long',[
      {text: 'Understood', onPress: () => console.log ('alert closed')}
    ]);
  }
}
  return (
    <View style={styles.container}>
      <Header />
    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
    <View style={styles.list}>
    <FlatList
        data={todos}
        renderItem={({ item })=> (
          <TodoItem item={item} pressHandler={pressHandler} />
        ) }
    />
    </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange',
    borderRadius:30,
        marginLeft:40,
        marginRight:40
  },
});