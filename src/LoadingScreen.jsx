import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DURATION_MS = 2800;
const EXIT_DURATION = 0.6;

function LoadingScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsExiting(true);
    }, DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isExiting) return;
    const t = setTimeout(() => {
      onComplete?.();
    }, EXIT_DURATION * 1000);
    return () => clearTimeout(t);
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isExiting ? (
        <motion.div
          key="loader"
          className="loader-wrap"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: EXIT_DURATION, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <motion.div
            className="loader-bg"
            exit={{
              scale: 1.05,
              opacity: 0,
              transition: { duration: EXIT_DURATION * 0.8 },
            }}
          />
          <div className="loader-content">
            <motion.h1
              className="loader-title"
              initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              TypeShii
            </motion.h1>
          </div>
          <motion.div
            className="loader-shine"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
          />
          <motion.div
            className="loader-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default LoadingScreen;
