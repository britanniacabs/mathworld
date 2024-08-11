// pages/quiz/addition.tsx
import Navbar from '../../components/Navbar';
import MathQuiz from '../../components/MathQuiz';

const AdditionQuiz: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MathQuiz operation="addition" />
    </div>
  );
};

export default AdditionQuiz;