import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet,ToastAndroid} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
const style = StyleSheet.create({
  profile:
  {
   alignSelf:'center',
   marginTop:'30%'
  },
  txt:
  {
    fontSize:20,
    fontWeight:'bold',
    marginLeft:'10%',
    marginBottom:'8%',
  }
});

export default function StudentPG({route}) {
        const {rollNo}=route.params;
        const [Std,setStd]=useState(null);
        const [loading,setLoading]=useState(true);

   useEffect(()=>
{
    const fetch= async ()=>
    {
        try {
        const response= await axios.get(`http://10.61.64.71:5000/student/${rollNo}`)
        setStd(response.data.student);
    } catch (err) {
        console.log("error :"+err);
    }finally {
      setLoading(false);
    }

    }
    fetch();
    ToastAndroid.show(rollNo,ToastAndroid.SHORT);
},[]);
  
  const options = [{ logo: "person", name: "Profile" }];
if(loading)
{
    return(
        <Text style={[style.txt,{marginLeft:"0%",alignSelf:"center",marginTop:'100%'}]}>Loading......</Text>
    )
}
if(Std === null)
{
    return(
        <Text style={[style.txt,{marginLeft:"0%",alignSelf:"center",marginTop:'100%'}]}>Not Found</Text>
    )
}
  return (
    <SafeAreaView>
      <View>
        <Ionicons style={style.profile} name="person" size={100} color={"black"}/>
        <Text style={[style.txt,{marginLeft:'0%',textAlign:'center',marginTop:'8%'}]}>{Std.name}</Text>
        <Text style={style.txt}>Roll No : {Std.rollNo}</Text>
        <Text style={style.txt}>Department : {Std.dept}</Text>
        <Text style={style.txt}>percentage : {Std.percentage}</Text>   
      </View>
    </SafeAreaView>
  );
}
