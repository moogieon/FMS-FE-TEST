import React from "react";
import { ReactNode } from "react";
import { Portal } from "..";
const Modal = ({ children }: { children: ReactNode }) => {
  return <Portal>{children}</Portal>;
};
export default Modal;
