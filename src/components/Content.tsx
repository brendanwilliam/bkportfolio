import clsx from 'clsx';

export function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;

}) {
  return (
      <div className={clsx("w-full border-t border-zinc-800")}>
        <div className={clsx("container mx-auto", className)}>
          {children}
        </div>
      </div>
  )
}