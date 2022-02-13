import { ReactNode } from "react";

export interface ModalProps {
  show: boolean;
  containerClassName?: string;
  children: ReactNode;
}
