export function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <div id={id} className="w-full pt-4 pb-8">
      <h1 className="px-4 text-3xl text-neutral-800 font-bold pb-4">{title}</h1>
      {children}
    </div>
  )
}