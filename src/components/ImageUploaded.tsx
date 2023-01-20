import { useImage } from "../context/ImageContext";

const copyUrl = (url: string) => {
  navigator.clipboard.writeText(url)
}

const ImageUploaded = () => {

  const image = useImage();

  return (
    <div className="flex flex-col w-fit h-fit items-center py-9 px-8 shadow-lg rounded-xl gap-4">
      <span className="material-icons md-48 align-middle text-green-600 ">check_circle</span>
      <h1 className="text-lg">Uploaded Successfully!</h1>
      <div className="ldBar" data-value="50"></div>

      <img className="flex flex-col rounded-lg justify-center items-center w-80 h-auto" src={image.image.imageUrl} alt="uploaded"/>

      <div className="flex w-full p-0.5 justify-between border rounded-lg bg-gray-100 items-center">
        <p className="text-xs text-gray-500 pl-2">{image.image.imageUrl.length! >= 30? (image.image.imageUrl.substring(0, 30) + " ...") : image.image.imageUrl}</p>
        <button className="text-xs text-white py-2 px-5 bg-blue-500 rounded-lg cursor-pointer" onClick={() => copyUrl(image.image.imageUrl)} >Copy Link</button>
      </div>
    </div>
  )
}

export default ImageUploaded