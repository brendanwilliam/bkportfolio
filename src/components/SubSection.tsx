export function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="w-full pb-4">
      <h2 className="text-sm text-neutral-700 font-bold pb-2">{title}</h2>
      {children}
    </div>
  )
}