import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-brand-coral" />
          404
          <span className="w-8 h-px bg-brand-coral" />
        </span>
        <h1 className="text-3xl lg:text-5xl font-display tracking-tight mb-6">That page is not here.</h1>
        <p className="text-lg text-muted-foreground mb-10">The link may be out of date.</p>
        <Link href="/" className="inline-flex items-center h-12 px-8 rounded-full bg-primary text-primary-foreground text-sm">
          Back to home
        </Link>
      </div>
    </section>
  );
}
