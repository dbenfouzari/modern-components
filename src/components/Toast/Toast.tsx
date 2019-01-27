import * as React from "react";
import ReactDOM from "react-dom";
import { ToastWrapper } from "./Toast.styles";

export interface ToastProps {
  position?:
    | "top-left"
    | "top-right"
    | "top"
    | "bottom-left"
    | "bottom-right"
    | "bottom";
}

const Toast = ({ position }: ToastProps) =>
  ReactDOM.createPortal(
    <ToastWrapper position={position}>Coucou</ToastWrapper>,
    document.getElementById("root") as HTMLDivElement,
  );

export default Toast;
