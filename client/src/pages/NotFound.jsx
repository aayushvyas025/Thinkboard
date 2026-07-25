import { FileQuestionIcon } from "lucide-react";
import { Suspense } from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <Suspense>

    <div className="flex flex-col items-center justify-center py-16 space-y-6 w-full max-w-xl mx-auto text-center">
      <div className="bg-error/10 rounded-full p-8">
        <FileQuestionIcon className="size-10 text-error" />
      </div>

      <h1 className="text-5xl font-extrabold text-error">404</h1>

      <h2 className="text-2xl font-bold">
        Oops! Page Not Found
      </h2>

      <p className="text-base-content/70">
        The page you're looking for doesn't exist, has been moved,
        or the URL may be incorrect.
      </p>

      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
    </Suspense>
  );
}

export default NotFound;
