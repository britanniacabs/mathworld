// components/SpellingQuiz.tsx
import React, { useState, useEffect } from 'react';

const words = [
    'about', 'after', 'again', 'animal', 'ant', 'bat', 'cat', 'dog', 'egg', 'fan', 'gum', 'hen', 'ink', 'jam', 'kit', 'log', 'mud', 'net', 'owl', 'pen', 'rat', 'sun', 'tap', 'van', 'web', 'yak', 'zip', 'hat', 'pig', 'fox', 'cub', 'man', 'box', 'bus', 'toy', 'cap', 'red', 'pin', 'win', 'sit', 'top', 'rug', 'run', 'lid', 'lid', 'fin', 'bit', 'pot'
];

const SpellingQuiz: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const startNewQuestion = () => {
    setCurrentWord(getRandomWord());
    setUserInput('');
    setIsCorrect(null);
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalQuestions(prev => prev + 1);

    if (userInput.toLowerCase() === currentWord.toLowerCase()) {
      setScore(prev => prev + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      if (totalQuestions + 1 >= 20) {
        setQuizCompleted(true);
      } else {
        startNewQuestion();
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setScore(0);
    setTotalQuestions(0);
    setQuizCompleted(false);
    startNewQuestion();
  };

  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord);
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };

  if (quizCompleted) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Spelling Quiz Completed!</h1>
        <p>You scored {score} out of 20.</p>
        <button onClick={restartQuiz} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Spelling Quiz</h1>
      <div className="mb-4">
        <p>Score: {score}/{totalQuestions}</p>
      </div>
      <div className="mb-4">
        <button onClick={speakWord} className="bg-green-500 text-white p-2 rounded">
          Listen to the word
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mr-2 bg-white dark:bg-gray-700 text-black dark:text-white"
          placeholder="Spell the word"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      {isCorrect === true && (
        <p className="text-green-500">✓ Correct! Next word coming up...</p>
      )}
      {isCorrect === false && (
        <p className="text-red-500">✗ Incorrect. The correct spelling was: {currentWord}</p>
      )}
    </div>
  );
};

export default SpellingQuiz;