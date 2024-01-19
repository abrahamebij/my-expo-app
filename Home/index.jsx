import React, { useState } from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import Header from './Header';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Balance from './Balance';
import Card from "./Card"


TouchableOpacity.defaultProps = { activeOpacity: 0.35 }

function Home() {

  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        <View style={{
          backgroundColor: "#0884C1", paddingLeft: 20,
          paddingRight: 20, paddingTop: 15, paddingBottom: 10
        }}>
          <Header />
          <Balance />
        </View>
{/*         
        <Card /> */}
        
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    flex: 1,
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