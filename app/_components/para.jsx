"use client";

import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <main>
      <div className="h-[100vh]" />
      <motion.p
        className="font-bold tracking-wider text-4xl text-center p-10"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
      <div className="h-[100vh]" />
    </main>
  );
};

export default Paragraph;
