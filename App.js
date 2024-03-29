import  React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home from "./Home";
import Details from "./Details";
import { StatusBar } from "expo-status-bar";
const Tab = createBottomTabNavigator();

export default function App() {

  
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                return <FontAwesome name="home" color={color} size={size} />;
               } else if (route.name === "Details") {
                return (
                  <FontAwesome name="info-circle" color={color} size={size} />
                );
              }
            },
            tabBarActiveTintColor: "#0884C1",
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="#0884C1" />
    </>
  );
}
