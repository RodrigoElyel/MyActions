import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { View, TouchableOpacity } from "react-native";

// Screens
import Home from "../../screens/Home";
import Register from "../../screens/Register";
import Graphic from "../../screens/Graphic";

// Models
import { propsNavigationStackMain } from "./models";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import THEME from "../../styles";

const Stack = createStackNavigator<propsNavigationStackMain>();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        let routeName = props.route.name;
        return {
          headerShown: true,
          headerTintColor: THEME.COLORS.black,
          headerStyle: {
            backgroundColor: THEME.COLORS.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: THEME.FONT_FAMILY.bold,
            fontSize: THEME.SIZES.large,
          },
          headerLeft: () => (
            <View>
              {routeName === "Home" ? (
                <></>
              ) : (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color={THEME.COLORS.black}
                  />
                </TouchableOpacity>
              )}
            </View>
          ),
        };
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "MyActions" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Registrar" }}
      />
      <Stack.Screen
        name="Graphic"
        component={Graphic}
        options={{ title: "Gráfico" }}
      />
    </Stack.Navigator>
  );
}
