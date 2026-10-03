import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useProgress } from "@react-three/drei";
import Scene from "./components/Scene";
import "./App.css";

function LoadingScreen({
  onLoaded,
}: {
  onLoaded: () => void;
}) {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (!active && progress >= 100) {
      const timer = setTimeout(() => {
        onLoaded();
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [active, progress, onLoaded]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loading-content">
        <div className="loading-symbol">♡</div>

        <div className="loading-text">
          {Math.min(Math.round(progress), 100)}%
        </div>

        <div className="loading-line">
          <motion.div
            className="loading-line-progress"
            animate={{
              width: `${Math.min(progress, 100)}%`,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          />
        </div>

      </div>
    </motion.div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="love-page">
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onLoaded={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      <motion.div
        className="website-content"
        initial={{ opacity: 0 }}
        animate={{
          opacity: loaded ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />

        <section className="flower-section">
          <motion.div
            className="flower-canvas"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.92,
                  }
            }
            transition={{
              duration: 1.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </motion.div>

          <motion.div
            className="love-message"
            initial={{ opacity: 0, y: 25 }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
          <h1>
          این گل تقدیم به خوشگلترین دختر جهان (سلین خانوم)
          </h1>
          <br />
          <h1>
           ببخشید اگه ناراحت شدی
          </h1>

          <br></br>

          </motion.div>
        </section>
      </motion.div>
    </main>
  );
}

export default App;