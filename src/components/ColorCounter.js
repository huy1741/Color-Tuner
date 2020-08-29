import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const ColorCounter = (props) =>{
    return <View>
        <Text>{props.name}</Text>
        <Button title={`Increase ${props.name}`} onPress={props.plus}/>
        <Button title={`Decrease ${props.name}`} onPress={props.minus}/>
    </View>

}

export default ColorCounter;