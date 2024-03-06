import clsx from 'clsx';

export function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;

}) {
  return (
      <div className={clsx("w-full spacing-y-8", className)}>
        {children}
      </div>
  )
}