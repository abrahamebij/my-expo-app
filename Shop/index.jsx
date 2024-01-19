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
  TouchableOpacity,
  TextInput
} from "react-native";
import Card from "../components/Card"
TouchableOpacity.defaultProps = { activeOpacity: 0.35 }


const SearchBar = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <FontAwesome name="search" size={20} color="#555" />
      <TextInput
        style={{ marginLeft: 10, flex: 1, fontSize: 16 }}
        placeholder="Search..."
        // Additional props and styling can be added as needed
      />
    </View>
  );
};


function Shop() {
  const [product, setProduct] = useState({});
  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        <SearchBar />
        <View style={{}}>

      <Card />
      <Card />
      <Card />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    marginTop: 0,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
 
});

export default Shop