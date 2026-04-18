import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">bun-vite-react-tanstack-starter</h1>
      <p className="text-slate-600">
        Bun + Vite + React 19 + React Compiler + TanStack Router + Tailwind + shadcn/ui.
      </p>
      <div className="flex gap-2">
        <Button asChild>
          <Link to="/about">Go to About</Link>
        </Button>
        <Button variant="outline" onClick={() => alert('clicked')}>
          Click me
        </Button>
      </div>
    </div>
  );
}
