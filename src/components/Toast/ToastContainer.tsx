import * as React from "react";
import ReactDOM from "react-dom";
import { ToastProps } from "./Toast";
import { ToastContainerStyled } from "./Toast.styles";

export interface ToastContainerProps {
  children: React.ReactElement<ToastProps> | React.ReactElement<ToastProps>[];
  /**
   * @default "top-right"
   */
  position?:
    | "top-left"
    | "top-right"
    | "top"
    | "bottom-left"
    | "bottom-right"
    | "bottom";
}

const ToastContainer = ({ children, position }: ToastContainerProps) =>
  ReactDOM.createPortal(
    <ToastContainerStyled position={position}>{children}</ToastContainerStyled>,
    document.getElementById("root") as HTMLDivElement,
  );

export default ToastContainer;
