
import { useState } from 'react';
import Navbar from '../components/Navbar';
import LearningTrack from '../components/LearningTrack';
import AnaAssistant from '../components/AnaAssistant';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Layers, ListCheck } from 'lucide-react';

// Mock data for available tracks
const availableTracks = [
  {
    id: 1,
    title: "Matemática Básica",
    description: "Fundamentos essenciais de matemática para reforçar seu conhecimento",
    level: "Iniciante",
    totalVideos: 12,
    icon: "book-open",
    category: "Exatas"
  },
  {
    id: 2,
    title: "Física Contextualizada",
    description: "Física aplicada ao dia a dia com exemplos práticos",
    level: "Intermediário",
    totalVideos: 8,
    icon: "layers",
    category: "Exatas"
  },
  {
    id: 3,
    title: "Português Essencial",
    description: "Gramática e interpretação de texto de forma simples",
    level: "Iniciante",
    totalVideos: 15,
    icon: "list-check",
    category: "Humanas"
  }
];

const TracksPage = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [filter, setFilter] = useState("Todos");

  const handleTrackSelect = (trackId: number) => {
    setSelectedTrack(trackId === selectedTrack ? null : trackId);
  };

  const filteredTracks = filter === "Todos" 
    ? availableTracks 
    : availableTracks.filter(track => track.category === filter);

  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'book-open':
        return <BookOpen className="text-eduBlue-600" size={24} />;
      case 'layers':
        return <Layers className="text-eduBlue-600" size={24} />;
      case 'list-check':
        return <ListCheck className="text-eduBlue-600" size={24} />;
      default:
        return <BookOpen className="text-eduBlue-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="pt-6 md:pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Trilhas de Aprendizado</h1>
        
        {/* Filters */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-6">
          {["Todos", "Exatas", "Humanas", "Tecnologia"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                filter === category 
                  ? 'bg-eduBlue-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Available Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredTracks.map((track) => (
            <Card 
              key={track.id}
              className={`cursor-pointer card-hover ${
                selectedTrack === track.id ? 'ring-2 ring-eduBlue-500' : ''
              }`}
              onClick={() => handleTrackSelect(track.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-eduBlue-100 p-2 rounded-lg">
                    {renderIcon(track.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{track.title}</h3>
                    <span className="text-xs text-gray-500">Nível: {track.level}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{track.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{track.totalVideos} vídeos</span>
                  <button className="text-eduBlue-600 text-sm font-medium">Ver detalhes</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Track Details */}
        {selectedTrack && (
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Detalhes da Trilha</h2>
            <LearningTrack />
          </div>
        )}
      </div>
      
      <AnaAssistant />
      <Navbar />
    </div>
  );
};

export default TracksPage;
