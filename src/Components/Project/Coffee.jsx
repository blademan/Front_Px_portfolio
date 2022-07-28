import { motion } from 'framer-motion';

export default function Coffee() {
  const line1 = 'I turn coffee .....';
  const line2 = '...3rr03 .@!!..  Ouch!!!!';
  const line3 = '...into Code :)';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 5, staggerChildren: 0.2 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.h3
      className="text-white text-2xl pt-12 pb-1"
      variants={sentence}
      initial="hidden"
      whileInView="visible">
      {line1.split('').map((char, index) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {line2.split('').map((char, index) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {line3.split('').map((char, index) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.h3>
  );
}
