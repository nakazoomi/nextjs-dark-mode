import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <FiSun
          className="sun-icon"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <IoIosMoon
          className="moon-icon"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <>
      <header>
        <div>{renderThemeChanger()}</div>
      </header>
    </>
  );
};

export default Header;
