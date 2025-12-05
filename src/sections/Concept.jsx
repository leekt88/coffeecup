import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import FeatureCard from '../components/FeatureCard';

const Concept = () => {
  const features = [
    {
      icon: null,
      title: 'Thermo-AI',
      description:
        'Real-time temperature tracking and smart alerts keep your coffee at the perfect temperature. Never burn your tongue or drink cold coffee again.',
    },
    {
      icon: null,
      title: 'NFC One-Tap Brew',
      description:
        'Simply tap the cup to your coffee machine. It automatically adjusts to your personal preference, making every cup perfect.',
    },
    {
      icon: null,
      title: 'Mood-Blend System',
      description:
        'Choose your mood: Focus, Relax, or Energy Boost. Our AI recommends the perfect drink to match your current state and goals.',
    },
  ];

  return (
    <SectionWrapper id="concept" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of coffee with AI-powered technology designed
            for Secomm&apos;s innovative culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-secomm-blue to-secomm-blue-light rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Eco-Friendly Impact</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join Secomm&apos;s sustainability initiative. Reduce disposable cup usage
            across the company while enjoying a premium coffee experience.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Concept;

