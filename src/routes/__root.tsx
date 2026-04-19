import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <div className="p-4">
      <p>Not found.</p>
      <Link to="/" className="underline">
        Go home
      </Link>
    </div>
  ),
});

function RootComponent() {
  return (
    <>
      <nav className="flex gap-4 border-b border-slate-200 p-4 text-sm">
        <Link to="/" activeProps={{ className: 'font-bold' }} activeOptions={{ exact: true }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ className: 'font-bold' }}>
          About
        </Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}
