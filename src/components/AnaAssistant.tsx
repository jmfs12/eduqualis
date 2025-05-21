import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AnaAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ana',
      content: 'Olá! Eu sou a Ana, sua assistente de estudos. Como posso te ajudar hoje?',
      timestamp: 'Agora mesmo'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const callOpenAI = async (prompt: string): Promise<string> => {
    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Erro na API OpenAI');
      }

      const data = await res.json();
      return data.response; // aqui espero que sua API retorne { response: string }
    } catch (error) {
      console.error(error);
      return 'Desculpe, não consegui processar sua solicitação.';
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Adiciona a mensagem do usuário
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: 'Agora mesmo'
    };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Chama a OpenAI para resposta
    const aiResponse = await callOpenAI(newMessage);

    // Adiciona a resposta da Ana
    const anaMessage = {
      id: userMessage.id + 1,
      sender: 'ana',
      content: aiResponse,
      timestamp: 'Agora mesmo'
    };

    setMessages(prev => [...prev, anaMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isChatOpen ? 'bg-white text-eduBlue-500 rotate-90' : 'bg-eduBlue-500 text-white'
        }`}
      >
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-eduBlue-500 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg font-semibold">A</span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Ana</h3>
                <p className="text-xs opacity-80">Sua assistente de estudos</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-eduBlue-500 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs mt-1 block opacity-70">{message.timestamp}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200 italic text-gray-500">
                  Ana está digitando...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
                className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-eduBlue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-eduBlue-500 text-white h-10 w-10 rounded-lg flex items-center justify-center disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Ana pode ajudar com organização, dúvidas e sugestões de estudo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnaAssistant;
