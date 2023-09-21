import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { images, icons, colors, fontSizes } from "../constants";

const FormInput = ({ lable, title, ...props }) => {
  return (
    <View
      style={{
        marginHorizontal: 35,
        height: 70,
        justifyContent: "center",
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: colors.primary,
          fontSize: fontSizes.h5,
          marginLeft: 10,
        }}
      >
        {title}:
      </Text>
      <View
        style={{
          height: 45,
          justifyContent: "center",
          marginTop: 8,
          borderRadius: 25,
          backgroundColor: "#F8F8FF",
        }}
      >
        <TextInput
          style={{
            marginTop: 5,
            marginLeft: 20,
            borderRadius: 25,
            marginHorizontal: 10,
          }}
          {...props}
        />
      </View>
      <Text
        style={{
          color: "red",
          fontSize: fontSizes.h6,
        }}
      >
        {lable}
        
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default FormInput;


  
