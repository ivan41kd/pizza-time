import { useThemeContext } from '@/providers/ThemeProvider';
import Button from '@/shared/ui/Button/Button';
import { MoonFilled, SunFilled } from '@ant-design/icons';

const Page = ({ children }) => {
  const { isDark, toggleMode } = useThemeContext();
  return (
    <div
      className={`page relative min-h-screen transition delay-5 duration-300 ease-in-out ${
        isDark ? 'white bg-white' : 'dark bg-neutral-900'
      }`}
    >
      <Button
        onClick={toggleMode}
        className={'fixed bottom-2 right-2'}
        title={
          !isDark ? (
            <SunFilled className="size-4 text-black transition delay-5 duration-300 ease-in-out" />
          ) : (
            <MoonFilled className="size-4 text-black transition delay-5 duration-300 ease-in-out" />
          )
        }
      />
      {children}
    </div>
  );
};

export default Page;
