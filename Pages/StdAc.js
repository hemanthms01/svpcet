import React,{useRef,useEffect,useState} from "react";
import {Text,View,TextInput,ImageBackground,StyleSheet,Animated,useColorScheme} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { Amplify } from "aws-amplify";
import { signIn, signOut } from "aws-amplify/auth";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);


const style=StyleSheet.create(
  {
    container:
    {
      
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    title:
    {
      width:250,
      height:50,
      textAlign:'center',
      backgroundColor:'white',
      textAlignVertical:'center',
      fontSize:30,
      marginLeft:70,
      borderRadius:20,
      color:'black',
      marginTop:150,
      position:'absolute',
      fontFamily:'sans-serif-condensed',
      fontWeight:'bold',
    },
    id:
    {
      width:300,
      height:60,
      marginTop:120,
      marginLeft:40,
      borderRadius:20,
      borderWidth:4,
      paddingLeft:20,
      fontSize:15,
      fontWeight:'bold'
    },
    pass:
    {
     width:300,
      height:60,
      marginTop:30,
      marginLeft:40,
      borderRadius:20,
      color:'black',
      borderWidth:4,
      paddingLeft:20,
      fontSize:15,
      fontWeight:'bold'
    },
    forgot:
    {
      width:200,
      height:60,
      marginTop:20,
      marginLeft:140
    },
    h:
    {
      position:'relative',
      height:600,
      backgroundColor:'white',
      marginTop:250,
      borderRadius:70,
      
    },
    img:{
      width:'100%',
      height:'100%',
    },
    stf:
    {
      position:'absolute',
      marginLeft:120,
      color:'white'
    },
    bt:
    {
      width:150,
      marginTop:50,
      backgroundColor:'black',
      height:40,
      marginLeft:120,
      borderRadius:20,
      textAlign:'center',
    },
    btxt:
    {
      fontSize:20,
      color:'white',
      textAlign:'center',
      marginTop:5,
    }
  }
);
export default function StdAc({navigation})
{
  const colourscheme=useColorScheme();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [msg,setMsg]=useState('');
  const mov=useRef(new Animated.Value(-400)).current;
    const move=useRef(new Animated.Value(400)).current;
      useEffect(()=>
      {
        Animated.parallel(
          [
          Animated.timing(mov,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
          }),
          Animated.timing(move,
            {
              toValue:0,
            duration:1000,
            useNativeDriver:true
            }
          )
        ]
        ).start();
      },[]);

async function login() {
  try {
    const result =await signIn({
      username:email.trim(),
      password:password.trim()});
    navigation.navigate("Home",{email});
    console.log("✅ Success:", result);
  } catch (err) {
    setMsg(err.message);
  }


}
function signout()
{
   try {
    signOut()
    .then(()=>console.log("Successfully signout"))
    .catch(err=>console.log(err));

  } catch (err) {
    console.log("❌ RAW ERROR:", err);
    
  }

}




  return(
    <SafeAreaView style={{flex:1}}>

  <ImageBackground style={style.img} source={require('../assets/staff_img.jpg')} resizeMode="stretch">
      <Animated.View style={[{transform:[{translateY:mov}]}]}>
          <Icon style={style.stf} name='people' size={150}/>
      </Animated.View>
          <Animated.View style={[{transform:[{translateY:mov}]}]}>
          <Text style={style.title}>Student Id Login</Text>
          </Animated.View>
       <ImageBackground style={style.h}>
       <Animated.View style={{transform:[{translateY:move}]}}>
      <TextInput style={style.id} value={email} onChangeText={setEmail}
      placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}      
      placeholder="Enter your user id :"/>
       </Animated.View>
           <Animated.View style={{transform:[{translateY:move}]}}>
      <TextInput style={style.pass} value={password} onChangeText={setPassword} secureTextEntry={true}
      placeholderTextColor={colourscheme === 'light' ? '#888' : '#ccc'}
      placeholder="Enter your password :"/>
           </Animated.View>
           <Animated.View style={{transform:[{translateY:move}]}}>
           <View style={{justifyContent:'center',alignItems:'center',top:'20%'}}>
           {msg && <Text style={{color:"red",fontWeight:'800'}}>{msg}</Text>}
           </View>
      <View style={style.bt}>
        <Text style={style.btxt} onPress={login}>Login</Text>
      </View>
           </Animated.View>
      <Text style={style.forgot} onPress={signout}>Forgot password?</Text>
       </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
}


