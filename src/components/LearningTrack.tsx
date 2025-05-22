
import { useState } from 'react';
import { ChevronRight, BookOpen, CheckCircle, Play, BookOpen as BookIcon, ListCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Mock data for learning tracks
const tracks = [
  {
    id: 1,
    title: "Matemática Básica",
    totalVideos: 12,
    completedVideos: 4,
    level: "Iniciante",
    chapters: [
      {
        id: 101,
        title: "Números e Operações",
        completed: true,
        videos: [
          { id: 1001, title: "Adição e Subtração", completed: true, duration: "3:20" },
          { id: 1002, title: "Multiplicação", completed: true, duration: "4:15" },
          { id: 1003, title: "Divisão", completed: true, duration: "5:10" },
        ]
      },
      {
        id: 102,
        title: "Frações",
        completed: true,
        videos: [
          { id: 1004, title: "Conceito de Frações", completed: true, duration: "4:30" },
          { id: 1005, title: "Frações Equivalentes", completed: false, duration: "3:45" },
        ]
      },
      {
        id: 103,
        title: "Equações",
        completed: false,
        videos: [
          { id: 1006, title: "Equações de Primeiro Grau", completed: false, duration: "6:10" },
          { id: 1007, title: "Equações de Segundo Grau", completed: false, duration: "7:20" },
        ]
      }
    ],
    activities: [
      { id: "1", title: "Equações do 2º Grau", questions: 2 }
    ]
  }
];

const LearningTrack = () => {
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(null);
  const track = tracks[0]; // Using the first track as an example
  const navigate = useNavigate();

  const toggleChapter = (chapterId: number) => {
    setExpandedChapterId(expandedChapterId === chapterId ? null : chapterId);
  };

  const progressPercentage = Math.round((track.completedVideos / track.totalVideos) * 100);
  
  const goToActivities = () => {
    navigate(`/activities?track=${track.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-eduBlue-100 p-2 rounded-lg">
            <BookOpen className="text-eduBlue-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{track.title}</h2>
            <p className="text-sm text-gray-500">Nível: {track.level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-eduBlue-600">{progressPercentage}% completo</p>
          <p className="text-xs text-gray-500">{track.completedVideos} de {track.totalVideos} vídeos</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-eduBlue-500 h-2 rounded-full" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Chapters */}
      <div className="space-y-3 mb-6">
        <h3 className="font-medium text-gray-700 flex items-center gap-2">
          <BookIcon size={18} />
          <span>Conteúdo da Trilha</span>
        </h3>
        {track.chapters.map(chapter => (
          <div key={chapter.id} className="border rounded-lg overflow-hidden">
            <button 
              className={`w-full p-4 flex items-center justify-between ${chapter.completed ? 'bg-eduGreen-50' : 'bg-white'}`}
              onClick={() => toggleChapter(chapter.id)}
            >
              <div className="flex items-center gap-3">
                {chapter.completed ? (
                  <CheckCircle size={20} className="text-eduGreen-500" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
                <span className="font-medium">{chapter.title}</span>
              </div>
              <ChevronRight 
                size={20} 
                className={`text-gray-500 transition-transform ${expandedChapterId === chapter.id ? 'rotate-90' : ''}`} 
              />
            </button>
            
            {expandedChapterId === chapter.id && (
              <div className="bg-gray-50 border-t">
                {chapter.videos.map(video => (
                  <div 
                    key={video.id} 
                    className="p-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-eduBlue-500 flex items-center justify-center">
                        <Play size={16} className="text-white ml-0.5" />
                      </div>
                      <span className={`${video.completed ? 'text-gray-500' : 'text-gray-800'}`}>
                        {video.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{video.duration}</span>
                      {video.completed && <CheckCircle size={16} className="text-eduGreen-500" />}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Activities Section */}
      {track.activities && track.activities.length > 0 && (
        <div className="mb-6 border-t pt-6">
          <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
            <ListCheck size={18} />
            <span>Atividades Relacionadas</span>
          </h3>
          <div className="space-y-3">
            {track.activities.map(activity => (
              <div key={activity.id} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                   onClick={goToActivities}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-eduBlue-100 p-2 rounded-lg">
                      <ListCheck size={18} className="text-eduBlue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.questions} questões</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <button className="bg-eduBlue-600 text-white px-4 py-2 rounded-md hover:bg-eduBlue-700 transition-colors">
          Continuar Aprendendo
        </button>
      </div>
    </div>
  );
};

export default LearningTrack;
