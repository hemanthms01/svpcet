import React,{useState,useEffect} from "react";
import { Text,FlatList,StyleSheet,View,useWindowDimensions,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";

const style=StyleSheet.create({
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%",
            marginTop:'-5%'
        },
        page2:
        {
            width:'100%',
            height:'100%',
            backgroundColor:'white',
            justifyContent:'space-around',
            alignItems:'center',
            paddingTop:"15%"
        },
        option:
        {
            width:'80%',
            height:'5%',
            flexDirection:'row',
            alignItems:'center',
        },
        text:
        {
            fontSize:20,
            fontWeight:'900'
        },
        arrow:
        {
            position:'absolute',
            transform:[{translateX:"900%"}]
        },
        header:
    {
        width:'100%',
        height:"10%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#07fcfcff',
    },

});
export default function Profile({navigation})
{
        const [image,setImage]=useState(null);
    return(
        <SafeAreaView>

              <View style={style.header}>
            <Ionicons style={{alignSelf:'flex-start'}} name="reorder-three-outline" size={60}/>
              </View>
                <View style={style.page2}>
                    <View style={style.option} >
                        <Ionicons style={style.profile} name={"settings"} size={35} color={"black"} />
                        <Text style={style.text}>Profile</Text>
                        <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'} />
                    </View>
                    <View style={style.option}>
                        <Ionicons style={style.profile} name={"person-circle"} size={35} color={"black"} />
                        <Text style={style.text}>personal Details</Text>
                        <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'} />
                    </View>
                    <View style={style.option}>
                        <Ionicons style={style.profile} name={"lock-closed"} size={35} color={"black"} />
                        <Text style={style.text}>password and security</Text>
                        <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'} />
                    </View>
                    <View style={style.option}>
                        <Ionicons style={style.profile} name={"notifications"} size={35} color={"black"} />
                        <Text style={style.text}>Notifications</Text>
                        <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'} />
                    </View>
                    <View style={style.option}>
                        <Ionicons style={style.profile} name={"log-out"} size={35} color={"black"} />
                        <Text style={style.text}>Log Out</Text>
                        <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'} />
                    </View>
                    <View style={{ width: '80%', height: '10%', backgroundColor: 'white', borderRadius: 20 }}>
                        <Text></Text>
                    </View>
                    <View style={{ width: '80%', height: '10%', backgroundColor: 'white', borderRadius: 20 }}>
                        <Text></Text>
                    </View>
                </View>
        </SafeAreaView>
    );
} 