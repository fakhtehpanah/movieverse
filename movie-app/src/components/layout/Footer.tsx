export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 my-12">
      <p className="text-sm">
        © {new Date().getFullYear()} MovieVerse. Powered by TMDB.
      </p>
    </footer>
  );
}