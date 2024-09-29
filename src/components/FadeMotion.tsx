import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FadeMotion = ({
  children,
  fromY = 0,
  fromX = 0,
  delay = 0.5,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  fromY?: number;
  fromX?: number;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: fromY, x: fromX }}
      whileInView={{ opacity: 1, y: 0.0, x: 0.0 }}
      viewport={{ once: true }}
      transition={{
        delay: delay,
        duration: duration,
        ease: 'easeInOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default FadeMotion;