import React from "react";

// Async-Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import { AlertFlashMessage } from "../components/AlertFlashMessage";

export interface ActionProps {
  code: string;
  name: string;
  date: Date;
  value: number;
}

export type ContextProps = {
  actionsData: ActionProps[];
  pushActions: (action: ActionProps) => void;
  removeActions: (action: ActionProps) => void;
  getActions: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

const ActionsContext = React.createContext<ContextProps | undefined>(
  {} as ContextProps
);

export const ActionsContextProvider = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [actionsData, setActionsData] = React.useState<ActionProps[]>([]);

  const pushActions = (action: ActionProps) => {
    setLoading(true);

    // Simulando loading
    setTimeout(() => {
      const newArray = [...actionsData, action];
      saveUpdate(newArray);
    }, 500);
  };

  const removeActions = (action: ActionProps) => {
    const newArray = [
      ...actionsData.filter((item) => item.code !== action.code),
    ];
    saveUpdate(newArray);
  };

  const getActions = async () => {
    await AsyncStorage.getItem("@storage:actions")
      .then((response) => {
        setActionsData(response ? JSON.parse(response) : []);
      })
      .catch((error) => {
        AlertFlashMessage(
          "danger",
          "Erro ao realizar operação no banco de dados local!"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const saveUpdate = async (actions: ActionProps[]) => {
    await AsyncStorage.setItem("@storage:actions", JSON.stringify(actions))
      .then((response) => {
        setActionsData(actions);
      })
      .catch((error) => {
        AlertFlashMessage(
          "danger",
          "Erro ao realizar operação no banco de dados local!"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    setLoading(true);

    // Simulando loading
    setTimeout(() => {
      getActions();
    }, 500);
  }, []);

  const value = {
    actionsData,
    pushActions,
    removeActions,
    getActions,
    loading,
    setLoading,
  };

  return (
    <ActionsContext.Provider value={value}>{children}</ActionsContext.Provider>
  );
};

export const useActionsContext = () => {
  const context = React.useContext(ActionsContext);

  if (typeof context === "undefined") {
    throw new Error("Error Actions Context");
  }

  return context;
};
