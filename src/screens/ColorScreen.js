import React,{useState} from 'react';
import { Text, StyleSheet,View, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = ()=>{
    const [color, setColor]= useState([]);
    return <View>
        <Button title="Add a Color" onPress={()=>{setColor([...color, randomRgb()])}}></Button>
        <FlatList keyExtractor={(item)=>item} data={color} renderItem={({item})=><View style={{height: 100, width: 100, backgroundColor: item}}></View>}></FlatList>
    </View>
}

const randomRgb = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue} )`;
}

export default ColorScreen;