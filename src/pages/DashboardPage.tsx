
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import AnaAssistant from '../components/AnaAssistant';
import LearningTrack from '../components/LearningTrack';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-6 md:pt-24 pb-20">
        <Dashboard />
        
        <div className="max-w-4xl mx-auto px-4 mt-10">
          <h2 className="text-xl font-bold mb-4">Sua Trilha Atual</h2>
          <LearningTrack />
        </div>
      </div>
      
      <AnaAssistant />
      <Navbar />
    </div>
  );
};

export default DashboardPage;
