import styled from "@emotion/styled";
import { Card, Divider } from "@mui/material";
import { COLORS } from "../../constants/colors";

export const StyledCard = styled(Card)`
  padding: 0px 20px 20px 20px;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
  margin-top: 20px;
`;

export const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: bolder;
  font-family: Poppins !important;
`;

export const StyledText = styled.p`
  font-family: Poppins !important;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export const StyledDivider = styled(Divider)`
  color: ${COLORS.LIGHT_GREY};
  margin: 20px 0px;
`;

export const StyledAuthorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Poppins !important;
  flex-direction: row;
  .column {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      font-weight: 700;
      text-align: left;
    }
  }
`;

export const StyledAuthorName = styled.p`
  color: ${COLORS.THEME_COLOR};
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding-top: 15px;
  margin-left: -10px;
`;
