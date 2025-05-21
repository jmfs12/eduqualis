
import { useState } from 'react';
import VideoFeed from '../components/VideoFeed';
import AnaAssistant from '../components/AnaAssistant';
import Navbar from '../components/Navbar';
import Login from '../components/Login';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn ? (
        <>
          <div className="pb-16 md:pt-16 md:pb-0">
            <VideoFeed />
          </div>
          <AnaAssistant />
          <Navbar />
        </>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-eduBlue-600 mb-4">EduQualis</h1>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Aprendizado em vídeos curtos, feito para todos os estilos de aprendizagem
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <Login />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-eduBlue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Vídeos Curtos</h3>
              <p className="text-gray-600 text-sm">
                Aprenda com vídeos de 2-5 minutos, perfeitos para manter o foco
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-eduGreen-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eduGreen-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Trilhas de Aprendizado</h3>
              <p className="text-gray-600 text-sm">
                Siga trilhas organizadas para um aprendizado contínuo e estruturado
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-eduBlue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Assistente Ana</h3>
              <p className="text-gray-600 text-sm">
                Tire dúvidas e organize seus estudos com ajuda da assistente virtual
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsLoggedIn(true)}
            className="mt-10 button-primary text-lg py-3 px-8"
          >
            Demonstração (Pular Login)
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
