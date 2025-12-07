const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className='inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'>
    {children}
  </span>
);

export default Badge;
