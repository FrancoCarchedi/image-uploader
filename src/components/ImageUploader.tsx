import ImageUploaded from "./ImageUploaded";
import ImageUpload from "./ImageUpload";
import ProgressBar from "./ProgressBar";
import { useImage } from "../context/ImageContext";

const ImageUploader = () => {

  const image = useImage();

  return (
    <>
    {image.image.loading === undefined && image.image.imageUrl === ""? <ImageUpload /> : 
    image.image.loading === true && image.image.imageUrl === ""? <ProgressBar /> : 
    <ImageUploaded/>}
    </>
  )
}

export default ImageUploader