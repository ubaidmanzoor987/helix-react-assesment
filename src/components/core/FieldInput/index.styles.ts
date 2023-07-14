import styled from "@emotion/styled";
import { COLORS } from "../../../constants/colors";

export const DivRelative = styled.div`
  position: relative;
  width: 100%;
`;

export const FieldInputLabel = styled.label<{
  value: string | number | readonly string[] | undefined;
}>`
  position: relative;
  left: ${({ value }) => (value ? "15px" : "10px")};
  top: ${({ value }) => (value ? "-2px" : "-50px")};
  pointer-events: none;
  display: flex;
  transition: 0.2s ease;
  background: ${COLORS.WHITE};
  font-size: ${({ value }) => (value ? "13px" : "16px")};
  &::before {
    transition: all 0.2s ease;
    position: absolute;
    width: 100%;
    content: "";
  }
  &::after {
    transition: all 0.2s ease;
    position: absolute;
    width: 100%;
    content: "";
    top: 50%;
  }
  span {
    position: relative;
    z-index: 99;
  }
`;

export const FieldInputStyled = styled.input<{ error?: boolean }>`
  width: 95%;
  color: ${({ error }) => (error ? COLORS.RED : COLORS.BLACK_100)};
  outline: none;
  padding: 10px;
  border: ${({ error }) =>
    error ? `1px solid ${COLORS.RED}` : `1px solid rgba(18, 18, 18, 0.4)`};
  &:focus {
    border: ${({ error }) =>
      error ? `2px solid ${COLORS.RED}` : `2px solid ${COLORS.THEME_COLOR}`};
  }
`;

export const StyledErrorDiv = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;

export const StyledErrorText = styled.span`
  font-size: 11px;
  color: ${COLORS.RED};
  margin-top: -1px;
  font-weight: bold;
`;
