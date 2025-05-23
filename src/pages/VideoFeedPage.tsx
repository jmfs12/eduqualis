
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VideoFeed from '../components/VideoFeed';
import { Button } from "../components/ui/button";
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock track data (in a real app this would come from an API or context)
const tracks = [
  {
    id: "1",
    title: "Matemática Básica",
    description: "Fundamentos essenciais de matemática para reforçar seu conhecimento",
  },
  {
    id: "2", 
    title: "Física Contextualizada",
    description: "Física aplicada ao dia a dia com exemplos práticos",
  },
  {
    id: "3",
    title: "Português Essencial",
    description: "Gramática e interpretação de texto de forma simples",
  }
];

const VideoFeedPage = () => {
  const [searchParams] = useSearchParams();
  const trackId = searchParams.get('trackId');
  const [currentTrack, setCurrentTrack] = useState(null);
  
  useEffect(() => {
    if (trackId) {
      const track = tracks.find(t => t.id === trackId);
      setCurrentTrack(track);
    }
  }, [trackId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 md:pt-24 max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center mb-6 gap-2">
          <Link to="/tracks">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ChevronLeft size={16} />
              <span>Voltar às Trilhas</span>
            </Button>
          </Link>
          {currentTrack && (
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Videos: {currentTrack.title}
            </h1>
          )}
        </div>
        
        <div className="w-full max-w-3xl mx-auto h-auto">
          <VideoFeed trackId={trackId} />
        </div>
      </div>
    </div>
  );
};

export default VideoFeedPage;
