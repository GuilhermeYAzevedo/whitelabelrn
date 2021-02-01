import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TouchableComponents() {
  const [peopleName, setPeopleName] = useState([
    {name: 'Shaun', id: '1'},
    {name: 'Yoshi', id: '2'},
    {name: 'Mario', id: '3'},
    {name: 'Luigi', id: '4'},
    {name: 'Peach', id: '5'},
    {name: 'Toad', id: '6'},
    {name: 'Bowser', id: '7'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeopleName((previousPeople) => {
        return previousPeople.filter(people => people.id != id);
    });
}


  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={peopleName}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
