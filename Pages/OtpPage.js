import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { confirmSignUp, signIn } from "@aws-amplify/auth";

export default function OtpScreen({navigation,route}) {
  const { email, password } = route.params;
  const otpInput = useRef(null);
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      alert("Please enter the OTP");
      return;
    }
    try {
      await confirmSignUp({
        username: email,
        confirmationCode: otp,
      });
      ToastAndroid.show("Registration Confirmed", ToastAndroid.SHORT);
      alert("OTP Confirmed");

      await signIn({ username: email, password });
      navigation.navigate("Home");
    } catch (error) {
      console.log("OTP Error:", error);
      alert("OTP Verification failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <OTPTextInput
        ref={otpInput}
        inputCount={6}
        tintColor="#007bff"
        offTintColor="#ccc"
        handleTextChange={(code) => setOtp(code)}
        textInputStyle={styles.box}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  box: {
    borderWidth: 2,
    borderRadius: 8,
    width: 50,
    height: 50,
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
