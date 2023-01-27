import React from "react";
import {
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

// Styles
import THEME from "../../styles";

// Styled-Component
import * as S from "./styles";

type IScreenComponent = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  loading?: boolean;
};

const Screen = ({ children, style, loading = false }: IScreenComponent) => {
  if (loading) {
    return (
      <S.Loading>
        <ActivityIndicator
          size={THEME.SIZES.large}
          color={THEME.COLORS.secondary}
        />
      </S.Loading>
    );
  }

  return (
    <S.Container style={style}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable onPressOut={Keyboard.dismiss}>
          <View>{children}</View>
        </Pressable>
      </KeyboardAvoidingView>
    </S.Container>
  );
};

export default Screen;
