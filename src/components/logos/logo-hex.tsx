const LogoHex = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    viewBox='0 0 100 100'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M50 5 L93 28 V72 L50 95 L7 72 V28 Z'
      fill='none'
      stroke='currentColor'
      strokeWidth='5'
      className='text-gray-900'
    />

    <circle cx='35' cy='40' r='5' className='fill-gray-900' />
    <circle cx='65' cy='40' r='5' className='fill-gray-900' />
    <circle cx='50' cy='65' r='5' className='fill-blue-600' />

    <path
      d='M35 40 L50 65 L65 40'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      fill='none'
      className='text-gray-900'
    />
  </svg>
);
export default LogoHex;
