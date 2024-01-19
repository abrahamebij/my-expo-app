import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Mulish_400Regular, Mulish_600SemiBold, useFonts } from "@expo-google-fonts/mulish";

TouchableOpacity.defaultProps = { activeOpacity: 0.4 }

const Card = () => {
  let [fontsLoaded] = useFonts({
    Mulish_400Regular, Mulish_600SemiBold
  });

  const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    // Add more items as needed
  ];
  return (
    <View>
      <FlatList
        data={data}
        // style={{ width: 200 }}
        horizontal={true} // Set to true for horizontal scrolling
        renderItem={({ item }) => (
          <View style={[styles.card, styles.shadowProp]}>
            <View>
              <Text style={styles.heading}>
                React Native Box Shadow (Shadow Props)
              </Text>
            </View>
            <Text>
              Using the elevation style prop to apply box-shadow for iOS devices
            </Text>
          </View>)}
        keyExtractor={item => item.key}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    fontFamily: "Mulish_600SemiBold"
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: 360,
    marginRight: 30,
    marginTop: -50,
    zIndex: 2
  },
  shadowProp: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});

export default Card