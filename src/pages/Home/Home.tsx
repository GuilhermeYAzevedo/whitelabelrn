import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Aquelas Home com uns butão</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
      <Button
        title="Go to states"
        onPress={() => {
          navigation.navigate('States', {text: 'hi!'});
        }}
      />
      <Button
        title="Go to Inputs"
        onPress={() => {
          navigation.navigate('Inputs', {text: 'hi!'});
        }}
      />
      <Button
        title="Go to Lists"
        onPress={() => {
          navigation.navigate('ListsScrollView', {text: 'hi!'});
        }}
      />
      <Button
        title="Go to Flat List"
        onPress={() => {
          navigation.navigate('FlatList', {text: 'hi!'});
        }}
      />
      <Button
        title="Go to Touchable Components"
        onPress={() => {
          navigation.navigate('TouchableComponents', {text: 'hi!'});
        }}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    marginTop: 10,
  },
});
