import { motion } from "motion/react";
import Scene from "./components/Scene";
import "./App.css";

function App() {
  return (
    <main className="love-page">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <section className="flower-section">
        <motion.div
          className="flower-canvas"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Scene />
        </motion.div>

        <motion.div
          className="love-message"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1.1,
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

          <div className="heart"></div>
        </motion.div>
      </section>
    </main>
  );
}

export default App;