import { ReactNode } from "react";

export interface ImageState {
  loading: boolean | undefined;
  imageUrl: string;
}

export interface Props {
  children: ReactNode
}