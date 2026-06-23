import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-5 relative">
        <div className="absolute inset-y-60 flex flex-col gap-4">
      <h2 className="text-8xl font-semibold ">404</h2>
      <p className="text-4xl font-semibold">Page Not Found</p>
      <Link
        href="/"
        className="mt-2 rounded-md bg-blue-500 px-3 py-2 text-sm text-white transition-colors hover:bg-lime-500 text-center font-semibold"
      >
        Go Back To Homepage
      </Link>
      </div>
    </main>
  );
}