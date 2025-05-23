
import { BookOpen, CheckCircle, Clock, Award } from 'lucide-react';
import { auth } from '../lib/firebase';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


// Mock user data

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: auth.currentUser?.displayName || "Usuário",
    completedVideos: 0,
    completedTracks: 0,
    minutesWatched: 0,
    points: 0,
    level: "Intermediário",
    currentStreak: 0,
    badges: [
      { id: 1, name: "Matemática Básica", completed: false },
      { id: 2, name: "Física Introdutória", completed: false },
      { id: 3, name: "História do Brasil", completed: false }
    ],
    recommendedTracks: [
      { id: 1, title: "Álgebra Linear", videos: 12, level: "Intermediário" },
      { id: 2, title: "História Mundial", videos: 15, level: "Iniciante" }
    ],
    recentVideos: [
      { id: 1, title: "Equações de 2º Grau", subject: "Matemática", progress: 0 },
      { id: 2, title: "Leis de Newton", subject: "Física", progress: 0 },
      { id: 3, title: "República Velha", subject: "História", progress: 0 }
    ]
  });
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Olá, {userData.name}!</h1>
        <p className="text-gray-600">Continue o seu aprendizado de onde parou.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-eduBlue-100 p-2 rounded-lg">
              <CheckCircle className="text-eduBlue-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Vídeos completos</p>
              <h3 className="text-xl font-bold">{userData.completedVideos}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-eduYellow-100 p-2 rounded-lg">
              <BookOpen className="text-eduYellow-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Trilhas completas</p>
              <h3 className="text-xl font-bold">{userData.completedTracks}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-eduBlue-100 p-2 rounded-lg">
              <Clock className="text-eduBlue-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Minutos assistidos</p>
              <h3 className="text-xl font-bold">{userData.minutesWatched}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-eduYellow-100 p-2 rounded-lg">
              <Award className="text-eduYellow-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Pontos</p>
              <h3 className="text-xl font-bold">{userData.points}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Continue Learning Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Inicie agora</h2>
          
          <div className="space-y-4">
            {userData.recentVideos.map(video => (
              <div key={video.id} className="border rounded-lg p-4 hover:border-eduBlue-400 transition-colors cursor-pointer">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.subject}</p>
                  </div>
                  <div className="bg-eduBlue-100 h-8 w-8 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-eduBlue-600 ml-0.5"></div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-eduBlue-500 h-2 rounded-full" 
                    style={{ width: `${video.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-right mt-1 text-gray-500">{video.progress}% completo</p>
              </div>
            ))}
          </div>
          
          <button className="button-primary w-full mt-4">
            Ver Todos os Vídeos
          </button>
        </div>

        {/* Recommended Tracks Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Trilhas Recomendadas</h2>
          
          <div className="space-y-3">
            {userData.recommendedTracks.map(track => (
              <div 
                key={track.id} 
                className="border rounded-lg p-4 hover:border-eduYellow-400 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-eduYellow-100 p-2 rounded-lg mt-1">
                    <BookOpen className="text-eduYellow-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{track.title}</h3>
                    <p className="text-xs text-gray-500">{track.videos} vídeos • {track.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3">Seu progresso</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-eduYellow-500 h-2.5 rounded-full w-2/5"></div>
              </div>
              <span className="text-xs font-medium text-gray-500">40%</span>
            </div>
            
            <div className="flex items-center justify-between text-sm mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-eduYellow-600">{userData.currentStreak}</p>
                <p className="text-xs text-gray-500">Dias seguidos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-eduYellow-600">{userData.level}</p>
                <p className="text-xs text-gray-500">Seu nível</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-eduYellow-600">{userData.badges.filter(b => b.completed).length}</p>
                <p className="text-xs text-gray-500">Conquistas</p>
              </div>
            </div>
          </div>
          <Link to="/tracks">
            <button className="button-primary w-full mt-6">
              Explorar Mais Trilhas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
