import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-accent-blue text-sm font-mono tracking-widest mb-4 uppercase">
          Error 404
        </p>
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-6">
          <span className="text-gradient">404</span>
        </h1>
        <p className="text-text-secondary text-xl md:text-2xl mb-8">
          This page has been automerged into the void.
        </p>
        <a
          href="/"
          className="magnetic-btn primary inline-flex"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
