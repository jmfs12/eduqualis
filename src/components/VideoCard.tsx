
import { useState, useRef } from 'react';
import { Heart, BookOpen, Share2, MessageSquare, Maximize, Minimize } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [focusMode, setFocusMode] = useState(false);
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
  
  const toggleFocus = () => {
    setFocusMode(!focusMode);
  };

  return (
    <div className={`relative w-full h-full ${focusMode ? 'bg-black' : 'bg-black'} overflow-hidden`}>
      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover z-0"
        playsInline
        loop
      />

      {/* Botão interativo de play quando pausado */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/10 transition"
        >
          <div className="w-16 h-16 rounded-full bg-eduBlue-500/80 flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </button>
      )}

      {/* Se o vídeo estiver tocando, permitir pausar clicando em qualquer lugar */}
      {isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-10 bg-transparent"
        >
          {/* Área clicável invisível */}
        </button>
      )}

      {/* Focus mode toggle button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={toggleFocus} 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-30 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
            >
              {focusMode ? <Minimize size={20} /> : <Maximize size={20} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{focusMode ? 'Sair do modo foco' : 'Ativar modo foco'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Informações do vídeo */}
      {!focusMode && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{teacher} • {subject}</p>
            <p className="text-xs opacity-70 mt-1">{duration}</p>
          </div>
        </div>
      )}

      {/* Botões de interação do lado direito */}
      {!focusMode && (
        <div className="absolute right-4 bottom-24 flex flex-col space-y-6 items-center z-20">
          <button onClick={toggleLike} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center ${liked ? 'text-red-500' : 'text-white'}`}>
              <Heart fill={liked ? 'currentColor' : 'none'} size={24} />
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
      )}
    </div>
  );
};

export default VideoCard;
