import React from 'react';
import {Alert, Button, StyleSheet, Text, View, Image, TextInput, ImageBackground, Dimensions } from 'react-native';
import Credentials from '../../CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{ uri: 'https://www.creativefabrica.com/wp-content/uploads/2018/12/Initial-Letter-CA-Logo-by-meisuseno-312x208.jpg' }}
          style={{ width: 150, height: 150, borderRadius: 75, borderColor: 'black', borderWidth: 3, overflow: "hidden" }}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={{ fontSize: 30, color: '#f22727', textAlign: 'center', fontWeight: 'bold' }}>Welcome</Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', textAlign: 'left', marginTop: 10, marginBottom: 9 }}>Username</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon style={styles.icon1} name="user" size={25} color="#900" />
          <Credentials bg='#f0f5f1' color='grey' placeholder="Enter username..." />
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', textAlign: 'left', marginTop: 10, marginBottom: 9 }}>Password</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon style={styles.icon2} name="key" size={25} color="#900" />
          <Credentials secure={true} bg='#f0f5f1' color='grey' placeholder="Enter password..." />
        </View>

        <View style={{marginTop:5, alignItems:'center'}}>
          <Text>Forgot password?</Text>
        </View>

        <View style={{paddingTop:14}}>
          <Button
            title="Login"
            color="#f22727"
            onPress={() => Alert.alert('Login Button is pressed')}
          />
        </View>

        <View style={{marginTop:15, alignItems:'center'}}>
          <Text>Don't have an account?</Text>
        </View>

        <View style={{marginTop:10, alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:17, color:'black'}}>Create an Account</Text>
        </View>

      </View>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f22727',
  },

  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottom: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },

  icon1: {
    paddingLeft: 5,
    paddingRight: 12,
    paddingTop: 10
  },

  icon2: {
    paddingRight: 6,
    paddingTop: 10
  }
});