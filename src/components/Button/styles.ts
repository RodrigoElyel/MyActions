import styled from "styled-components/native";
import STYLES from "../../styles";

export interface IButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export const ContainerButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ disabled, loading }: IButtonProps) =>
    disabled && !loading ? STYLES.COLORS.disabled : STYLES.COLORS.secondary};
`;
