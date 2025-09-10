
export default function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
