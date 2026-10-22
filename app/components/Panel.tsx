type PanelProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Panel({ title, description, children }: PanelProps) {
  return (
    <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
      {description && (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
          {description}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}
