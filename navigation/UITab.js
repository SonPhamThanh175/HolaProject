// yarn add react-navigation
// yarn add react-native-safe-area-context
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
import * as React from "react";
import { Settings, ProductGridView, ItemList, Profile, Basket } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fontSizes, colors } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTinColor: "black",
  tabBarIntiveTinColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.inactive,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{ backgroundColor: colors.primary, flex: 1 }} />
  ),
  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name;
    // let iconName = "facebook ";
    // if (screenName == "ProductGridView") {
    //     iconName = "align-center"
    // } else if (screenName == "FoodList"){
    //     iconName = "accusoft"
    // }else if (screenName == "Settings"){
    //     iconName = "cogs"
    // }
    return (
      <Icon
        name={
          screenName == "ProductGridView"
            ? "align-center"
            : screenName == "FoodList"
            ? "accusoft"
            : screenName == "Basket"
            ? "shopping-cart"
            : screenName == "Settings"
            ? "cogs"
            : route.name == "Profile"
            ? "user"
            : ""
        }
        size={23}
        color={focused ? "white" : colors.inactive}
        style={{
          justifyContent: "center",
        }}
      />
    );
  },
});
const Tab = createBottomTabNavigator();
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={"ProductGridView"}
        component={ProductGridView}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="storefront" color={'white'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Itemlist"}
        component={ItemList}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="compass" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name={"Basket"}
        component={Basket}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping" color={'white'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={Settings}
        options={{
          tabBarLabel: " ",
          tabBarLabelStyle: {
            fontSize: fontSizes.h5,
          },
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={'white'} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
export default UITab;
