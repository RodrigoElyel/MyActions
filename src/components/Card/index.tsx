import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";

// Styled-Component
import * as S from "./styles";

// Styles
import STYLES from "../../styles";

// Components
import Text from "../Text";

// Assets
import Icon from "../../assets/Icons/expense.png";

// Moment
import moment from "moment";

// Utils
import { formatCurrency } from "../../utils/money";

// Animated
import Animated, {
  Layout,
  SlideInLeft,
  FadeOut,
} from "react-native-reanimated";

type ICardComponent = {
  code: string;
  name: string;
  date: Date;
  value: number;
  style?: React.CSSProperties;
  onPress: (() => void) | undefined;
};

const Card = ({
  code,
  name,
  date,
  value,
  onPress,
  style,
  ...rest
}: ICardComponent) => {
  return (
    <Animated.View layout={Layout} entering={SlideInLeft} exiting={FadeOut}>
      <S.ContainerCard style={style} onPress={onPress} {...rest}>
        <S.LeftSide>
          <S.Image source={Icon} resizeMode="contain" />

          <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.white}>
            {formatCurrency(value)}
          </Text>
        </S.LeftSide>

        <S.RightSide>
          <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.white}>
            {name}
          </Text>
          <Text bold size={STYLES.SIZES.medium} color={STYLES.COLORS.white}>
            {moment(date).add(1, "day").format("DD-MM-YYYY")}
          </Text>
        </S.RightSide>
      </S.ContainerCard>
    </Animated.View>
  );
};

export default Card;
