import { ImageContext } from "./ImageContext";
import { useState } from "react";
import { ImageState, Props } from "./interfaces/interfaces";
import { AxiosResponse } from "axios";

const INITIAL_STATE: ImageState = {
  loading: undefined,
  imageUrl: ""
}

const ImageProvider = ({ children }: Props) => {

  const [image, setImage] = useState<ImageState> (INITIAL_STATE);

  const imageUploading = () => {
    setImage({ loading: true, imageUrl: "" })
  }

  const getImageUploaded = (event: AxiosResponse) => {
    setImage({ loading: false, imageUrl: event.data})
  }

  const restartApp = () => {
    setImage(INITIAL_STATE)
  }

  return (
    <ImageContext.Provider value={{ image, imageUploading, getImageUploaded, restartApp }}>
      { children }  
    </ImageContext.Provider>
  )

}

export default ImageProvider;