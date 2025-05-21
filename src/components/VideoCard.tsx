
import { useState, useRef } from 'react';
import { Heart, BookOpen, Share2, MessageSquare } from 'lucide-react';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  teacher: string;
  subject: string;
  likes: number;
  comments: number;
  duration: string;
}

const VideoCard = ({ 
  videoUrl, 
  title, 
  teacher, 
  subject, 
  likes, 
  comments,
  duration 
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        loop
        onClick={togglePlay}
      />
      
      {/* Video Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{teacher} • {subject}</p>
          <p className="text-xs opacity-70 mt-1">{duration}</p>
        </div>
      </div>

      {/* Right side interaction buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col space-y-6 items-center">
        <button 
          onClick={toggleLike} 
          className="flex flex-col items-center"
        >
          <div className={`w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center ${liked ? 'text-red-500' : 'text-white'}`}>
            <Heart fill={liked ? "currentColor" : "none"} size={24} />
          </div>
          <span className="text-white text-xs mt-1">{liked ? likes + 1 : likes}</span>
        </button>
        
        <button className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white">
            <MessageSquare size={24} />
          </div>
          <span className="text-white text-xs mt-1">{comments}</span>
        </button>
        
        <button className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white">
            <Share2 size={24} />
          </div>
          <span className="text-white text-xs mt-1">Compartilhar</span>
        </button>
        
        <button className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-white text-xs mt-1">Trilha</span>
        </button>
      </div>
      
      {/* Play button overlay when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-eduBlue-500/80 flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
