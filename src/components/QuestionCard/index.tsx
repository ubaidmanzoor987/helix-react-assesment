import { Avatar } from "@mui/material";
import {
  StyledCard,
  StyledTitle,
  StyledText,
  StyledDivider,
  StyledAuthorContainer,
  StyledAuthorName,
} from "./index.styles";

/**
 * Reusable card
 */

interface ICard {
  text: string;
  title: string;
  author: {
    image: string | any;
    name: string;
  };
}

const QuestionCard = ({ title, text, author: { image, name } }: ICard) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      <StyledDivider variant="fullWidth" />
      <StyledAuthorContainer>
        <div className="column">
          <span>Asked by:</span>
          <Avatar src={image} />
        </div>
        <StyledAuthorName>{name}</StyledAuthorName>
      </StyledAuthorContainer>
    </StyledCard>
  );
};

export default QuestionCard;
