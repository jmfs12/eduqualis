import { useState } from 'react';
import { toast } from "sonner";
import { auth, googleProvider } from '../lib/firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Login com Google realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      toast.error("Falha ao realizar login com Google.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async () => {
    setIsLoading(true);
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Conta criada com sucesso!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login realizado com sucesso!");
      }
    } catch (error: any) {
      console.error("Erro:", error);
      toast.error(error.message || "Ocorreu um erro.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-eduBlue-600 mb-2">
          {isRegistering ? "Crie sua conta" : "Acesse a EduQualis"}
        </h2>
        <p className="text-gray-600">
          {isRegistering
            ? "Cadastre-se para começar a usar a plataforma"
            : "Entre para acessar conteúdo educacional personalizado"}
        </p>
      </div>

      {/* Email/Password Form */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-eduBlue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-eduBlue-500"
        />
        <button
          onClick={handleEmailAuth}
          disabled={isLoading}
          className="w-full bg-eduBlue-500 text-white py-3 rounded-lg font-medium hover:bg-eduBlue-600 transition-colors"
        >
          {isLoading
            ? isRegistering ? "Registrando..." : "Entrando..."
            : isRegistering ? "Criar Conta" : "Entrar"}
        </button>
      </div>

      {/* Google Button */}
      <div className="mt-4">
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          {isLoading ? "Carregando..." : "Continuar com Google"}
        </button>
      </div>

      {/* Alternar entre Login e Registro */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {isRegistering ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-eduBlue-600 hover:underline font-medium"
          >
            {isRegistering ? "Faça login" : "Crie uma conta"}
          </button>
        </p>
      </div>

      {/* Termos */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Ao continuar, você aceita nossos{" "}
          <a href="#" className="text-eduBlue-600 hover:underline">
            Termos de Serviço
          </a>{" "}
          e{" "}
          <a href="#" className="text-eduBlue-600 hover:underline">
            Política de Privacidade
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
