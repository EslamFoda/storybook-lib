import React from "react";
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
