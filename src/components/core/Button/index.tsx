import React, { MouseEventHandler } from "react";

import { ButtonStyled } from "./index.styles";

interface IButtonProps {
  className?: string;
  type?: "reset" | "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  name?: string;
  backgroundColor?: string;
  hoverColor?: string;
  isBottom?: boolean;
  id?: string;
  isTransparent?: boolean;
}

/**
 * Reusable button component
 */
const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
  children,
  ...props
}) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
