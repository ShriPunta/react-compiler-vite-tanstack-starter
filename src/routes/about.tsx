import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="text-slate-600">
        Demo route. The counter below is auto-memoized by the React Compiler.
      </p>
      <div className="flex items-center gap-3">
        <Button onClick={() => setCount((c) => c + 1)}>Count: {count}</Button>
        <Button variant="ghost" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
      <Link to="/" className="underline">
        Back home
      </Link>
    </div>
  );
}
