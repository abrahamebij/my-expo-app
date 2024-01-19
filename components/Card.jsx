import React, { useEffect, useState, useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  Text,
  Alert,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  Platform,
  Pressable,
  StatusBar,
  Modal,
  TouchableOpacity
} from "react-native";
import {
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold,
  useFonts,
} from "@expo-google-fonts/mulish";
TouchableOpacity.defaultProps = { activeOpacity: 0.6 }



function Card() {
  const [modalVisible, setModalVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
    <Modal animationType="slide" transparent={false} visible={showModal}
    >
      <Text>Hello</Text>
    </Modal>
      <Pressable style={styles.card}>

        <Image style={styles.image} source={require("../assets/download.jpeg")} />

        {/* Info Container */}
        <View style={styles.infoContainer}>

          {/* Name And Price */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 3 }}>
            <Text style={styles.name}>Bag</Text>
            <Text style={styles.price}>₦ 400</Text>
          </View>

          <Text style={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere doloremque, maiores..</Text>

          {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
          <FontAwesome name="cart-plus" color={"white"} size={24} />
        </TouchableOpacity> */}
        </View>
      </Pressable>
    </SafeAreaView>
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
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Mulish_400Regular"
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

export default Card