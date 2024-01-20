import React from 'react'
import { View, TextInput } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome"


const Searchbar = () => {
  return (
    <View style={{ backgroundColor: "white", width: "90%", marginTop: 30 , flexDirection: "row", alignItems: "center", borderRadius: 15, alignSelf: "center", paddingHorizontal: 16}}>
      <FontAwesome name='search' size={18} color={"#aaa"} />
      <TextInput placeholder='Search for the product' style={{  paddingHorizontal: 10, paddingVertical: 10, }} />
    </View>
  )
}

export default Searchbar