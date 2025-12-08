import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const AnimatedBurgerMenu = ({
  navLinks,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='md:hidden flex justify-start'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='relative w-8 h-8 text-gray-800 hover:text-blue-700 dark:text-white dark:hover:text-red-700 focus:outline-none transition-all duration-300'
        >
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'opacity-0 rotate-90 scale-75'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <Menu size={28} />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-75'
            }`}
          >
            <X size={28} />
          </div>
        </button>
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
    </>
  );
};

export default AnimatedBurgerMenu;
