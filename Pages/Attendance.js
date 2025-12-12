import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { Calendar } from "react-native-calendars";

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#07fcfcff",
    zIndex: 1,
    position: "absolute",
  },
  stdviw: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0dedeff",
    marginBottom: "1%",
    borderRadius: 15,
    justifyContent: "space-between",
    padding: 10,
  },
  stdviw1: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#e0dedeff",
    marginBottom: "1%",
    borderRadius: 15,
    padding: 15,
  },
  txt:
  {  
    fontSize:20,
    fontWeight:'bold',
    alignSelf:"center",
  },
  prt: {
    backgroundColor: "#06f455ff",
    padding: "2%",
    borderRadius: 15,
    position:'absolute',
    marginLeft:'55%'
  },
  abt: {
    backgroundColor: "#fc0909ff",
    padding: "2%",
    borderRadius: 15,
  },
  datebt: {
    width: "30%",
    height: "10%",
    backgroundColor: "green",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: "-5%",
    position:"sticky",
  },
  optionview:
    {
        flexDirection:"column",
        marginTop:'-10%',
        marginBottom:'10%',
        transform:[{translateY:"35%"}]
    }
});

export default function Attendance({navigation}) {
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const [cal, setCal] = useState(true);
  const [txt, setTxt] = useState(false);
  const [data, setData] = useState([]);
  const [Sub,setSub]=useState(false);
  const [subject,setsubject]=useState('');
  const subjects=[{subject1:'NLP'},{subject1:'OS'},{subject1:'CVIP'},{subject1:'EDA'},{subject1:'ENVC'},{subject1:'QTA'}];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://172.21.140.71:5000/users");
        console.log("Students:", response.data.users);
        setData(response.data.users);
      } catch (error) {
        console.log("Axios Error hi:", error.message);
      }
    };
    fetchData();
  }, []);

  function btpress() {
    if (date === "") {
      setTxt(true);
    } else {
      setCal(false);
      setSub(true);
      ToastAndroid.show("Date selected: " + date, ToastAndroid.SHORT);
    }
  }
  
  function Period()
  {
    setShow(true);
    setSub(false);
  }
  function present(rollNo,date,subject,status) {
    try {
      axios.post(`http://172.21.140.71:5000/users/${rollNo}`, {
        rollNo,
        date,
        subject,
        status,
      })
      .then(() =>{ ToastAndroid.show(rollNo +" "+status, ToastAndroid.SHORT); console.log(rollNo+" "+status);})
      .catch(err => console.log("status error :"+err));
    } catch (error) {
      console.log(error);
    }
  }

  function absent(rollNo,date,subject,status) {
    try {
      axios.post(`http://172.21.140.71:5000/users/${rollNo}`, {
       rollNo,
       date,
       subject,
       status,
      })
      .then(() =>{ ToastAndroid.show(rollNo +" "+status, ToastAndroid.SHORT); console.log(rollNo+" "+status);})
      .catch(err => console.log("status error :"+err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={style.header}>
          <Ionicons
            style={{ alignSelf: "flex-start" }}
            name="reorder-three-outline"
            size={60}
          />
        </View>

        {cal && (
          <View style={{transform:[{translateY:'60%'}]}}>
            <Calendar
              style={{ marginTop: "-15%",transform:[{translateY:'-25%'}]}}
              onDayPress={(day) => setDate(day.dateString)}
              markedDates={{
                [date]: { selected: true, selectedColor: "green" },
              }}
            />
            <View style={style.datebt}>
              <Text
                onPress={btpress}
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >
                Enter
              </Text>
            </View>
            {txt && (
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontWeight: "900",
                  alignSelf: "center",
                }}
              >
                Please select Today Date
              </Text>
            )}
          </View>
        )}

        {Sub && 
        <View style={style.optionview}>
        {subjects.map((item,index)=>(
          <View style={style.stdviw1} key={index}>
          <Text style={{ fontSize: 20, fontWeight: "900" }} onPress={()=>{Period(item.subject1);setsubject(item.subject1);}}>{item.subject1}</Text>
          </View>
        ))}        
        </View>
        }

        {show ? (
          <FlatList
            style={{marginTop:'20%',height:'90%'}}
            data={data}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({ item }) => (
              <View style={style.stdviw}>
                <Text style={{ fontSize: 20, fontWeight: "900" }} onPress={()=>{navigation.navigate("StudentPG",{rollNo:item.rollNo});//ToastAndroid.show(item.rollNo,ToastAndroid.SHORT)
                }}>
                  {item.rollNo}
                </Text>
                <View style={style.prt}>
                  <Text style={{ fontSize: 18, fontWeight: "700"}} onPress={()=>present(item.rollNo,date,subject,subject+"  : present")}>Present</Text>
                </View>
                <View style={style.abt}>
                  <Text style={{ fontSize: 18, fontWeight: "700" }} onPress={()=>absent(item.rollNo,date,subject,subject+"   :   absent")}>Absent</Text>
                </View>
              </View>
            )}
          />
        ):(<Text style={[style.txt,{marginLeft:"0%",alignSelf:"center",marginTop:'100%'}]}>Loading.............</Text>)}
      </View>
    </SafeAreaView>
  );
}
