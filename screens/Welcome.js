import React, { useState, useEffect } from "react";
import {
  Platform,
  Alert,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  textDecorationLine,
} from "react-native";
import { images, icons, colors, fontSizes } from "../constants";
import { UIButton } from "../components";
function Welcome(props) {
  //state => khi ma state thay doi  => UI load lai
  // same getter ,setter
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "Influencer",
      isSelected: true,
    },
    {
      name: "Business",
      isSelected: false,
    },
    {
      name: "Individual",
      isSelected: false,
    },
  ]);
  //Navigation
  const { navigation, route } = props;
  //funtion of navigate to/back
  const { navigate, goBack } = navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 100,
      }}
    >
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}
      >
        <View
          style={{
            flex: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: Platform.OS === "ios" ? 40 : 10,
            }}
          >
            <Image
              source={icons.icon_fire}
              style={{
                width: 30,
                height: 30,
                marginStart: 10,
                marginRight: 5,
              }}
            />

            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: fontSizes.h5,
              }}
            >
              YOURCOMPANY.CO
            </Text>
            <View style={{ flex: 1 }} />

            <Image
              source={icons.icon_question}
              style={{
                width: 25,
                height: 25,
                // tintColor: 'white'
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginBottom: 7,
              color: "black",
              fontSize: fontSizes.h3,
            }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              marginBottom: 7,
              color: "black",
              fontWeight: "bold",
              fontSize: fontSizes.h2,
            }}
          >
            YOURCOMPANY.CO!
          </Text>
          <Text
            style={{
              marginBottom: 7,
              color: "black",
              fontSize: fontSizes.h3,
            }}
          >
            Please select your account type
          </Text>
        </View>
        <View
          style={{
            flex: 40,
          }}
        >
          {accountTypes.map((accountType) => (
            <UIButton
              key={accountType.name}
              onPress={() => {
                setAccountTypes(
                  accountTypes.map((eachAccountType) => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  })
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
          }}
        >
          <UIButton
            onPress={() => {
              navigate("Login");
            }}
            title={"Login".toUpperCase()}
          />
          
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
