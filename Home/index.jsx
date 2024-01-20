import React from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import Balance from './Balance';
import Searchbar from './Searchbar';
import Card from '../components/Card';


TouchableOpacity.defaultProps = { activeOpacity: 0.35 }

function Home() {
  const garri = require("../assets/garri.png")
  const ball = require("../assets/ball.jpeg")
  const shoe = require("../assets/shoes.jpeg")
  const mattress = require("../assets/mattress.jpeg")
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
        <Searchbar />
        <View style={{ width: "90%", alignSelf: 'center', paddingVertical: 20 }}>
          <Card name={"Garri Pack"} desc={"Sweet garri combo at affordable rates"} img={garri} price={"250"} />

          <Card name={"Mattress"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate ratione nostrum ex molestiae,"} img={mattress} price={"15000"} />
          <Card desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate ratione nostrum ex molestiae,"} name={"Football"} img={ball} price={"2000"} />
          <Card desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate ratione nostrum ex molestiae,"} name={"Nike Shoes"} img={shoe} price={"6500"} />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    flex: 1,
    backgroundColor: "white"
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