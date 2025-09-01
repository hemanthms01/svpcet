import React,{useEffect,useRef} from 'react';
import { Image, StyleSheet, Animated, View ,Text} from 'react-native';
 const style=StyleSheet.create(
{
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:70,
  },
  img1:
  {
    width:220,
    height:220,
    position:'absolute',
    marginRight:60
  },
  img2:
  {
    width:220,
    height:220,
    position:'absolute',
    marginRight:60
  }
}
  );

function Splash({navigation}) {
  useEffect(()=>
  {
    const timer=setTimeout(() => {
      navigation.replace('Login')
    }, 1400);
    return()=>clearTimeout(timer);
  },[]);
   const move=useRef(new Animated.Value(400)).current;
   const move1=useRef(new Animated.Value(-450)).current;
   const rot=useRef(new Animated.Value(0)).current;
   const scale=useRef(new Animated.Value(1)).current;
      useEffect(()=>
      {
        
        Animated.sequence(
          [
            Animated.timing(move,{
              toValue:0,
              duration:300,
              useNativeDriver:true
            }),
            Animated.timing(move1,{
              toValue:0,
              duration:300,
              useNativeDriver:true
            }),
            Animated.timing(rot,{
              toValue:1,
              duration:300,
              useNativeDriver:true
            }),
           Animated.timing(scale,{
              toValue:1.2,
              duration:300,
              useNativeDriver:true
           })
          ]
        ).start()
      },[]);
        
     const rotate=rot.interpolate(
       {
        inputRange:[0,1],
        outputRange:['45deg','0deg'],
       }
     );
    return (
      <View style={style.container}>
       <Animated.Image source={require('../assets/clg_img.png')}
       style={[style.img1,{transform:[{translateY:move},{rotate},{scale:scale}]}]}/>
       <Animated.Image source={require('../assets/in_logo.png')}
       style={[style.img2,{transform:[{translateY:move1},{rotate},{scale:scale}]}]}/>
    </View>
  );
}
export default Splash;