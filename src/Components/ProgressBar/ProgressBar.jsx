import { useScroll, motion, useTransform } from 'framer-motion';
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0px', '100%']);
  return <motion.div className=" z-[9999] h-1 fixed top-0  bg-firstColor" style={{ width }} />;
}
