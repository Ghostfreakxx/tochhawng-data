type PanelProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Panel({ title, description, children }: PanelProps) {
  return (
    <section className="mt-6 rounded-2xl border border-line bg-surface p-6">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      {description && (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          {description}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}
