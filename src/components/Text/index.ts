import styled from "styled-components/native";
import STYLES from "../../styles";

export interface ITextProps {
  bold?: boolean;
  size?: number;
  align?: string;
  italic?: boolean;
  color?: string;
  transform?: string;
  decoration?: string;
  font?: string;
  decorationColor?: string;
}

const Text = styled.Text`
  font-family: ${({ font, bold }: ITextProps) =>
    bold ? STYLES.FONT_FAMILY.bold : font ? font : STYLES.FONT_FAMILY.regular};
  font-size: ${({ size }: ITextProps) =>
    size ? size : STYLES.SIZES.medium}px;
  text-align: ${({ align }: ITextProps) => align || "left"};
  font-style: ${({ italic }: ITextProps) => (italic ? "italic" : "normal")};
  color: ${({ color }: ITextProps) => color || STYLES.COLORS.black};
  text-transform: ${({ transform }: ITextProps) =>
    transform ? transform : "none"};
  text-decoration: ${({ decoration }: ITextProps) =>
    decoration ? decoration : "none"};
  text-decoration-color: ${({ decorationColor }: ITextProps) =>
    decorationColor || STYLES.COLORS.black};
`;

export default Text;
