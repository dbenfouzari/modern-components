import * as React from "react";
import { ToastWrapper } from "./Toast.styles";
import ToastContainer from "./ToastContainer";

export interface ToastProps {
  children: JSX.Element | string;
}

const Toast = ({ children }: ToastProps) => (
  <ToastWrapper>{children}</ToastWrapper>
);

Toast.Container = ToastContainer;

export default Toast;
