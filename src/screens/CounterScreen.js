import React, {useState} from 'react';
import { Text, StyleSheet,View, Button} from 'react-native';


const CounterScreen = () => {
    const [counter, setCounter]= useState(0);
    return <View>
        <Text>Current count: {counter}</Text>
        <Button title="Increase" onPress={()=>{setCounter(counter +1)}}></Button>
        <Button title="Decrease" onPress={()=>{setCounter(counter -1)}}></Button>
    </View>
}

export default CounterScreen;