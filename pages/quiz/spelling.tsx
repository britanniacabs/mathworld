// pages/quiz/spelling.tsx
import Navbar from '../../components/Navbar';
import SpellingQuiz from '../../components/SpellingQuiz';

const SpellingQuizPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <SpellingQuiz />
    </div>
  );
};

export default SpellingQuizPage;