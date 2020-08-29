import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 22},
        {name: 'Friend 3', age: 25},
        {name: 'Friend 4', age: 24},
        {name: 'Friend 5', age: 21},
        {name: 'Friend 6', age: 26},
        {name: 'Friend 7', age: 23},
    ]
    return (
        <FlatList
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item:{name, age}})=>{
                return <Text style={styles.textStyle}>{name} - Age: {age}</Text>;
            }}
            ></FlatList>

    )
};

const styles = StyleSheet.create({
    
})

export default ListScreen;