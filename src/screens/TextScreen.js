import { Text, StyleSheet,View, Button, TextInput} from 'react-native';
import React,{useState} from 'react';

const TextScreen = ()=>{
    const [name, setName] = useState('');
    
    return <View>
     <Text>Enter Password:</Text>
     <TextInput 
     style={styles.input} 
     autoCapitalize="none"
     autoCorrect={false}
     value={name}
     onChangeText={newValue=> setName(newValue)}
     />
     {name.length < 5 ? <Text>Password must be at least 5 letters</Text> : null}
    </View>
    
};

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;