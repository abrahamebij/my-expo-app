import React, { useEffect, useState, useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.35 }



function Details() {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <Image style={styles.image} source={require("../assets/garri.jpeg")} />
        <Text >Not ready yet</Text>
        <Text >This is how the modal should look like</Text>
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
  },
image: {
  width: "100%",
  
}
});

export default Details