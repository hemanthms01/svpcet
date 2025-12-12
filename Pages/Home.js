import React from "react";
import { Text,View,StyleSheet,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';


const style=StyleSheet.create({
    header:
    {
        width:'100%',
        height:"12%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#07fcfcff',
        position:"absolute"
    },
    optionview:
    {
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'50%',
        marginBottom:'40%',
        position:"relative"
    }
    
    });
export default function Home({navigation})
{
    //const {email}=route.params;
    const options=[
        {logo:'logo-electron',name:'AI CHAT',page:'ChatScreen'},
        {logo:'newspaper',name:'Attendance View',page:'EnterRollNo'},
        {logo:'folder-open-outline',name:'Information'},
    ];

    /* function logo(item)
    {
       
    } */
    return(
        <SafeAreaView>

        <View>
        <View style={style.header}>
        <Ionicons style={{alignSelf:'flex-start'}} name="reorder-three-outline" size={60}/>
        </View>
        <View style={style.optionview}>
            {options.map((item,index)=>
            (
                <View key={index} style={{width:'50%',alignItems:'center',marginTop:'10%'}}>
                <Ionicons onPress={()=>navigation.navigate(item.page)} name={item.logo} size={80} /> 
                <Text style={{marginTop:'2%',fontWeight:'bold',fontSize:20}} >{item.name}</Text>
                </View>
            ))}
        </View>
        </View>
        </SafeAreaView>

    );
}