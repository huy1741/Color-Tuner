import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const ImageDetail = props =>{
    return <View>
      <Text>{props.title}</Text>
      <Image source={props.url}/>
    </View>;
};



const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  

export default ImageDetail;