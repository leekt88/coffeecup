import { motion } from 'framer-motion';
import { useState } from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [imageError, setImageError] = useState(false);
  
  const getFallbackIcon = () => {
    if (title.includes('Thermo') || title.includes('Temperature')) return '🌡️';
    if (title.includes('NFC') || title.includes('Tap')) return '📱';
    if (title.includes('Mood') || title.includes('Blend')) return '🧠';
    return '☕';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-secomm-blue to-secomm-blue-light rounded-xl flex items-center justify-center mb-6">
        {!imageError && icon ? (
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-3xl">{getFallbackIcon()}</span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

