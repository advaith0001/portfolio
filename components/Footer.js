export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 text-center">

        <div className="flex justify-center gap-8 mb-6 text-sm text-gray-700">
          <a href="https://github.com/advaith0001">GitHub</a>
          <a href="https://www.linkedin.com/in/advaith-n-a-761b82264/">LinkedIn</a>
          <a href="https://www.instagram.com/advaith001/">Instagram</a>
        </div>

        <p className="text-xs text-gray-500">
         © {new Date().getFullYear()} Advaith N A
        </p>
      </div>
    </footer>
  );
}
