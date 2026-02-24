import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-white/20 px-6 py-2 rounded-lg hover:bg-white/30 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
