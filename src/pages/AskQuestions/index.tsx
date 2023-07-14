import { useState } from "react";
import { Grid } from "@mui/material";

import FieldInput from "../../components/core/FieldInput";

import {
  StyledContainer,
  StyledCard,
  StyledHeading,
  StyledTextArea,
  SubmitButtonContainer,
  AskQuestionButton,
} from "./index.styles";
import Button from "../../components/core/Button";

const AskQuestions = () => {
  const [state, setState] = useState<{ title: string; text: string }>({
    title: "",
    text: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setState((obj) => ({ ...obj, [name]: value }));
  };

  const getDisabled = () => {
    if (state.text.length === 0) {
      return true;
    } else if (state.title.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <StyledContainer container className="center" position={"relative"}>
      <AskQuestionButton className="center">
        <Button>
          <span>Ask a Question</span>
        </Button>
      </AskQuestionButton>
      <Grid item md={12} sm={11} xs={11}>
        <Grid container className="center">
          <Grid item md={4} lg={3} sm={12} xs={12}>
            <StyledCard>
              <StyledHeading>New Question</StyledHeading>
              <FieldInput
                name="title"
                value={state.text}
                onChange={onChange}
                placeholder="Enter the text here"
              />{" "}
              <StyledTextArea
                name="text"
                value={state.text}
                onChange={onChange}
                placeholder="Write your questions here"
                rows={10}
              />
              <SubmitButtonContainer className="center">
                <Button disabled={getDisabled()}>
                  <span>Post</span>
                </Button>
              </SubmitButtonContainer>
            </StyledCard>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AskQuestions;
