type TermProps = {
  label?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Term({
  label = "What does this mean?",
  children,
  className = "",
}: TermProps) {
  return (
    <details className={`mt-3 ${className}`}>
      <summary className="cursor-pointer text-sm text-green-400 hover:text-green-300 select-none">
        {label}
      </summary>

      <p className="text-sm text-gray-400 mt-2 leading-6">
        {children}
      </p>
    </details>
  );
}
