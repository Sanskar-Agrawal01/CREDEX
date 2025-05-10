import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
// @ts-expect-error - No type definitions available for BlurText component
import BlurText from "../assets/BlurText";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-40 md:pt-56 pb-20 sm:pb-32 relative">
      <div className="absolute top-20 sm:top-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 glow-text">
            Turn Your Software Licenses Into Cash
          </h1>
          
          <BlurText
            text="Maximize ROI by selling your unused software licenses, turn assets into working capital with ease."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-4 sm:px-0"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <button className="button-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>Get a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="button-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
              <MessageSquare className="h-5 w-5" />
              <span>Contact Sales</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
