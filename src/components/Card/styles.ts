import styled from "styled-components/native";
import STYLES from "../../styles";

export interface IButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export const ContainerCard = styled.TouchableOpacity`
  width: 90%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin: 8px 0px;
  border-radius: 8px;
  background-color: ${STYLES.COLORS.secondary};
`;

export const Image = styled.Image``;

export const LeftSide = styled.View`
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right-width: 1px;
`;

export const RightSide = styled.View`
  width: 60%;
  flex-direction: column;
  align-items: center;
`;
