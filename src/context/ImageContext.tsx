import { createContext, useContext } from 'react';

export const ImageContext = createContext ({} as any);

export const useImage = () => useContext(ImageContext);