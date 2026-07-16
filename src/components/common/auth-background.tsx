export default function AuthBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 -top-64 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
      <div className="absolute -left-40 top-1/3 size-[380px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-10 size-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div
        className="absolute inset-0 opacity-[0.32] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--border) 80%, transparent) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/90 to-background" />
    </div>
  );
}
