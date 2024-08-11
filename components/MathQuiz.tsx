// components/MathQuiz.tsx
import React, { useState, useEffect } from 'react';

type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';

interface MathQuizProps {
  operation: Operation;
}

const MathQuiz: React.FC<MathQuizProps> = ({ operation }) => {
  const [studentName, setStudentName] = useState<string>('');
  const [isNameSubmitted, setIsNameSubmitted] = useState<boolean>(false);
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const generateQuestion = (): void => {
    let n1: number, n2: number;
    switch (operation) {
      case 'addition':
        n1 = Math.floor(Math.random() * 90) + 10;
        n2 = Math.floor(Math.random() * 90) + 10;
        break;
      case 'subtraction':
        n1 = Math.floor(Math.random() * 90) + 10;
        n2 = Math.floor(Math.random() * n1) + 1; // Ensures n2 is smaller than n1
        break;
      case 'multiplication':
        n1 = Math.floor(Math.random() * 12) + 1;
        n2 = Math.floor(Math.random() * 12) + 1;
        break;
      case 'division':
        n2 = Math.floor(Math.random() * 11) + 2; // Divisor between 2 and 12
        n1 = n2 * (Math.floor(Math.random() * 12) + 1); // Ensure divisible
        break;
    }
    setNum1(n1);
    setNum2(n2);
    setUserAnswer('');
    setIsCorrect(null);
  };

  useEffect(() => {
    if (isNameSubmitted) {
      generateQuestion();
    }
  }, [isNameSubmitted, operation]);

  const calculateCorrectAnswer = (): number => {
    switch (operation) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return num1 / num2;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const correctAnswer: number = calculateCorrectAnswer();
    const userAnswerNum: number = parseFloat(userAnswer);

    if (userAnswerNum === correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers(prev => prev + 1);
      setTimeout(() => {
        if (totalQuestions + 1 >= 20) {
          setQuizCompleted(true);
        } else {
          generateQuestion();
        }
      }, 1500);
    } else {
      setIsCorrect(false);
    }
    setTotalQuestions(prev => prev + 1);
  };

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const restartQuiz = (): void => {
    setStudentName('');
    setIsNameSubmitted(false);
    setTotalQuestions(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };

  if (!isNameSubmitted) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
        <form onSubmit={handleNameSubmit}>
        <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="border p-2 mr-2 bg-white dark:bg-gray-700 text-black dark:text-white"
            placeholder="Your name"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Start Quiz
          </button>
        </form>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
        <p>Congratulations, {studentName}!</p>
        <p>You scored {correctAnswers} out of 20.</p>
        {correctAnswers === 20 && (
          <div className="mt-4 p-4 border border-gold bg-yellow-100">
            <h2 className="text-xl font-bold">Certificate of Excellence</h2>
            <p>This certifies that {studentName} has successfully completed the {operation} quiz with a perfect score!</p>
          </div>
        )}
        <button onClick={restartQuiz} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">{operation.charAt(0).toUpperCase() + operation.slice(1)} Quiz</h1>
      <div className="mb-4">
        <p>Score: {correctAnswers}/{totalQuestions}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl">{num1} {operation === 'addition' ? '+' : operation === 'subtraction' ? '-' : operation === 'multiplication' ? '×' : '÷'} {num2} = ?</p>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
      <input
          type="number"
          step="0.01"
          value={userAnswer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserAnswer(e.target.value)}
          className="border p-2 mr-2 bg-white dark:bg-gray-700 text-black dark:text-white"
          placeholder="Your answer"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      {isCorrect === true && (
        <p className="text-green-500">✓ Correct! Next question coming up...</p>
      )}
      {isCorrect === false && (
        <p className="text-red-500">✗ Incorrect. Try again.</p>
      )}
    </div>
  );
};

export default MathQuiz;