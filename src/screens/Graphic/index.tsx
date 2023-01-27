import { FlatList, Pressable, Image, Alert } from "react-native";
import React from "react";

// Victoru js
import {
  VictoryLine,
  VictoryChart,
  VictoryArea,
  VictoryTheme,
} from "victory-native";

// Components
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import Button from "../../components/Button";

// Styles
import THEME from "../../styles";
import * as S from "./styles";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackMain } from "../../routes/StackMain/models";

// Context
import { useActionsContext, ActionProps } from "../../context/ActionsContext";

const GraphicScreen = () => {
  const navigation = useNavigation<propsStackMain>();
  const { actionsData, removeActions, getActions, loading, setLoading } =
    useActionsContext();

  var arrayOrdenado = actionsData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Screen loading={loading}>
      <VictoryChart width={400} theme={VictoryTheme.material}>
        <VictoryLine
          data={arrayOrdenado}
          x="date"
          y="value"
          animate={{
            duration: 4000,
            onLoad: { duration: 3000 },
          }}
        />
      </VictoryChart>
    </Screen>
  );
};

export default GraphicScreen;
