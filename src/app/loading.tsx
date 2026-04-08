export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-14 w-full rounded-full bg-[var(--surface)]" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-5 w-40 rounded-full bg-[var(--surface)]" />
            <div className="h-20 w-full rounded-[2rem] bg-[var(--surface)]" />
            <div className="h-6 w-3/4 rounded-full bg-[var(--surface)]" />
            <div className="h-12 w-48 rounded-full bg-[var(--surface)]" />
          </div>
          <div className="h-[28rem] rounded-[2rem] bg-[var(--surface)]" />
        </div>
      </div>
    </main>
  );
}
