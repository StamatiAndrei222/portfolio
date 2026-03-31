type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-3">
      {eyebrow ? <p className="pill">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">{description}</p> : null}
    </div>
  );
}
