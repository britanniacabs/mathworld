// pages/index.tsx
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold">Welcome to Math and Spelling Quiz</h1>
        <p className="mt-4">Select a quiz type from the navbar to get started!</p>
        <ul className="list-disc list-inside mt-4">
          <li>Addition Quiz</li>
          <li>Subtraction Quiz</li>
          <li>Multiplication Quiz</li>
          <li>Division Quiz</li>
          <li>Spelling Quiz</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;