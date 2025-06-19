import { motion } from "framer-motion"

export default function Transitions({
  children,
  delay,
  
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ eas: "easeInOut", duration: 0.5 + (delay / 10) }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}