const LogoStack = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    viewBox='0 0 100 100'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M50 90 L10 70 L50 50 L90 70 Z' className='fill-gray-800' />

    <path d='M50 70 L10 50 L50 30 L90 50 Z' className='fill-gray-600' />

    <path d='M50 50 L10 30 L50 10 L90 30 Z' className='fill-blue-600' />
  </svg>
);
export default LogoStack;
