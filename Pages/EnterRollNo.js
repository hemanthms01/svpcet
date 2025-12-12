import React,{useState,useEffect} from "react";
import { Text,View,StyleSheet,FlatList,TextInput, ToastAndroid} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const style=StyleSheet.create({
     search:
     {
        fontWeight:'bold',
        fontSize:20,
        marginTop:'5%',
        borderWidth:2,
        width:"70%",
        borderRadius:15,
        paddingLeft:10
     },
     title:
     {
        fontSize:20,
        fontWeight:'900'
     },
     comp:
     {
        alignItems:'center',
        marginTop:'60%',
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
    }
    });
export default function EnterRollNo({navigation})
{
   const [rollNo,setrollNo]=useState('');
   

    return(
        <SafeAreaView>
        <View style={style.comp}>
        <Text style={style.title}>Attendance Data</Text>
        <TextInput style={style.search} 
        placeholder="Enter the Roll No :" 
        value={rollNo} onChangeText={setrollNo}
        />
        <View style={style.bt}>
            <Text style={style.title} onPress={()=>navigation.navigate("AttendanceView",{rollNo})}>Enter</Text>
        </View>
        </View>
        </SafeAreaView>

    );
}