import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button onPress={() => navigation.navigate('Components')} title="Go to Components Demo"></Button>
    <Button onPress={() => navigation.navigate('List')} title="Go to Lists Demo"></Button>
    <Button onPress={() => navigation.navigate('Image')} title="Go to Image Demo"></Button>
    <Button onPress={() => navigation.navigate('Counter')} title="Go to Counter Demo"></Button>
    <Button onPress={() => navigation.navigate('Color')} title="Go to Color Demo"></Button>
    <Button onPress={() => navigation.navigate('Square')} title="Go to Square Screen Demo"></Button>
    <Button onPress={() => navigation.navigate('Text')} title="Go to Text Screen Demo"></Button>
    <Button onPress={() => navigation.navigate('Box')} title="Go to Box Screen Demo"></Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
