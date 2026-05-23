import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-4">
        <span className="text-9xl font-black gradient-text select-none">404</span>
      </div>
      <h1 className="text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground text-sm mb-8 max-w-sm leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="cosmic-btn">Back to Home</Link>
    </div>
  );
}
