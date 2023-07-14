import styled from "@emotion/styled";
import { Card, Grid } from "@mui/material";
import { COLORS } from "../../constants/colors";

export const StyledContainer = styled(Grid)`
  background-color: ${COLORS.GREY};
  height: 100vh;
`;

export const StyledHeading = styled.h3`
  font-size: 20px;
  font-weight: bolder;
`;

export const StyledCard = styled(Card)`
  padding: 0px 20px 20px 20px;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
`;

export const StyledTextArea = styled.textarea`
  width: 95%;
  color: ${COLORS.BLACK_100};
  outline: none;
  padding: 10px;
  border: 1px solid rgba(18, 18, 18, 0.4);
  margin-top: 20px;
  resize: none;
  &:focus {
    outline-color: ${COLORS.THEME_COLOR};
  }
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
  }
`;

export const AskQuestionButton = styled.div`
  position: absolute;
  top: 40px;
  right: 100px;
  @media(max-width: 900px) {
    right: 30px;
  }
  button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
  }
`;
