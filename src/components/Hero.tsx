import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
// @ts-expect-error - No type definitions available for BlurText component
import BlurText from "../assets/BlurText";

const Hero: React.FC = () => {
  return (
    <section className="pt-56 pb-32 relative">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/*  glow-text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text ">
            Turn Your Software Licenses Into Cash
          </h1>
          {/* <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"> */}
          <BlurText
            text="Maximize ROI by selling your unused software licenses, turn assets into working capital with ease."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mb-8"
          />
          {/* </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-xl transition-colors duration-200">
              <span>Get a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="button-secondary flex items-center justify-center gap-2">
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
