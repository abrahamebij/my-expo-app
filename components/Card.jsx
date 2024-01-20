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



function Card({ name, price, img }) {

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
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 3 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>₦ {price}</Text>
          </View>

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
    borderWidth: 1,
    borderColor: "#ababab",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    // paddingTop: 20,

    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 10,
  },
  image: {
    height: 250,
    width: "100%",
    overflow: "hidden",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignSelf: "center",
  },
  infoContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    paddingVertical: 7,
    // marginTop: 16,
  },
  name: {
    fontSize: 20,
    color: "#555",
    fontWeight: "600",
    fontFamily: "MulishBold"
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343434",
    fontFamily: "Mulish"
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