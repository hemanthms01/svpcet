import React from "react";
import { Text,View,StyleSheet,FlatList } from "react-native";
const style=StyleSheet.create({
    header:
    {
        width:'100%',
        height:"10%",
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:
    {
        width:'15%',
        height:'10%',
        backgroundColor:"#888"
    }
    });
export default function Home()
{
    const options=[
        {option:'Attendance'},
        {option:'List of Students'},
        {option:'Attendance Percentage'},
        {option:'Attendance Percentage'},
        /* {option:'Attendance'},
        {option:'Attendance'},
         */
    ]
    return(
        <View style={style.container}>
        <View style={style.header}>
            <Text>Home</Text>
        </View>
        <FlatList 
        data={options}
        renderItem={({item,index})=>
        {
            return(
                <View>
                    <View style={style.img}></View>
                    <Text>{item.option}</Text>
                </View>
            );
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between'}}
        />
        </View>
    );
}