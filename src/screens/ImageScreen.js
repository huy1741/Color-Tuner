import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    return (<View>
        <ImageDetail title="Forest" url={require('../../assets/forest.jpg')} />
        <ImageDetail title="Beach" url={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain" url={require('../../assets/mountain.jpg')}/> 
      
</View>);
};



const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  
export default ImageScreen;
  