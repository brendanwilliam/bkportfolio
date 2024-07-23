export function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="w-full pb-5">
      <h2 className="text-2xl text-zinc-300 font-bold pb-2">{title}</h2>
      {children}
    </div>
  )
}