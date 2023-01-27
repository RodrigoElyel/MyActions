import { FlatList, Pressable, View } from "react-native";
import React from "react";

// Components
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputMask from "../../components/InputMask";

// API
import { getFeriados } from "../../api";

// Styles
import THEME from "../../styles";
import * as S from "./styles";

// Utils
import { validateDate } from "../../utils/validators";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { propsStackMain } from "../../routes/StackMain/models";

// Context
import { useActionsContext, ActionProps } from "../../context/ActionsContext";
import moment from "moment";
import { AlertFlashMessage } from "../../components/AlertFlashMessage";

type DateValidProps = {
  isValid: boolean;
  message: string;
};

const RegisterScreen = () => {
  const [name, setName] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [dateValid, setDateValid] = React.useState<DateValidProps>();
  const navigation = useNavigation<propsStackMain>();
  const { pushActions, loading, setLoading, actionsData } = useActionsContext();

  const handleValidateDate = async (value: string) => {
    const result = validateDate(value);
    setDate(value);
    if (result) {
      await getFeriados(value)
        .then((response) => {
          let formatDate = value.split("-").reverse().join("-");
          let isFeriado = response.find((it: any) => it.date === formatDate);
          if (isFeriado) {
            setDateValid({
              isValid: false,
              message: `${isFeriado.name} (Feriado)`,
            });
          } else {
            setDateValid({ isValid: true, message: "Data válida" });
          }
        })
        .catch((error) => {
          AlertFlashMessage("danger", "Erro ao recuperar data de feriados");
        })
        .finally(() => {});
    } else {
      setDateValid({ isValid: false, message: "Data inválida" });
    }
  };

  const submit = () => {
    if (!name || !value || !date) {
      AlertFlashMessage("warning", "Preencha todos os dados");
      return;
    }

    if (!dateValid?.isValid) {
      AlertFlashMessage("warning", "Preencha uma data que não seja feriado");
      return;
    }

    let formatDate = date.split("-").reverse().join("-"); //formato padrão para o moment -> YYYY/MM/DD

    let data: ActionProps = {
      code: (actionsData?.length + 1).toString(),
      name: name,
      value: parseFloat(value.replace(/\D/g, "")) / 100,
      date: new Date(formatDate),
    };

    pushActions(data);
    navigation.goBack();
  };

  return (
    <Screen loading={loading}>
      <S.TopSide>
        <Input
          keyboardType="default"
          placeholder="Nome da ação"
          value={name}
          onChangeText={(value: string) => {
            setName(value);
          }}
          style={{ marginTop: 8 }}
        />

        <InputMask
          typeMask={"money"}
          optionsMask={{
            precision: 2,
            separator: ",",
            delimiter: ".",
            unit: "R$ ",
          }}
          placeholder="Valor"
          keyboardType="numeric"
          value={value}
          onChangeText={(value: string) => {
            setValue(value);
          }}
        />

        <InputMask
          typeMask={"datetime"}
          optionsMask={{
            format: "DD-MM-YYYY",
          }}
          placeholder="Data"
          keyboardType="numeric"
          value={date}
          onChangeText={(value: string) => {
            handleValidateDate(value);
          }}
          validable={date?.length > 0}
          isValid={dateValid?.isValid}
          hasError={!dateValid?.isValid}
          errorMessage={dateValid?.message}
        />
      </S.TopSide>
      <S.BottomSide>
        <Button
          label="Salvar"
          onPress={() => {
            submit();
          }}
        />
      </S.BottomSide>
    </Screen>
  );
};

export default RegisterScreen;
