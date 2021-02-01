import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function FlatListExample() {
  const [peopleName, setPeopleName] = useState([
    { name: 'Shaun', id: '1' },
    { name: 'Yoshi', id: '2' },
    { name: 'Mario', id: '3' },
    { name: 'Luigi', id: '4' },
    { name: 'Peach', id: '5' },
    { name: 'Toad', id: '6' },
    { name: 'Bowser', id: '7' },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={peopleName}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
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
