import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function TopView() {

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color:'royalblue'}}>Welcome</Text>
      <Image 
      source={{uri:'https://cdn.logo.com/hotlink-ok/logo-social.png'}}
      style={{width:200,height:200}}
      />
      <TextInput
      placeholder='Enter Username'
      />
    </View>
  );

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});