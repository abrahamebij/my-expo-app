import React, { useState } from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import Header from './Header';
import FontAwesome from "@expo/vector-icons/FontAwesome"


TouchableOpacity.defaultProps = { activeOpacity: 0.35 }

function Home() {
  const [showBalance, setShowBalance] = useState(true);
  function handleBalance() {
    showBalance ? setShowBalance(false) : setShowBalance(true)
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        <Header />

        <Pressable style={{ flexDirection: "row", alignItems: "baseline", columnGap: 5, paddingTop: 10 }} onPress={handleBalance}>
          <Text style={{ fontSize: 20, color: "white" }}>{showBalance ? "₦": ""}</Text>
          <Text style={{ fontSize: 36, fontWeight: 700, color: "white" }}>{showBalance ? 4000 : "****"}</Text>
          <FontAwesome name={showBalance ? "eye" : "eye-slash"} size={20} color={"gray"} />
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    marginTop: 15,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#0884C1"
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imgAlign: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 200 / 2,
  },
  textGray: {
    color: "gray",
  },
  textBold: {
    fontWeight: "600",
    fontSize: 18,
  }

})

export default Home