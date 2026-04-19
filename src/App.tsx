import { RouterProvider } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { router } from './router';

// --- React Compiler Demo ---
// The compiler automatically memoizes values and callbacks — no useMemo /
// useCallback / React.memo needed. The annotations below show what the compiler
// emits under the hood; you write the simple version.

const ITEMS = Array.from({ length: 5_000 }, (_, i) => ({
  id: i,
  label: `Item ${i}`,
  value: Math.random(),
}));

// Compiler auto-memoizes this child: equivalent to React.memo(StatCard)
function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3 text-center">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

// Compiler auto-memoizes the filtered list: equivalent to useMemo(() => …, [query, sortDesc])
// Compiler auto-memoizes handlers:           equivalent to useCallback(() => …, [setSortDesc])
function CompilerDemo() {
  const [query, setQuery] = useState('');
  const [sortDesc, setSortDesc] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // Expensive derived value — no useMemo needed
  const filtered = ITEMS.filter((it) => it.label.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sortDesc ? b.value - a.value : a.value - b.value))
    .slice(0, 10);

  // Stable handler — no useCallback needed
  const toggleSort = () => setSortDesc((d) => !d);

  // Intentional re-render trigger to prove StatCards don't re-render unnecessarily
  const forceRender = () => setRenderCount((n) => n + 1);

  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">React Compiler Demo</h2>
        <span className="text-xs text-slate-400">parent renders: {renderCount}</span>
      </div>

      <p className="text-sm text-slate-500">
        No <code className="font-mono">useMemo</code>,{' '}
        <code className="font-mono">useCallback</code>, or{' '}
        <code className="font-mono">React.memo</code> — the compiler handles it.
      </p>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          placeholder="Filter items…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline" size="sm" onClick={toggleSort}>
          {sortDesc ? '↓ Desc' : '↑ Asc'}
        </Button>
        <Button variant="ghost" size="sm" onClick={forceRender}>
          Re-render parent
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {filtered.map((it) => (
          <StatCard key={it.id} label={it.label} value={Number(it.value.toFixed(3))} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RouterProvider router={router} />
      <div className="border-t border-slate-100 p-6">
        <CompilerDemo />
      </div>
    </div>
  );
}

export default App;
