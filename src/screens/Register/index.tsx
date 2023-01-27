import { TouchableOpacity } from "react-native";
import React from "react";

// Components
import Text from '../../components/Text'


// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackMain } from "../../routes/StackMain/models";

const RegisterScreen = () => {
  const navigation = useNavigation<propsStackMain>();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>RegisterScreen</Text>
    </TouchableOpacity>
  );
};

export default RegisterScreen;
