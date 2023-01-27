import { TouchableOpacity } from "react-native";
import React from "react";

// Components
import Screen from "../../components/Screen";
import Text from "../../components/Text";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackMain } from "../../routes/StackMain/models";

const HomeScreen = () => {
  const navigation = useNavigation<propsStackMain>();

  return (
    <Screen>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default HomeScreen;
