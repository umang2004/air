const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">✈️ AirlineX</h2>
          <p className="text-sm text-gray-400">
            Your trusted partner in safe, efficient, and modern air travel.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">support@airlinex.com</p>
          <p className="text-sm">+1 (800) 123-4567</p>
          <p className="text-sm mt-1">123 Skyway Blvd, Jet City, USA</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AirlineX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
