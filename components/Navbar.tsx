// components/Navbar.tsx
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 dark:bg-blue-800 p-4">
      <ul className="flex space-x-4 items-center">
        <li><Link href="/" className="text-white hover:underline">Home</Link></li>
        <li><Link href="/quiz/addition" className="text-white hover:underline">Addition</Link></li>
        <li><Link href="/quiz/subtraction" className="text-white hover:underline">Subtraction</Link></li>
        <li><Link href="/quiz/multiplication" className="text-white hover:underline">Multiplication</Link></li>
        <li><Link href="/quiz/division" className="text-white hover:underline">Division</Link></li>
        <li><Link href="/quiz/spelling" className="text-white hover:underline">Spelling</Link></li>
        <li className="ml-auto">
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;