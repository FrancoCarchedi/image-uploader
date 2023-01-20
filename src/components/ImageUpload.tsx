import { useState, DragEvent, ChangeEvent } from "react";
import { useImage } from "../context/ImageContext";
import imageWidget from "../image.svg";
import axios from "axios";

const ImageUpload = () => {

  const image = useImage();

  const [img, setImg] = useState<File> ()

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    let image = e.target.files?.[0]
    let extension = image?.name.substring(image.name.lastIndexOf('.') + 1).toLowerCase();

    extension === "gif" || extension === "png" || extension === "bmp" || extension === "jpeg" || extension === "jpg" || extension === "jfif"?
    setImg(image) : 
    alert("File selected is not an image")
  }

  const handleSubmit = () => {
    const formData = new FormData()

    if (img !== undefined) {
      formData.append('image', img)

      axios({
        method: "post",
        url: process.env.REACT_APP_url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data", },
        onUploadProgress() {
          image.imageUploading();
        },
        
      })
      .then((res) => {
        image.getImageUploaded(res);
      })
      .catch(() => {
        alert("No se pudo subir esta imagen");
        image.restartApp();
      });
    }
    else (
      alert("Selecciona una imagen")
    )
  }

  const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
  }

  const onDropImg = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
    setImg(event.dataTransfer.files[0])
  }

  return (
    <div className="flex flex-col w-fit h-fit items-center py-9 px-8 shadow-lg rounded-xl gap-4">
      <h1 className="text-lg">Upload your image</h1>
      <p className="text-xs text-gray-500">File should be JPG, PNG, etc...</p>

      {/* Drag and drop component */}
      <div className="flex flex-col justify-center items-center gap-8 w-80 h-52 rounded-lg border-dashed border-2 border-blue-300" onDrop={ onDropImg } onDragOver={ allowDrop }>
        <img src={imageWidget} alt="imageWidget" />
        <p className="text-gray-300">Drag & Drop your image here</p>
      </div>

      <p className="text-xs text-gray-300">Or</p>

      <div className="w-full p-2 justify-between border rounded-lg bg-gray-100 items-center" style={{display: img? "flex" : "none"}}>
        <p className="text-xs text-gray-500">{img?.name.length! >= 40? (img?.name.substring(0, 40) + " ...") : img?.name}</p>
        {/* <button onClick={() => setImg(undefined)}>
          <span className="material-icons align-middle hover:text-rose-500">delete</span>
        </button> */}
      </div>
      
      <label htmlFor="files" className="text-xs cursor-pointer">Choose a file</label>
      <input id="files" type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleImage}/>
      <button className="text-xs text-white py-2 px-4 bg-blue-500 rounded-lg cursor-pointer enabled:hover:bg-blue-600 enabled:active:bg-blue-700 disabled:opacity-75 disabled:cursor-not-allowed " onClick={handleSubmit} disabled={img === undefined}>Upload image</button>
    </div>
  )
}

export default ImageUpload