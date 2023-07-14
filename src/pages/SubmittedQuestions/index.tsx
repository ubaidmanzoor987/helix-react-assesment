import { Grid } from "@mui/material";

import Button from "../../components/core/Button";
import QuestionCard from "../../components/QuestionCard";
import Avatar from "../../assets/svgs/avatar-user.svg";

import { StyledContainer, AskQuestionButton } from "./index.styles";
const questions = [
  {
    id: 0,
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    text: "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    author: {
      image: Avatar,
      name: "Pseudo Near Expert",
    },
  },
  {
    id: 1,
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    text: "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    author: {
      image: Avatar,
      name: "Pseudo Near Expert",
    },
  },
  {
    id: 2,
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    text: "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    author: {
      image: Avatar,
      name: "Pseudo Near Expert",
    },
  },
  {
    id: 3,
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    text: "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    author: {
      image: Avatar,
      name: "Pseudo Near Expert",
    },
  },
];

const SubmittedQuestions = () => {
  return (
    <StyledContainer container className="center">
      <AskQuestionButton className="center">
        <Button>
          <span>Ask a Question</span>
        </Button>
      </AskQuestionButton>
      <Grid item xs={10} marginTop={20} marginBottom={20}>
        <Grid container className="center"  >
          {questions.map((question) => (
            <Grid item xs={12} rowGap={2} key={question.id}>
              <QuestionCard {...question} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default SubmittedQuestions;
