import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-data-mono text-data-mono text-primary-container mb-sm">
          404_NOT_FOUND
        </p>
        <h1 className="font-display-poetry text-display-poetry text-on-surface mb-md">
          Signal Lost
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[70ch] mb-lg">
          The requested transmission endpoint does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="font-data-mono text-label-caps uppercase px-md py-sm bg-primary-container text-on-primary rounded-none hover:bg-surface-tint transition-colors duration-200"
        >
          RETURN TO ORIGIN
        </Link>
      </div>
    </main>
  );
}
