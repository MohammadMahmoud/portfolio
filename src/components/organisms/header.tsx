'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '../../app/hooks/theme-toggle';
import LogoTerminal from '../logos/logo-terminal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4 md:py-8'
      } bg-background`}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid grid-cols-3 md:grid-cols-3 items-center'>
          <div className='hidden md:flex items-center space-x-6 lg:space-x-8 justify-start'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='hover:text-blue-700 dark:hover:text-red-700 text-[12px] lg:text-[13px] font-bold tracking-widest uppercase transition-colors duration-200 font-montserrat'
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className='md:hidden flex justify-start'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-800 hover:text-black focus:outline-none'
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className='flex  justify-center'>
            <Link href='/' className='relative block'>
              <LogoTerminal />
            </Link>
          </div>

          <div className='flex items-center sm:space-x-0 space-x-6 lg:space-x-8 justify-end'>
            <span className='hidden lg:block text-right font-bold tracking-widest uppercase transition-colors duration-200'>
              Code. Lead. Deliver.
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden border-t border-gray-100 absolute w-full left-0 top-full shadow-lg'>
          <div className='flex flex-col p-6 space-y-4 text-center bg-background'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='hover:text-blue-700 dark:hover:text-red-700 block text-sm font-bold tracking-widest uppercase'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
