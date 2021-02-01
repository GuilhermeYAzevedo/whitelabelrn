import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";


export default function States() {
  const [name, setName] = useState('Gramosa');
  const [person, setPerson] = useState({name: 'Mario', age: 40});
  const clickHandler = () => {
    setName('Chun-li');
    setPerson({name: 'luigi', age: 45});
  }
  return (
    <View style={styles.container}>

      <Text>My Name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
    </View>
  )
    ;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  }
});
