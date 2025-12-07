const LogoTerminal = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    viewBox='0 0 100 100'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='10'
      y='10'
      width='80'
      height='80'
      rx='10'
      className='fill-gray-900'
    />

    <path
      d='M25 35 L45 50 L25 65'
      fill='none'
      stroke='white'
      strokeWidth='6'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <line
      x1='55'
      y1='65'
      x2='75'
      y2='65'
      stroke=''
      strokeWidth='6'
      strokeLinecap='round'
      className='stroke-blue-700 dark:stroke-red-700'
    />
  </svg>
);
export default LogoTerminal;
