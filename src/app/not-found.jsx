import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative rounded-lg p-8 text-center">
        <p className="mb-4 text-6xl font-bold">404</p>
        <p className="mb-4 text-xl">Sorry, we were unable to find that page</p>
        <Link href="/" className="text-lg underline hover:text-gray-300">
          Start from home page
        </Link>
      </div>
    </div>
  );
}
