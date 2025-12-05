import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const WhyAmazing = () => {
  const highlights = [
    {
      icon: '🌡️',
      title: 'Smart Temperature Control',
      description:
        'AI-powered temperature monitoring ensures your coffee stays at the perfect drinking temperature.',
    },
    {
      icon: '⚡',
      title: 'Instant Personalization',
      description:
        'One tap and your preferences are loaded. No more adjusting settings every time you brew.',
    },
    {
      icon: '🧠',
      title: 'Mood-Based Recommendations',
      description:
        'Let AI understand your needs and suggest the perfect coffee blend for your current state.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Choice',
      description:
        "Reduce waste and contribute to Secomm&apos;s environmental goals with every use.",
    },
  ];

  return (
    <SectionWrapper id="why-amazing" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why It's Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes the Secomm Coffee Cup a game-changer for your
            daily coffee routine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{highlight.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-secomm-blue to-secomm-blue-light rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Join the Secomm Coffee Revolution
              </p>
              <p className="text-gray-600 text-lg">
                Experience the future of workplace coffee culture
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhyAmazing;

