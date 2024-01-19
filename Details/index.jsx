import React, { useEffect, useState, useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.35 }



function Details() {
  const [product, setProduct] = useState({});
  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        
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
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    paddingTop: 20,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 150,
    width: "50%",
    overflow: "hidden",
    alignSelf: "center",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0884C1",
    width: "60%",
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",

  }
});

export default Details