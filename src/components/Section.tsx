import clsx from 'clsx';

export function Section({
  id,
  children,
  className = "",
}: {
  id: string,
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div id={id} className={clsx("w-full pt-4 pb-8", className)}>
      {children}
    </div>
  )
}