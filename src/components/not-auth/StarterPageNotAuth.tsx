import Link from "next/link";
import LoadingIndicator from "../loading-indicator";

export default function StarterPageNotAuth() {
  return (
    <div className="mx-auto flex aspect-square w-full max-w-sm flex-col justify-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
      <div className="space-y-1 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
          PragmaX
        </h1>
        <p className="text-sm text-gray-500">
          Smarter. Faster. Better ERP for modern businesses.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/sign-in"
          className="w-full rounded-lg bg-blue-600 py-2 text-center font-semibold text-white transition-all hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          className="w-full rounded-lg border border-blue-600 py-2 text-center font-semibold text-blue-600 transition-all hover:bg-blue-50"
        >
          Create an Account
        </Link>
      </div>

      <div className="text-center text-xs text-gray-400">
        Transform your business with automation ✨
      </div>
    </div>
  );
}
