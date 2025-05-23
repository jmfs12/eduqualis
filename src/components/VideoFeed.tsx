
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { ChevronUp, ChevronDown, Video } from 'lucide-react';

// Mock data for videos
const allVideos = [
  {
    id: 1,
    videoUrl: "/videos/adicao_virgula.mp4",
    title: "Adição com vírgula",
    teacher: "Prof. Sandro Curió",
    subject: "Matemática",
    likes: 347,
    comments: 42,
    duration: "00:46",
    trackId: "1"
  },
  {
    id: 2,
    videoUrl: "/videos/divisao_numeros_decimais.mp4",
    title: "Divisão de números decimais",
    teacher: "Prof. Ana Silva",
    subject: "Matemática",
    likes: 285,
    comments: 31,
    duration: "3:45",
    trackId: "1"
  },
  {
    id: 3,
    videoUrl: "/videos/divisao_potencia_mesma_base.mp4",
    title: "Divisão de potências com a mesma base",
    teacher: "Profa. Mariana Costa",
    subject: "Matemática",
    likes: 421,
    comments: 56,
    duration: "00:44",
    trackId: "1"
  },
  {
    id: 4,
    videoUrl: "/videos/op_basicas.mp4",
    title: "Operações básicas com frações",
    teacher: "Prof. Carlos Mendes",
    subject: "Matemática",
    likes: 289,
    comments: 37,
    duration: "00:56",
    trackId: "1"
  },
  {
    id: 5,
    videoUrl: "/videos/eq_2grau.mp4",
    title: "Equações do 2º grau 1",
    teacher: "Prof. Ricardo Lopes",
    subject: "Matemática",
    likes: 312,
    comments: 42,
    duration: "01:32",
    trackId: "1"
  },
  {
    id: 6,
    videoUrl: "/videos/eq_2grau2.mp4",
    title: "Equações do 2º grau 2",
    teacher: "Prof. Ricardo Lopes",
    subject: "Matemática",
    likes: 217,
    comments: 85,
    duration: "01:20",
    trackId: "1"
  }
];

interface VideoFeedProps {
  trackId?: string | null;
}

const VideoFeed = ({ trackId }: VideoFeedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [videos, setVideos] = useState(allVideos);

  useEffect(() => {
    if (trackId) {
      const filteredVideos = allVideos.filter(video => video.trackId === trackId);
      setVideos(filteredVideos.length > 0 ? filteredVideos : allVideos);
    } else {
      setVideos(allVideos);
    }
    setCurrentIndex(0);
    setLiked(false);
  }, [trackId]);

  const goToNextVideo = () => {
    if (currentIndex < videos.length - 1) {
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

  // If there are no videos available
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <Video size={64} className="mb-4 opacity-50" />
        <p className="text-lg">Nenhum vídeo disponível para esta trilha</p>
      </div>
    );
  }

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
          videoUrl={videos[currentIndex].videoUrl}
          title={videos[currentIndex].title}
          teacher={videos[currentIndex].teacher}
          subject={videos[currentIndex].subject}
          likes={videos[currentIndex].likes}
          comments={videos[currentIndex].comments}
          duration={videos[currentIndex].duration}
          liked={liked}
          setLiked={setLiked}
        />
      </div>
      
      {currentIndex < videos.length - 1 && (
        <button 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full"
          onClick={goToNextVideo}
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      )}
      
      {/* Progress indicator */}
      <div className="absolute top-4 left-0 right-0 px-4 flex justify-center gap-2">
        {videos.map((_, idx) => (
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
