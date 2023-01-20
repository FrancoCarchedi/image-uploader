import './App.css';
import ImageUploader from './components/ImageUploader';
import ImageProvider from './context/ImageProvider';

function App() {
  return (
    <ImageProvider>
      <div className="flex flex-col h-screen items-center justify-center align-center">
        <ImageUploader />
        <div className="absolute bottom-4">
          <p className="text-xs text-gray-500">Created by <a href="https://github.com/FrancoCarchedi" target="_blank" rel="noreferrer"><strong>Franco Carchedi</strong></a> - devChallenges.io</p>
        </div>
      </div>
    </ImageProvider>
  );
}

export default App;
