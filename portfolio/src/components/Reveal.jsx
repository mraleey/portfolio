import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../motion.js";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
};

export default function Reveal({ as = "div", className, children, ...rest }) {
  const reduce = useReducedMotion();
  const Comp = motionTags[as] ?? motion.div;

  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      {...rest}
    >
      {children}
    </Comp>
  );
}
