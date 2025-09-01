import React,{useEffect,useRef} from 'react';
import { FlatList, View, Text, StyleSheet,ImageBackground,Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login({navigation}) {
   const slide=useRef(new Animated.Value(200)).current;
   const slide2=useRef(new Animated.Value(-200)).current;

  useEffect(()=>{
      Animated.parallel([
      Animated.timing(slide,{
        toValue:0,
        duration:600,
        useNativeDriver:true
      }),
      Animated.timing(slide2,{
        toValue:0,
        duration:600,
        useNativeDriver:true
      })
      ]).start()
  },[]);
  return (
    <SafeAreaView>

    <ImageBackground style={style.img} source={require('../assets/splash.jpg')} resizeMode="stretch">
        <View style={style.header}>
            <Text style={style.title_name}>Login & Register</Text>
        </View>
        <Animated.View style={{transform:[{translateX:slide}]}}>
        <View style={style.icon}>
        <Ionicons name="people" size={150} color={"white"}/>
        <Text style={style.button} onPress={()=>navigation.navigate('StaffAc')}>Staff Login</Text>
        </View>
        </Animated.View>
        <Animated.View style={{transform:[{translateX:slide2}]}}>
        <View style={[style.icon,{marginTop:'-5%'}]}>
        <Ionicons name="person-circle" size={150} color={"white"}/>
        <Text style={style.button} onPress={()=>navigation.navigate('StdAc')}>Students Login</Text>
        </View>
        </Animated.View>
        <View style={style.button2}>
          <Text style={[style.button,{height:'100%'}]} onPress={()=>navigation.navigate('Register')}>Students Register</Text>
        </View>
       </ImageBackground>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  img:{
      width:'100%',
      height:'100%',
    },
    icon:
    {
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      top:'2%'
    },
    button:
    {
      width:'55%',
      height:'19%',
      fontSize:20,
      backgroundColor:'white',
      borderRadius:20,
      textAlign:'center',
      textAlignVertical:"center",
      fontWeight:'bold'
    },
    button2:
    {
      width:'100%',
      height:'7%',
      top:'-2%',
      alignItems:'center',
      justifyContent:'center'
    },
  Background:
   {
    width:'100%',
    height:'100%'
   },
    header:
    {
        width:'100%',
        height:'8%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    title_name:
    {
        fontSize:20,
        fontWeight:'bold'
    }
});
