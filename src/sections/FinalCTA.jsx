import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import CTAButton from '../components/CTAButton';

const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SectionWrapper
      id="final-cta"
      className="bg-gradient-to-br from-secomm-blue via-secomm-blue-light to-secomm-blue-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Coffee Experience?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Visit the Secomm Office Zone to get your personalized coffee cup
            and start your journey to the perfect cup every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-6">
              Scan to Get Started
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Use the QR code to register your cup and set up your preferences
              in seconds.
            </p>
            <CTAButton
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="w-full md:w-auto"
            >
              Start Your Coffee Journey
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 border-4 border-gray-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-500 text-4xl">QR</span>
                  </div>
                  <p className="text-gray-500 text-sm">QR Code Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/80 mb-4">
            Available now in the Secomm Office Zone
          </p>
          <CTAButton
            onClick={() => {
              const element = document.getElementById('how-it-works');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="secondary"
            size="lg"
          >
            Try It Now in Secomm Office Zone
          </CTAButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTA;

