'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Button variant='ghost' size='icon' className='w-9 h-9' disabled />;

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='z-50 flex items-center justify-center rounded-full bg-background/80 px-12 py-5 backdrop-blur-sm transition-all text-sm font-medium'
    >
      {resolvedTheme === 'dark' ? (
        <>
          Light
          <Sun className='h-5 w-5 ml-1' />
        </>
      ) : (
        <>
          Dark
          <Moon className='h-5 w-5 ml-1' />
        </>
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
