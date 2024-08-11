// pages/quiz/division.tsx
import Navbar from '../../components/Navbar';
import MathQuiz from '../../components/MathQuiz';

const DivisionQuiz: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MathQuiz operation="division" />
    </div>
  );
};

export default DivisionQuiz;