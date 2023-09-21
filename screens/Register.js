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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import "firebase/auth";
// import 'firebase/auth'
// import { UserRef } from  '../FirebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import FormInput from "../components/FormInput";

function Register(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  //State nhap dung dinh dang Email , Password
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  //state luu tru Email ,Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

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

  const DangKy = (email, password) => {
    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            console.log("Email xác minh đã được gửi.");
          })
          .catch((error) => {
            console.error("Lỗi khi gửi email xác minh:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Lỗi khi đăng ký:", error);
      });
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "25%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            color: colors.GRAY,
            // fontSize: fontSizes.h1,
            fontSize: 26,
            marginTop: 40,
            fontWeight: "bold",
            width: "70%",
          }}
        >
          Đăng kí tài khoản mới.
        </Text>
      </View>
      <View
        style={{
          height: "60%",
          justifyContent: "center",
          marginHorizontal: 10,
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
          title={"Mật khẩu"}
          placeholder="Nhập mật khẩu"
          value={password}
          placeholderTextColor={"#D3D3D3"}
        ></FormInput>
        <FormInput
          onChangeText={(text) => {
            setPassword(text);
          }}
          lable={errorPassword}
          title={"Nhập lại mật khẩu"}
          placeholder="Nhập mật khẩu"
          value={password}
          placeholderTextColor={"#D3D3D3"}
        ></FormInput>
         <FormInput
          
          
          title={"Số điện thoại "}
          placeholder="Nhập số điện thoại"
         
          placeholderTextColor={"#D3D3D3"}
        ></FormInput>
        <View
          style={{
            height: 130,
            marginTop: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            // Nhap sai cu phap Email , password thi nut Login k an duco vao
            disabled={!isValid}
            onPress={() => {
              // alert(`Email = ${email} ,password = ${password}`);
              DangKy();
              // Alert.alert('Đăng ký thành công !!');
              navigate("Login");
            }}
            style={{
              backgroundColor:
                isValid == false ? colors.inactive : colors.primary,
              justifyContent: "center",
              alignItems: "center",
              width: "55%",
              borderRadius: 25,
              height: 40,
            }}
          >
            <Text
              style={{
                // padding: 8,
                fontSize: 16,
                fontWeight: "600",
                color: colors.WHITE,
              }}
            >
              Đăng kí
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              navigate("Welcome");
            }}
          >
            <Text
              style={{
                marginTop:8,
                textAlign: "center",
                textDecorationLine:'underline',
                fontSize: 15,
                color: colors.primary,
              }}
            >
              Bỏ qua
            </Text>
          </TouchableOpacity> */}
        </View>
        <View>
        <TouchableOpacity
            onPress={() => {
              navigate("Welcome");
            }}
          >
            <Text
              style={{
                marginTop:0,
                textAlign: "center",
                textDecorationLine:'underline',
                fontSize: 15,
                color: colors.primary,
              }}
            >
              Bỏ qua
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Register;
