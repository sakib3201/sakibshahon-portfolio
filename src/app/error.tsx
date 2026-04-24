"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-data-mono text-data-mono text-primary-container mb-sm">
          SYSTEM_ERROR
        </p>
        <h1 className="font-display-poetry text-display-poetry text-on-surface mb-md">
          Transmission Failed
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[70ch] mb-lg">
          An unexpected error occurred. The system was unable to complete the
          requested operation.
        </p>
        <button
          onClick={reset}
          className="font-data-mono text-label-caps uppercase px-md py-sm bg-primary-container text-on-primary rounded-none hover:bg-surface-tint transition-colors duration-200"
        >
          RETRY
        </button>
      </div>
    </main>
  );
}
