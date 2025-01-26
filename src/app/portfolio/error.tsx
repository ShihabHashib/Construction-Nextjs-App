"use client";

export default function PortfolioError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-orange-500 text-white px-6 py-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
