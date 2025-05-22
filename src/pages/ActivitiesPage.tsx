
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AnaAssistant from '../components/AnaAssistant';
import QuizCard from '../components/QuizCard';
import { BookOpen, Trophy, Timer } from 'lucide-react';

// Mock data for the quizzes based on video subjects
const mockQuizzes = [
  {
    id: '1',
    subject: 'Matemática',
    title: 'Equações do 2º Grau',
    trackId: 1,
    chapterId: 103, // Associate with Equations chapter
    questions: [
      {
        id: 'q1',
        text: 'Qual é a fórmula para encontrar as raízes de uma equação de segundo grau?',
        options: [
          { id: 'a', text: 'x = -b ± √(b² - 4ac) / 2a', isCorrect: true },
          { id: 'b', text: 'x = -b ∓ √(b² + 4ac) / 2a', isCorrect: false },
          { id: 'c', text: 'x = b ± √(b² - 4ac) / 2a', isCorrect: false },
          { id: 'd', text: 'x = -b ± √(b² - 4ac) / a', isCorrect: false },
        ]
      },
      {
        id: 'q2',
        text: 'Para quais valores de Δ (delta) uma equação do segundo grau não possui raízes reais?',
        options: [
          { id: 'a', text: 'Δ > 0', isCorrect: false },
          { id: 'b', text: 'Δ = 0', isCorrect: false },
          { id: 'c', text: 'Δ < 0', isCorrect: true },
          { id: 'd', text: 'Δ ≥ 0', isCorrect: false },
        ]
      }
    ]
  },
  {
    id: '2',
    subject: 'Biologia',
    title: 'Fotossíntese',
    trackId: 2,
    questions: [
      {
        id: 'q1',
        text: 'Qual o principal gás absorvido durante a fotossíntese?',
        options: [
          { id: 'a', text: 'Oxigênio (O₂)', isCorrect: false },
          { id: 'b', text: 'Dióxido de Carbono (CO₂)', isCorrect: true },
          { id: 'c', text: 'Nitrogênio (N₂)', isCorrect: false },
          { id: 'd', text: 'Gás Hélio (He)', isCorrect: false },
        ]
      },
      {
        id: 'q2',
        text: 'Onde ocorre a fotossíntese nas plantas?',
        options: [
          { id: 'a', text: 'Apenas nas raízes', isCorrect: false },
          { id: 'b', text: 'No caule', isCorrect: false },
          { id: 'c', text: 'Nos cloroplastos, principalmente presentes nas folhas', isCorrect: true },
          { id: 'd', text: 'Apenas nas flores', isCorrect: false },
        ]
      }
    ]
  },
  {
    id: '3',
    subject: 'História',
    title: 'Revolução Francesa',
    trackId: 3,
    questions: [
      {
        id: 'q1',
        text: 'Em que ano teve início a Revolução Francesa?',
        options: [
          { id: 'a', text: '1789', isCorrect: true },
          { id: 'b', text: '1776', isCorrect: false },
          { id: 'c', text: '1804', isCorrect: false },
          { id: 'd', text: '1750', isCorrect: false },
        ]
      },
      {
        id: 'q2',
        text: 'Qual frase é associada à Maria Antonieta durante a Revolução Francesa?',
        options: [
          { id: 'a', text: '"Liberdade, Igualdade, Fraternidade"', isCorrect: false },
          { id: 'b', text: '"O Estado sou eu"', isCorrect: false },
          { id: 'c', text: '"Se não têm pão, que comam brioches"', isCorrect: true },
          { id: 'd', text: '"Revolução ou Morte"', isCorrect: false },
        ]
      }
    ]
  }
];

const ActivitiesPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [focusMode, setFocusMode] = useState(false);
  const [trackFilter, setTrackFilter] = useState<number | null>(null);
  const [chapterFilter, setChapterFilter] = useState<number | null>(null);

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuiz(quizId);
    setCorrectAnswers(0);
    setAnsweredQuestions(0);
  };

  const handleAnswered = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    setAnsweredQuestions(prev => prev + 1);
  };

  // Apply both track and chapter filters if available
  const filteredQuizzes = mockQuizzes.filter(quiz => {
    if (trackFilter && quiz.trackId !== trackFilter) {
      return false;
    }
    if (chapterFilter && quiz.chapterId !== chapterFilter) {
      return false;
    }
    return true;
  });

  const currentQuiz = mockQuizzes.find(quiz => quiz.id === selectedQuiz);

  // Handle focus mode changes (for the Ana Assistant)
  useEffect(() => {
    const handleFocusModeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ focusMode: boolean }>;
      setFocusMode(customEvent.detail.focusMode);
    };

    document.addEventListener('focusModeChange', handleFocusModeChange);
    return () => {
      document.removeEventListener('focusModeChange', handleFocusModeChange);
    };
  }, []);

  // Get track and chapter filters from URL if available
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const track = params.get('track');
    const chapter = params.get('chapter');
    
    if (track) {
      setTrackFilter(Number(track));
    }
    
    if (chapter) {
      setChapterFilter(Number(chapter));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {!focusMode && <Navbar />}
      
      <div className={`${focusMode ? 'pt-0' : 'pt-4 md:pt-20'} pb-20 px-4 md:px-6 max-w-5xl mx-auto`}>
        <h1 className="text-2xl md:text-3xl font-bold text-eduBlue-600 mb-6">Atividades de Aprendizado</h1>
        
        {(trackFilter || chapterFilter) && (
          <div className="mb-6">
            <button 
              onClick={() => {
                setTrackFilter(null);
                setChapterFilter(null);
              }}
              className="text-eduBlue-600 flex items-center hover:underline"
            >
              ← Voltar para todas as atividades
            </button>
            <p className="text-gray-600">
              {chapterFilter 
                ? "Mostrando atividades para o capítulo selecionado" 
                : "Mostrando atividades para a trilha selecionada"}
            </p>
          </div>
        )}
        
        {!selectedQuiz ? (
          <div>
            <p className="text-gray-600 mb-6">Selecione uma atividade abaixo para testar seus conhecimentos:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <div 
                  key={quiz.id}
                  onClick={() => handleSelectQuiz(quiz.id)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="p-5 border-b border-gray-200 bg-eduBlue-50">
                    <h3 className="font-semibold text-lg">{quiz.title}</h3>
                    <p className="text-sm text-gray-500">{quiz.subject}</p>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center text-gray-600 mb-3">
                      <BookOpen size={18} className="mr-2" />
                      <span>{quiz.questions.length} questões</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Timer size={18} className="mr-2" />
                      <span>Aprox. {quiz.questions.length * 2} min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredQuizzes.length === 0 && (
              <div className="text-center p-10 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600">Nenhuma atividade encontrada para os filtros selecionados.</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedQuiz(null)}
              className="mb-6 text-eduBlue-600 flex items-center hover:underline"
            >
              ← Voltar para todas atividades
            </button>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold">{currentQuiz?.title}</h2>
              <p className="text-gray-600">{currentQuiz?.subject}</p>
              
              {answeredQuestions > 0 && (
                <div className="mt-4 bg-eduBlue-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Trophy size={20} className="text-eduBlue-600 mr-2" />
                    <span className="font-medium">
                      Pontuação: {correctAnswers} de {answeredQuestions} ({Math.round((correctAnswers/answeredQuestions) * 100)}%)
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              {currentQuiz?.questions.map((question, index) => (
                <QuizCard
                  key={question.id}
                  question={`${index + 1}. ${question.text}`}
                  options={question.options}
                  onAnswered={handleAnswered}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <AnaAssistant />
    </div>
  );
};

export default ActivitiesPage;
