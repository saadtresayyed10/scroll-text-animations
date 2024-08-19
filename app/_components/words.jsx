"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Word = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <main>
      <div className="h-[100vh]" />
      <p
        className="font-bold tracking-wider flex items-center justify-center flex-wrap text-4xl text-center p-10"
        ref={element}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Words key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Words>
          );
        })}
      </p>
      <div className="h-[100vh]" />
    </main>
  );
};

const Words = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-[12px] mt-[12px] relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Word;
