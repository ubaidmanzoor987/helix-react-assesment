import styled from "@emotion/styled";
import { COLORS } from "../../../constants/colors";

export const ButtonStyled = styled.button`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.WHITE};
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: ${COLORS.THEME_COLOR};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
