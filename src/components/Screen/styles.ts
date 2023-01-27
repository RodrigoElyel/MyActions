import styled from "styled-components/native";
import STYLES from "../../styles";

export interface Props {}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${STYLES.COLORS.lightGray};
`;

export const Loading = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${STYLES.COLORS.primary};
`;
