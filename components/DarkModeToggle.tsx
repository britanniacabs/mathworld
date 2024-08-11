// components/DarkModeToggle.tsx
import { useTheme } from 'next-themes'

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="p-2 rounded-md hover:ring-2 hover:ring-gray-300"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default DarkModeToggle