import { InputHTMLAttributes } from "react";
import {
  DivRelative,
  FieldInputStyled,
  StyledErrorDiv,
  StyledErrorText,
} from "./index.styles";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  InputProps?: any;
  isDate?: boolean;
  error?: string;
}

const FieldInput = ({
  className,
  placeholder,
  value,
  error,
  isDate,
  ...props
}: IInputProps) => {
  return (
    <DivRelative>
      <FieldInputStyled
        placeholder={placeholder}
        {...props}
        className={`${className}`}
        error={error && error.length > 0 ? true : false}
      />

      {error && error.length > 0 && (
        <StyledErrorDiv>
          <StyledErrorText>{error}</StyledErrorText>
        </StyledErrorDiv>
      )}
    </DivRelative>
  );
};

export default FieldInput;
