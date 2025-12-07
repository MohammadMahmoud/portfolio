const LogoBracket = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    viewBox='0 0 100 100'
    className={`${className} fill-current`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M35 20 L15 50 L35 80'
      fill='none'
      stroke='currentColor'
      strokeWidth='8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <path
      d='M65 20 L85 50 L65 80'
      fill='none'
      stroke='currentColor'
      strokeWidth='8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <path
      d='M42 25 L50 65 L58 25'
      fill='none'
      stroke='#2563EB'
      strokeWidth='8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export default LogoBracket;
