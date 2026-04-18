import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
