// pages/quiz/multiplication.tsx
import Navbar from '../../components/Navbar';
import MathQuiz from '../../components/MathQuiz';

const MultiplicationQuiz: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MathQuiz operation="multiplication" />
    </div>
  );
};

export default MultiplicationQuiz;