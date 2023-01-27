import { FlatList, Pressable, Image, Alert } from "react-native";
import React from "react";

// Components
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import Card from "../../components/Card";
import Button from "../../components/Button";

// Image
import Box from "../../assets/box.png";

// Styles
import THEME from "../../styles";
import * as S from "./styles";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackMain } from "../../routes/StackMain/models";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Context
import { useActionsContext, ActionProps } from "../../context/ActionsContext";

const HomeScreen = () => {
  const navigation = useNavigation<propsStackMain>();
  const { actionsData, removeActions, getActions, loading, setLoading } =
    useActionsContext();

  const [ordenar, setOrdenar] = React.useState<string>("crescente-data");

  const removeCard = (item: ActionProps) => {
    Alert.alert("Atenção", "Deseja remover está ação?", [
      {
        text: "Remover",
        style: "destructive",
        onPress: () => {
          removeActions(item);
        },
      },
      {
        text: "Cancelar",
      },
    ]);
  };

  // Filtro
  if (ordenar === "crescente-data") {
    var arrayOrdenado = actionsData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } else if (ordenar === "decrescente-data") {
    var arrayOrdenado = actionsData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else if (ordenar === "crescente-dinheiro") {
    var arrayOrdenado = actionsData.sort((a, b) => a.value - b.value);
  } else {
    var arrayOrdenado = actionsData.sort((a, b) => b.value - a.value);
  }

  const alertaDeOrdenacao = () => {
    Alert.alert("Ordenar", "Escolha uma das opções a seguir: ", [
      {
        text: "Data mais antiga",
        onPress: () => {
          setOrdenar("crescente-data");
        },
      },
      {
        text: "Data mais recente",
        onPress: () => {
          setOrdenar("decrescente-data");
        },
      },
      {
        text: "Menor preço",
        onPress: () => {
          setOrdenar("crescente-dinheiro");
        },
      },
      {
        text: "Maior preço",
        onPress: () => {
          setOrdenar("decrescente-dinheiro");
        },
      },
      {
        text: "Cancelar",
        style: "destructive",
      },
    ]);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="ios-filter"
            size={24}
            color="black"
            style={{ marginRight: 8 }}
            onPress={alertaDeOrdenacao}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <Screen loading={loading}>
      <S.TopSide>
        <FlatList
          style={{ height: "90%" }}
          showsHorizontalScrollIndicator={false}
          data={arrayOrdenado}
          keyExtractor={(item) => item.code}
          onRefresh={() => {
            setLoading(true);
            getActions();
          }}
          refreshing={loading}
          renderItem={({ item }) => (
            <Pressable>
              <Card
                code={item.code}
                name={item.name}
                date={item.date}
                value={item.value}
                onPress={() => removeCard(item)}
              />
            </Pressable>
          )}
          ListEmptyComponent={() => (
            <S.ContainerEmpty>
              <Image
                style={{ width: 200, height: 200, alignSelf: "center" }}
                source={Box}
                resizeMode="contain"
              />
              <Text
                size={THEME.SIZES.medium}
                align="center"
                bold
                style={{ alignSelf: "center" }}
              >
                Você ainda não possui nenhuma ação!
              </Text>
              <Text
                size={THEME.SIZES.medium}
                align="center"
                style={{ alignSelf: "center" }}
              >
                Para realizar começar, aperte em cadastrar
              </Text>
            </S.ContainerEmpty>
          )}
        />
      </S.TopSide>
      <S.BottomSide>
        <Button
          label="Cadastrar"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </S.BottomSide>
    </Screen>
  );
};

export default HomeScreen;
