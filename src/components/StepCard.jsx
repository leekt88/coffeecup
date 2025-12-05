import { motion } from 'framer-motion';

const StepCard = ({ number, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-secomm-blue to-secomm-blue-light rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default StepCard;

