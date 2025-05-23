
import { useState } from 'react';
import VideoCard from './VideoCard';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Mock data for videos
const mockVideos = [
  {
    id: 1,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "Equações do 2º Grau Simplificadas",
    teacher: "Prof. Ana Silva",
    subject: "Matemática",
    likes: 347,
    comments: 42,
    duration: "2:30"
  },
  {
    id: 2,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Fotossíntese Explicada em 3 min",
    teacher: "Prof. Carlos Mendes",
    subject: "Biologia",
    likes: 289,
    comments: 37,
    duration: "3:15"
  },
  {
    id: 3,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Revolução Francesa: Causas Principais",
    teacher: "Profa. Mariana Costa",
    subject: "História",
    likes: 421,
    comments: 56,
    duration: "4:10"
  }
];

const VideoFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const goToNextVideo = () => {
    if (currentIndex < mockVideos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setLiked(false);
    }
  };

  const goToPreviousVideo = () => {
    console.log("Previous video");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setLiked(false);
    }
  };

  return (
    <div className="relative video-container">
      {/* Navigation buttons */}
      {currentIndex > 0 && (
        <button 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-50 bg-white/20 backdrop-blur-sm p-2 rounded-full"
          onClick={goToPreviousVideo}
        >
          <ChevronUp size={24} className="text-white" />
        </button>
      )}
      
      {/* Current video */}
      <div className="h-full w-full">
        <VideoCard 
          videoUrl={mockVideos[currentIndex].videoUrl}
          title={mockVideos[currentIndex].title}
          teacher={mockVideos[currentIndex].teacher}
          subject={mockVideos[currentIndex].subject}
          likes={mockVideos[currentIndex].likes}
          comments={mockVideos[currentIndex].comments}
          duration={mockVideos[currentIndex].duration}
          liked={liked}
          setLiked={setLiked}
        />
      </div>
      
      {currentIndex < mockVideos.length - 1 && (
        <button 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full"
          onClick={goToNextVideo}
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      )}
      
      {/* Progress indicator */}
      <div className="absolute top-4 left-0 right-0 px-4 flex justify-center gap-2">
        {mockVideos.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-4'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;
