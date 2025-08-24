export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">MovieVerse</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:text-red-400 transition">Home</a>
        <a href="/movies" className="hover:text-red-400 transition">Movies</a>
        <a href="/tv" className="hover:text-red-400 transition">TV Shows</a>
      </nav>
    </header>
  );
}