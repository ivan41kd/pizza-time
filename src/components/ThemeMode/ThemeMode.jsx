import Button from '@/shared/ui/Button/Button';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from './redux/actions';

const ThemeMode = () => {
  const { isDark } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(toggleMode(isDark))}
      className={'fixed bottom-2 right-2'}
      title={
        !isDark ? (
          <SunFilled className="size-4 text-black transition delay-5 duration-300 ease-in-out" />
        ) : (
          <MoonFilled className="size-4 text-black transition delay-5 duration-300 ease-in-out" />
        )
      }
    />
  );
};

export default ThemeMode;
