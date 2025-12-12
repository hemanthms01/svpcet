import { useState } from "react";
import { View, TextInput, Button, Text, ScrollView,FlatList} from "react-native";
import axios from "axios";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const updatedChat = chat.concat({ from: "user", text: message });
    setChat(updatedChat);

    const res = await axios.post("http://172.21.140.71:5000/api/chat", {
      message
    });

    const finalChat = updatedChat.concat({ from: "AI", text: res.data.reply });
    setChat(finalChat);

    setMessage("");
  };

  return (
    <View style={{ flex: 1,marginTop:"10%",padding:15 }}>
    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:30}}>AI CHAT</Text>
    <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
      {/* <ScrollView style={{ flex: 1 }}>
        {chat.map((c, i) => (
          <Text key={i} style={{ borderRadius:10,backgroundColor:'#dcd2d2ff',marginVertical: 5, color: c.from === "user" ? "black" : "green",padding:15,fontWeight:'900' }}>
            {c.from} : {c.text}
          </Text>
        ))}
      </ScrollView> */}
      <FlatList
        data={chat}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text
            style={{
              borderRadius: 10,
              backgroundColor: "#dcd2d2ff",
              marginVertical: 5,
              color: item.from === "user" ? "black" : "green",
              padding: 15,
              fontWeight: "900",
            }}
          >
            {item.from} : {item.text}
          </Text>
        )}
      />

      
    </View>
  );
}
