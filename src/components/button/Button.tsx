import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button className="custom-button" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
