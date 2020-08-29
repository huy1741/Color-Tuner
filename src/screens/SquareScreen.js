import React,{useReducer} from 'react';
import { Text, StyleSheet,View, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';
const colorIncrement = 15;
const reducer =(state, action)=>{
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount>255 || state.red +action.amount<0 ? state: {...state, red: state.red +action.amount};
        case 'green':
            return state.green + action.amount>255 || state.green +action.amount<0 ? state: {...state, green: state.green +action.amount};
        case 'blue':
            return state.blue + action.amount>255 || state.blue +action.amount<0 ? state: {...state, blue: state.blue +action.amount};

    
        default:
            return state;
    }
};

const SquareScreen = () =>{
    const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 });
    const {red, green, blue}=state;
    
    
    
    
       
    
    
    return <View>
        <ColorCounter name="Red" plus={()=>dispatch({colorToChange: 'red', amount: colorIncrement})} minus={()=>dispatch({colorToChange: 'red', amount: -1*colorIncrement})}></ColorCounter>
        <ColorCounter name="Green" plus={()=>dispatch({colorToChange: 'green', amount: colorIncrement})} minus={()=>dispatch({colorToChange: 'green', amount: -1*colorIncrement})}></ColorCounter>
        <ColorCounter name="Blue" plus={()=>dispatch({colorToChange: 'blue', amount: colorIncrement})} minus={()=>dispatch({colorToChange: 'blue', amount: -1*colorIncrement})}></ColorCounter>
        <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue} )`}}/>
</View>
};



const styles = StyleSheet.create({
    
});

export default SquareScreen;