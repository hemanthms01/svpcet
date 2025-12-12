
import React, { useRef, useEffect, useState } from "react";
import {
  Text,
  View,
  Animated,
  ImageBackground,
  StyleSheet,
  TextInput,
  ToastAndroid,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { signUp } from "aws-amplify/auth";

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    fontSize: 30,
    paddingRight: '6%',
    paddingLeft: '6%',
    marginBottom: 40
  },
  title1: {
    color: 'black',
    textAlign: 'center',
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 4,
    marginBottom: 40
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginBottom: "5%",
  }
});

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [mob, setMob] = useState('');
  const [dept, setDept] = useState('');
  const [reg, setReg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const colourscheme = useColorScheme();

  function handleRegister() {
    try {
      signUp({   
        username: email.trim(),
        password: password,
        attributes: { email: email.trim() }
      }).then(() => {
          ToastAndroid.show(name + ' Your Registered with Cognito', ToastAndroid.SHORT);
      }).catch(error => {
        console.log('Error signing up with Cognito:', error);
        ToastAndroid.show('Error: ' + error.message, ToastAndroid.LONG);
      });
    } catch (error) {
      console.log("Exception:", error);
    }

    axios.post('http://172.21.140.71:5000/users', {
      name,
      rollNo,  
      mob,
      dept,
      reg,
      email,
      password,
      role:'students'
    }).then(() => {
      ToastAndroid.show(name + ' Your Registered in DB', ToastAndroid.SHORT);
      navigation.navigate('OtpScreen', { email, password });
      setName('');
      setRollNo('');
      setMob('');
      setDept('');
      setReg('');
      setEmail('');
      setPassword('');
      setLoading(false);
    }).catch(err => {
      console.log("Axios error:", err);
      ToastAndroid.show('Error in API: ' + err.message, ToastAndroid.LONG);
      setLoading(false);
    });
  }

  const input1 = useRef(new Animated.Value(-300)).current;
  const input2 = useRef(new Animated.Value(-300)).current;
  const input3 = useRef(new Animated.Value(-300)).current;
  const input4 = useRef(new Animated.Value(-300)).current;
  const input5 = useRef(new Animated.Value(-300)).current;
  const input6 = useRef(new Animated.Value(-300)).current;
  const input7 = useRef(new Animated.Value(-300)).current;
  const tile = useRef(new Animated.Value(-300)).current;
  const bt = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(input1, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input2, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input3, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input4, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input5, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input6, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(input7, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(tile, { toValue: 0, duration: 600, useNativeDriver: true }),
        Animated.timing(bt, { toValue: 0, duration: 600, useNativeDriver: true })
      ])
    ]).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={style.container} source={require('../assets/create_AC.jpg')}>
        <Animated.View style={{ transform: [{ translateY: tile }] }}>
          <Text style={style.title}>Student Register</Text>
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input1 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setName} value={name}
            placeholder="Enter the Name :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input2 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setRollNo} value={rollNo}
            placeholder="Enter the Roll No :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input3 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setMob} value={mob}
            placeholder="Enter the Mobile No :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input4 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setDept} value={dept}
            placeholder="Enter the Department :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input5 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setReg} value={reg}
            placeholder="Enter the Regular :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input6 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setEmail} value={email}
            placeholder="Enter the Email id :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: input7 }] }}>
          <TextInput style={style.input}
            placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
            onChangeText={setPassword} value={password}
            secureTextEntry={true}
            placeholder="Create New password :" />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY: bt }] }}>
          {loading ? <ActivityIndicator size={'large'} color={'green'} /> :
            <View>
              <Text style={[style.title1, { marginTop: -1, width: 200, backgroundColor: '#00f7fe', color: 'black' }]}
                onPress={() => {
                  setLoading(true);
                  handleRegister();
                }}>
                Register
              </Text>
            </View>}
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
}
