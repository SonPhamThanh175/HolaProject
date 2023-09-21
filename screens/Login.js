import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  textDecorationLine,
  TextInput,
  Platform,
} from "react-native";
import { images, icons, colors, fontSizes } from "../constants";
import { UIButton } from "../components";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { isValidEmail, isValidPassword } from "../utilies/Validation";
import Icon from "react-native-vector-icons/FontAwesome5";
import FormInput from "../components/FormInput";

function Login(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  //State nhap dung dinh dang Email , Password
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  //state luu tru Email ,Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const checkValid = () => {
    const isValid =
      email.length > 0 &&
      password.length > 0 &&
      isValidEmail(email) &&
      isValidPassword(password)
        ? true
        : false;
    setIsValid(isValid);
  };

  useEffect(() => {
    //componentDidmount
    // ban phim noi len thi HIDE button "Login"
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsShown(false);
    });
  }, []);

  useEffect(() => {
    if (email && isValidEmail(email) == false) {
      setErrorEmail("Email not in correct fomat");
    } else {
      setErrorEmail("");
    }
    if (password && isValidPassword(password) == false) {
      setErrorPassword("Password must be at least 6 characters long");
    } else {
      setErrorPassword("");
    }
    checkValid();
  }, [email, password]);
  //Navigation
  const { navigation, route } = props;
  //funtion of navigate to/back
  const { navigate, goBack } = navigation;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 100,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 35,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            color: colors.GRAY,
            fontSize: 25,
            marginTop: 15,
            fontWeight: "bold",
            width: "60%",
          }}
        >
          Chào mừng bạn đến với PeeFood
        </Text>
      </View>
      <View
        style={{
          flex: 22,
        }}
      >
        <FormInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          lable={errorEmail}
          title={"Email"}
          placeholder="Example@gmail.com"
          value={email}
          placeholderTextColor={"#D3D3D3"}
        ></FormInput>
        <FormInput
          onChangeText={(text) => {
            setPassword(text);
          }}
          lable={errorPassword}
          title={"Mật khẩu "}
          placeholder="Nhập mật khẩu"
          value={password}
          placeholderTextColor={"#D3D3D3"}
        ></FormInput>
      </View>
      {keyboardIsShown == false && (
        <View
          style={{
            flex: 15,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            // Nhap sai cu phap Email , password thi nut Login k an duco vao
            disabled={!isValid}
            onPress={() => {
              // alert(`Email = ${email} ,password = ${password}`);
              navigate("UITab");
            }}
            style={{
              backgroundColor:
                isValid == false ? colors.inactive : colors.primary,
              // backgroundColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              marginTop: 15,
              borderRadius: 25,
              height: 40,
            }}
          >
            <Text
              style={{
                padding: 8,
                fontSize: 16,
                fontWeight: "600",
                color: colors.WHITE,
              }}
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: colors.GRAY,
                fontSize: fontSizes.h5,
                alignSelf: "center",
              }}
            >
              Bạn chưa có tài khoản ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate("Register");
              }}
              style={{
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontSize: fontSizes.h5,
                  alignSelf: "center",
                  textDecorationLine: "underline",
                  fontWeight: "600",
                }}
              >
                Đăng kí
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View
        style={{
          flex: 25,
        }}
      >
        <View
          style={{
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{ height: 1, backgroundColor: colors.DARKGRAY, flex: 1 }}
          />
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h6,
              color: colors.DARKGRAY,
              alignSelf: "center",
              fontWeight: "bold",
              marginHorizontal: 5,
            }}
          >
            Tài khoản liên kết
          </Text>
          <View
            style={{ height: 1, backgroundColor: colors.DARKGRAY, flex: 1 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* <Icon name ='facebook' size={35} color={colors.facebook} />
                <View style={{width:15}}/>
                <Icon name ='facebook' size={35} color={colors.facebook} /> */}
          <Image
            source={icons.icon_facebook}
            style={{
              width: 27,
              height: 27,
              marginRight: 10,
            }}
          />
          <View style={{ width: 15 }} />
          <Image
            source={icons.icon_google}
            style={{
              width: 25,
              height: 25,
              // tintColor: 'white'
              marginRight: 10,
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
