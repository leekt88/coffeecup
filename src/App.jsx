import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Concept from './sections/Concept';
import HowItWorks from './sections/HowItWorks';
import WhyAmazing from './sections/WhyAmazing';
import FinalCTA from './sections/FinalCTA';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Concept />
      <HowItWorks />
      <WhyAmazing />
      <FinalCTA />
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-secomm-blue to-secomm-blue-light rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">☕</span>
                </div>
                <span className="text-xl font-bold">Secomm Cup</span>
              </div>
              <p className="text-gray-400">
                The future of workplace coffee culture, powered by AI and
                designed for Secomm.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#concept"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-amazing"
                    className="hover:text-white transition-colors"
                  >
                    Why Amazing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Visit the Secomm Office Zone to get your cup.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Secomm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

