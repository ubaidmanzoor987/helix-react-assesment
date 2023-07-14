import styled from "@emotion/styled";
import { Card, Grid } from "@mui/material";
import { COLORS } from "../../constants/colors";

export const StyledContainer = styled(Grid)`
  background-color: ${COLORS.GREY};
`;

export const StyledCard = styled(Card)`
  padding: 0px 20px 20px 20px;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
`;

export const AskQuestionButton = styled.div`
  position: absolute;
  top: 40px;
  right: 130px;
  @media (max-width: 900px) {
    right: 30px;
  }
  button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
  }
`;
