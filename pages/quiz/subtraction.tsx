// pages/quiz/subtraction.tsx
import Navbar from '../../components/Navbar';
import MathQuiz from '../../components/MathQuiz';

const SubtractionQuiz: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MathQuiz operation="subtraction" />
    </div>
  );
};

export default SubtractionQuiz;