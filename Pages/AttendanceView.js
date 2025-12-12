import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet,FlatList,TextInput, ToastAndroid} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useIsFocused } from '@react-navigation/native';




const style=StyleSheet.create({
     title:
     {
        fontSize:20,
        fontWeight:'900'
     },
     txt:
  {  
    fontSize:20,
    fontWeight:'bold',
    alignSelf:"center",
  },
  bt:
    {
        height:'28%',
        width:'30%',
        backgroundColor:'cyan',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'5%'
    },
    attendance: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0dedeff",
    marginBottom: "1%",
    borderRadius: 15,
    justifyContent:"space-evenly",
    padding: 10,
  },
    });
export default function AttendanceView({route})
{
    const {rollNo}=route.params;
   const [Data,setData]=useState(null);
   const isFocused=useIsFocused();
   

   
   useEffect(()=>{
   const fetch=async ()=>
   {
    try {
    const response= await axios.get(`http://172.21.140.71:5000/student/${rollNo}`);
    setData(response.data.student);
   // console.log("API RESPONSE:", JSON.stringify(response.data, null, 2));

   } catch (error) {
    console.log("ERROR :"+error); // 23G01A4358
   }
}
       fetch();
   },[]);

    return(
        <SafeAreaView>
        {Data ? (
        <FlatList 
        data={Data.attendance}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>
        (   
            <View style={style.attendance}>
                <Text style={style.txt}>{item.date}</Text>
                {/* <Text style={{alignSelf:'center',position:'absolute', fontWeight: '600', fontSize: 15}}>{item.subname}</Text> */}
                <Text style={{ marginLeft: '30%', fontWeight: '600', fontSize: 15 }}>{item.status}</Text>
            </View>
        )}/>
         ) : (<Text style={[style.txt,{marginLeft:"0%",alignSelf:"center",marginTop:'100%'}]}>Loading........</Text>)}
        </SafeAreaView>

    );
}