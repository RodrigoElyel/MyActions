import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

// Screens
import Home from "../../screens/Home";
import Register from "../../screens/Register";

// Models
import { propsNavigationStackMain } from "./models";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator<propsNavigationStackMain>();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
