
const ProgressBar = () => {
  return (
    <div className="flex flex-col w-fit h-fit items-start py-9 px-8 shadow-lg rounded-xl gap-4">
      <h1 className="text-lg">Uploading...</h1>
      <div className="w-80 h-1.5 bg-gray-100 rounded-lg">
        <div className="h-full w-24 bg-blue-500 rounded-lg loading_bar-line"></div>
      </div>
    </div>
  )
}

export default ProgressBar