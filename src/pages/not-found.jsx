import React from "react";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden text-foreground">
      <div className="z-10 relative flex flex-col justify-center items-center px-4 py-8 md:py-12 min-h-screen text-center container">
        <h1 className="bg-clip-text mb-4 font-bold text-3xl md:text-4xl">
          404 - Page Not Found
        </h1>
        <p className="mb-8 max-w-md text-foreground/70 text-sm md:text-base">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4">
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-primary"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
