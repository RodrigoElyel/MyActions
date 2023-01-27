import { StatusBar } from "react-native";
import React from "react";

import { showMessage, MessageType } from "react-native-flash-message";

export const AlertFlashMessage = (type: MessageType, description: string) => {
  const message = (type: MessageType) => {
    if (type === "success") return "Sucesso";
    if (type === "danger") return "Erro";
    if (type === "info") return "Atenção";
    if (type === "warning") return "Atenção";

    return "Atenção";
  };
  showMessage({
    message: message(type),
    description: "description",
    type: type,
    statusBarHeight: StatusBar.currentHeight,
    floating: true,
  });
};
