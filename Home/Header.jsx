import React, {useCallback} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
TouchableOpacity.defaultProps = { activeOpacity: 0.4 }


const Header = () => {
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
    <View style={styles.align}>

      <View style={{flexDirection: "row", columnGap: 5}}>
        <Text style={styles.textGray}>Welcome back,</Text>
        <Text style={styles.textBold}>Nicolas</Text>
      </View>

      <View style={styles.imgAlign}>
        <TouchableOpacity>
          {/* <FontAwesome name='search' size={24} color={"#eee"} /> */}
        </TouchableOpacity>
        <Image
          source={{ uri: "https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.49247130.1697906011&semt=ais" }}
          style={styles.img}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  align: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0884C1",
    paddingBottom: 10
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
    color: "#eee",
    fontFamily: "Mulish"
  },
  textBold: {
    fontWeight: "600",
    color: "#eee",
    fontFamily: "Mulish"
  }

})

export default Header