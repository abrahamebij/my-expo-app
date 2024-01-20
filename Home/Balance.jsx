import React, { useState } from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Text, View, Pressable } from 'react-native';



const Balance = () => {

  const [showBalance, setShowBalance] = useState(false);
  function handleBalance() {
    showBalance ? setShowBalance(false) : setShowBalance(true)
  }
  return (
    <Pressable style={{ flexDirection: "row", alignItems: "baseline", columnGap: 5, paddingTop: 10, flexDirection: "column", paddingBottom: 15 }} onPress={handleBalance}>
      <Text style={{ color: "#fff", fontSize: 17, paddingBottom: 5, }}>Account Balance:</Text>
      <View style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}>
        <Text style={{ fontSize: 12, color: "white" }}>{showBalance ? "₦" : ""}</Text>
        <Text style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{showBalance ? "4,000" : "****"}</Text>
        <FontAwesome name={showBalance ? "eye" : "eye-slash"} size={12} color={"#eee"} />

      </View>
    </Pressable>
  )
}

export default Balance