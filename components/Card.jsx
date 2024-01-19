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



function Shop() {

  return (
    <View style={styles.card}>

      <Image style={styles.image} source={require("../assets/download.jpeg")} />

      {/* Info Container */}
      <View style={styles.infoContainer}>

        {/* Name And Price */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 3 }}>
          <Text style={styles.name}>Bag</Text>
          <Text style={styles.price}>₦ 400</Text>
        </View>

        <Text style={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere doloremque, maiores ea nobis, laborum nam ullam sapiente, qui aliquid...</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
          <FontAwesome name="cart-plus" color={"white"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 10,
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
    color: "#343434"
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

export default Shop