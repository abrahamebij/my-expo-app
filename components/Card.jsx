import React, { useCallback } from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
TouchableOpacity.defaultProps = { activeOpacity: 0.6 }



function Card({ name, price, img, desc }) {

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

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Pressable style={styles.card}>

        <Image style={styles.image} source={img} />

        {/* Info Container */}
        <View style={styles.infoContainer}>
          {/* Name And Price */}
          <View style={{ rowGap: 10 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc.length > 60 ? desc.slice(0, 50) + "..." : desc}</Text>
            <Text style={styles.price}>₦{price}</Text>
          </View>

          {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
          <FontAwesome name="cart-plus" color={"white"} size={24} />
        </TouchableOpacity> */}
        </View>
      </Pressable>

      <View style={{ padding: 5, marginVertical: 10, alignSelf: "center", borderRadius: 10, width: "20%", backgroundColor: "#eee" }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginVertical: 20,
    flexDirection: "row",
  },
  image: {
    height: 150,
    width: "40%",
    overflow: "hidden",
    borderRadius: 16,
    alignSelf: "center",
  },
  infoContainer: {
    paddingLeft: 16,
    paddingRight: 0,
    paddingVertical: 7,
    width: "60%"
  },
  name: {
    fontSize: 20,
    color: "#5E6368",
    fontWeight: "600",
    fontFamily: "MulishBold"
  },
  desc: {
    fontSize: 15,
    color: "gray"
  },
  price: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0884C1",
    fontFamily: "MulishBold",
    paddingTop: 10,
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