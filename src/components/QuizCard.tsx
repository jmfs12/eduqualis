
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizCardProps {
  question: string;
  options: QuizOption[];
  onAnswered?: (correct: boolean) => void;
}

const QuizCard = ({ question, options, onAnswered }: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelectOption = (optionId: string) => {
    if (answered) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption || answered) return;
    
    setAnswered(true);
    const selected = options.find(opt => opt.id === selectedOption);
    if (selected && onAnswered) {
      onAnswered(selected.isCorrect);
    }
  };

  const getOptionClass = (option: QuizOption) => {
    if (!answered || selectedOption !== option.id) {
      return 'border border-gray-300 bg-white hover:bg-gray-50';
    }
    
    if (option.isCorrect) {
      return 'border border-green-500 bg-green-50 text-green-700';
    } else if (selectedOption === option.id) {
      return 'border border-red-500 bg-red-50 text-red-700';
    } else {
      return 'border border-gray-300 bg-white';
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5 border-b border-gray-200 bg-eduBlue-50">
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
      </div>
      
      <div className="p-5">
        <ul className="space-y-3">
          {options.map((option) => (
            <li key={option.id}>
              <button
                onClick={() => handleSelectOption(option.id)}
                className={`w-full text-left p-3 rounded-md transition-colors ${getOptionClass(option)}`}
                disabled={answered}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 mr-3 rounded-full flex items-center justify-center border ${selectedOption === option.id ? 'bg-eduBlue-500 text-white border-eduBlue-500' : 'border-gray-300'}`}>
                    {answered && option.isCorrect && <Check size={16} className="text-green-500" />}
                    {answered && !option.isCorrect && selectedOption === option.id && <X size={16} className="text-red-500" />}
                  </div>
                  <span>{option.text}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <Button 
            onClick={handleSubmit} 
            disabled={!selectedOption || answered}
            className="w-full"
          >
            {answered ? 'Respondido' : 'Confirmar resposta'}
          </Button>
          
          {answered && (
            <div className="mt-4 p-3 rounded-md bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-700">
                {options.find(opt => opt.id === selectedOption)?.isCorrect 
                  ? 'Parabéns! Você acertou a resposta.'
                  : 'Ops! Essa não é a resposta correta. Tente novamente em outra questão.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
