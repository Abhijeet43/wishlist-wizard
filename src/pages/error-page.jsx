import React from "react";
import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="bg-background min-h-screen overflow-x-hidden text-foreground">
        <div className="z-10 relative flex flex-col justify-center items-center px-4 py-8 md:py-12 min-h-screen text-center container">
          <h1 className="mb-4 font-bold text-3xl md:text-4xl">
            {error.status} Error
          </h1>
          <h2 className="mb-6 font-semibold text-foreground/80 text-xl md:text-2xl">
            {error.statusText}
          </h2>
          <p className="mb-8 max-w-md text-foreground/70 text-sm md:text-base">
            {error.data?.message ||
              "We couldn't find what you were looking for."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-white btn btn-primary"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen overflow-x-hidden text-foreground">
      <div className="z-10 relative flex flex-col justify-center items-center px-4 py-8 md:py-12 min-h-screen text-center container">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">
          Unexpected Error
        </h1>
        <p className="mb-8 max-w-md text-foreground/70 text-sm md:text-base">
          Something went wrong. Our team has been notified and is working on a
          fix.
        </p>
        <div className="shadow-lg backdrop-blur-xs mb-8 p-4 border border-border rounded-md max-w-full overflow-auto text-sm text-left">
          <pre className="font-mono">{error.message || "Unknown error"}</pre>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Try Again
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
