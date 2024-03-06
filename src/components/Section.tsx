import clsx from 'clsx';

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string,
  title: string,
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div id={id} className={clsx("w-full pt-4 pb-8", className)}>
      <h1 className="px-4 text-3xl text-neutral-800 font-bold pb-4">{title}</h1>
      {children}
    </div>
  )
}