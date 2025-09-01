import React,{useRef,useEffect} from 'react';
import {Text,View,StyleSheet,ImageBackground, TextInput,Button,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 import { SafeAreaView } from 'react-native-safe-area-context';
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
      width:'100%',
      height:70,
     // backgroundColor:'skyblue',
      textAlign:'center',
      textAlignVertical:'center',
      fontSize:30,
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
      marginLeft:120
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
export default function StaffAc()
{
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
  return(
    <SafeAreaView style={{flex:1}}>

    <ImageBackground style={style.img} source={require('../assets/back.jpg')} resizeMode="stretch">
    <Animated.View style={[{transform:[{translateY:mov}]}]}>
        <Icon style={style.stf} name='people-outline' size={150}/>
    </Animated.View>
        <Animated.View style={[{transform:[{translateY:mov}]}]}>
        <Text style={style.title}>Staff Id Login</Text>
        </Animated.View>
     <ImageBackground style={style.h}>
     <Animated.View style={{transform:[{translateY:move}]}}>
    <TextInput style={style.id} placeholder="Enter your user id :"/>
     </Animated.View>
         <Animated.View style={{transform:[{translateY:move}]}}>
    <TextInput style={style.pass} placeholder="Enter your password :"/>
         </Animated.View>
         <Animated.View style={{transform:[{translateY:move}]}}>
    <View style={style.bt}>
      <Text style={style.btxt}>Login</Text>
    </View>
         </Animated.View>
    <Text style={style.forgot}>Forgot password?</Text>
     </ImageBackground>
    </ImageBackground>
    </SafeAreaView>
    
  );
}

