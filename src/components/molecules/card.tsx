const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`rounded-xl border border-gray-100 bg-background shadow-sm ${className}`}
  >
    {children}
  </div>
);

export default Card;
