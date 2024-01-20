import React, { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import {
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
  Pressable
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; TouchableOpacity.defaultProps = { activeOpacity: 0.35 }



function Details() {
  const [fontsLoaded, fontError] = useFonts({
    'Mulish': require('../assets/Mulish-Regular.ttf'),
    'MulishSemibold': require('../assets/Mulish-Medium.ttf'),
    'MulishBold': require('../assets/Mulish-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [amount, setAmount] = useState(1);
  function increaseAmount() {
    setAmount(amount + 1)
  }
  function decreaseAmount() {
    // Cannot be less than one
    setAmount(amount > 1 ? amount - 1 : 1)
  }
  let priceOfTheProduct = 250

  return (
    <ScrollView>
      <SafeAreaView style={[{ flex: 1 }, styles.body]}>
        <Image style={styles.image} source={require("../assets/garri.png")} />

        <View style={styles.info}>
          {/* Product Title */}
          <Text style={styles.title} >Garri Pack</Text>
          {/* Product details */}
          <View style={styles.priceInfo}>
            {/* Price*/}
            {/* This is the price multipled by the amount */}
            <Text style={styles.price}>₦{priceOfTheProduct * amount} </Text>
            {/* Counter */}
            {/* The idea of the counter is to update the price onclick */}
            <View style={styles.counter}>
              <Pressable onPress={decreaseAmount}>
                <Ionicons name="remove-circle-outline" size={24} />
              </Pressable>
              <Text style={{ fontSize: 16 }}>{amount}</Text>
              <Pressable onPress={increaseAmount}>
                <Ionicons name="add-circle-outline" size={24} />
              </Pressable>
            </View>

          </View>

{/* Product Description */}
          {/* <View style={{ padding: 5, marginTop: 40, marginBottom: 30, alignSelf: "center", borderRadius: 10, width: "20%", backgroundColor: "#ddd" }} /> */}
            <Text style={styles.productDesc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum laudantium quis et sapiente? Vero ad minus porro sit amet doloremque suscipit eos? Nostrum reiciendis eos expedita id voluptas natus!</Text>
          
          {/* Button */}
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
          <FontAwesome name="shopping-basket" color={"white"} size={24} />
        </TouchableOpacity>
        </View>
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
    height: 350,
    borderRadius: 16,
  },
  info: { paddingTop: 16 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "MulishBold"
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "MulishSemibold"
  },
  priceInfo: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10
  },
productDesc: {
  fontSize: 16,
  color: "gray",
  marginTop: 25
},

button: {
  backgroundColor: "#0884C1",
  width: "100%",
  marginTop: 40,
  marginBottom: 10,
  paddingVertical: 10,
  borderRadius: 10,
  alignSelf: "center",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "row",
  columnGap: 15,
},
buttonText: {
  color: "#fff",
  fontSize: 18,
  textAlign: "center",
}
});

export default Details