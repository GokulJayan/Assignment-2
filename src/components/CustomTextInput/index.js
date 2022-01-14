import React from 'react';
import {TextInput} from 'react-native';

export default function Credentials(props){
    
    return(
        <>
        <TextInput secureTextEntry={props.secure} style={{backgroundColor: props.bg, marginBottom:10, borderRadius:12, flex:2}} placeholderTextColor={props.color} placeholder={props.placeholder} />
        </>       
    )
}


