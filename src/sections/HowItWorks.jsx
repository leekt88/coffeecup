import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import StepCard from '../components/StepCard';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Get Your Cup',
      description:
        'Pick up your personalized Secomm Coffee Cup from the office zone. Each cup is synced to your profile and preferences.',
    },
    {
      number: '2',
      title: 'Tap & Choose',
      description:
        'Tap your cup to the coffee machine and select your mood: Focus, Relax, or Energy Boost. The AI takes care of the rest.',
    },
    {
      number: '3',
      title: 'Enjoy Perfect Coffee',
      description:
        'Receive your perfectly brewed coffee at the ideal temperature, tailored to your mood and preferences. Every time.',
    },
  ];

  return (
    <SectionWrapper id="how-it-works" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to your perfect cup of coffee, powered by AI and
            designed for convenience.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-secomm-blue"></div>
            <div className="w-3 h-3 rounded-full bg-secomm-blue"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-secomm-blue to-secomm-blue-light"></div>
            <div className="w-3 h-3 rounded-full bg-secomm-blue-light"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-secomm-blue-light to-secomm-blue"></div>
            <div className="w-3 h-3 rounded-full bg-secomm-blue"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secomm-blue"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;

