import ThemeMode from '../ThemeMode/ThemeMode';
import { useSelector } from 'react-redux';

const Page = ({ children }) => {
  const { isDark } = useSelector((state) => state.mode);
  return (
    <div
      className={`page relative min-h-screen transition delay-5 duration-300 ease-in-out ${
        !isDark ? 'white bg-white' : 'dark bg-neutral-900'
      }`}
    >
      <ThemeMode />
      {children}
    </div>
  );
};

export default Page;
