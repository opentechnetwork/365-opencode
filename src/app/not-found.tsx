import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-[146px] min-h-[60vh] flex items-center justify-center bg-surface">
      <div className="text-center px-6">
        <p className="text-7xl font-extrabold text-brand mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          This page could not be found.
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-navy text-white px-6 py-3 rounded-[4px] font-semibold hover:bg-navy-hover transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
