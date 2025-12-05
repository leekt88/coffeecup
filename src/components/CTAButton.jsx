import { motion } from 'framer-motion';

const CTAButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  size = 'lg',
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300';
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-secomm-blue to-secomm-blue-light text-white hover:shadow-2xl hover:shadow-secomm-blue/50',
    secondary:
      'bg-white text-secomm-blue border-2 border-secomm-blue hover:bg-secomm-blue hover:text-white',
    outline:
      'bg-transparent text-white border-2 border-white hover:bg-white hover:text-secomm-blue',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;

