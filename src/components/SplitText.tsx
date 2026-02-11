import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const SplitText = ({ children, className = "", delay = 0 }: SplitTextProps) => {
  const words = children.split(" ");

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em] overflow-hidden">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: delay + wi * 0.08 + ci * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
