import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-6 text-black">Welcome to SecureConnect</h1>
      <p className="text-lg text-gray-600 mb-8">Explore the Secure and User-friendly Authentication System</p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}