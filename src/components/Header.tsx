import React from 'react';
import { Github } from 'lucide-react';
import logo from '../logo.jpeg'; // your logo path

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Top bar: Logo + GitHub */}
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
       <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg bg-white">
  <img
    src={logo}
    alt="WebCrawler AI Logo"
    className="w-full h-full object-contain"
  />
</div>
          <span className="font-bold text-2xl md:text-3xl">WebCrawler AI</span>
        </div>

        <a
          href="https://github.com/yourusername/yourrepo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <Github className="w-5 h-5" />
          <span className="hidden md:inline font-medium">GitHub</span>
        </a>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Intelligent Web Scraping Powered by MAX
        </h1>
        <p className="text-base md:text-lg text-blue-100 mb-6">
          Crawl websites, summarize content, and extract key information automatically.
          Simplify your data collection with AI-powered automation.
        </p>
       
      </div>

      {/* Optional decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
