
import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Mail, Instagram, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 md:pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-eduBlue-600 mb-8 text-center">
          Sobre a EduQualis
        </h1>

        <section className="mb-12">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduBlue-600 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduBlue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduBlue-600">Nossa Missão</h2>
              </div>
              <p className="text-gray-700">
                Levar educação de qualidade, acessível e inclusiva a jovens de todo o Brasil, com foco em conteúdos curtos, 
                objetivos e com suporte inteligente para estudantes com dificuldades de atenção, como o TDAH.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduGreen-600 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduGreen-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduGreen-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduGreen-600">Nossa Visão</h2>
              </div>
              <p className="text-gray-700">
                Ser a maior plataforma educacional em formato de rede social, conectando milhões de estudantes 
                ao conhecimento de forma moderna, dinâmica e adaptada às suas realidades.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduYellow-500 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduYellow-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduYellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduYellow-500">Por que criamos a EduQualis</h2>
              </div>
              <p className="text-gray-700 mb-4">
                A EduQualis nasceu ao observarmos a história de milhares de jovens como a Mariana, de 16 anos, estudante do ensino 
                público, moradora da zona rural do Piauí. Mariana sonha em cursar Ciência da Computação, mas enfrenta obstáculos 
                como falta de acessibilidade a plataformas educacionais, vídeos longos e confusos, e pouca adaptação às suas 
                dificuldades de atenção.
              </p>
              <p className="text-gray-700">
                Criamos a EduQualis para mudar essa realidade. Aqui, cada segundo conta. Cada vídeo é direto, útil e parte de 
                uma trilha pensada para realmente ensinar — com uma assistente virtual sempre pronta para ajudar.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-eduBlue-600 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Nossos Diferenciais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Trilhas de aprendizado</h3>
                    <p className="text-sm text-gray-600">Com professores variados, mantendo a continuidade do conteúdo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Microlearning</h3>
                    <p className="text-sm text-gray-600">Vídeos curtos, objetivos e fáceis de entender</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Ana, a assistente virtual</h3>
                    <p className="text-sm text-gray-600">Com IA, que ajuda a manter o foco, responder dúvidas e planejar os estudos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Gamificação</h3>
                    <p className="text-sm text-gray-600">Pontos, recompensas e metas semanais para manter a motivação</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Design focado em acessibilidade cognitiva</h3>
                    <p className="text-sm text-gray-600">Ideal para quem tem TDAH e outras dificuldades de concentração</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-5">
                <div className="flex items-start">
                  <div className="bg-eduBlue-100 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Interface estilo rede social</h3>
                    <p className="text-sm text-gray-600">Aprenda como quem navega no TikTok, mas com conteúdo transformador</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduBlue-600 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduBlue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduBlue-600">Compromisso com a Educação de Qualidade</h2>
              </div>
              <p className="text-gray-700">
                A EduQualis está alinhada ao Objetivo de Desenvolvimento Sustentável (ODS) 4 da ONU: "Assegurar uma educação 
                inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos."
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduGreen-600 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduGreen-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduGreen-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduGreen-600">Nossa Equipe</h2>
              </div>
              <p className="text-gray-700">
                Somos um grupo de desenvolvedores, educadores e designers apaixonados por inovação social. 
                Acreditamos que a tecnologia pode mudar vidas — e a educação é o primeiro passo.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card className="bg-white overflow-hidden">
            <div className="bg-eduYellow-500 h-2"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-eduYellow-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-eduYellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-eduYellow-500">Fale com a gente</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Tem sugestões, dúvidas ou quer fazer parte da comunidade?
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="mailto:contato@eduqualis.com.br" className="inline-flex items-center gap-2 text-eduBlue-600 hover:text-eduBlue-700">
                  <Mail size={18} />
                  <span>contato@eduqualis.com.br</span>
                </Link>
                
                <Link to="https://instagram.com/eduqualis" className="inline-flex items-center gap-2 text-eduBlue-600 hover:text-eduBlue-700">
                  <Instagram size={18} />
                  <span>@eduqualis</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <div className="text-center mt-12">
          <Link to="/" className="button-primary inline-flex items-center gap-2">
            <span>Começar a aprender agora</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
