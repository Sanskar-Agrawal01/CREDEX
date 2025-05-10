import React from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="text-primary h-8 w-8" />,
      title: "Upload License",
      description: "Simply upload your software license details through our secure platform"
    },
    {
      icon: <DollarSign className="text-primary h-8 w-8" />,
      title: "Get Valuation",
      description: "Receive an instant valuation for your license within minutes"
    },
    {
      icon: <CheckCircle className="text-primary h-8 w-8" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment within 24 hours"
    }
  ];

  return (
    <section id="how-it-works" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Three simple steps to turn your licenses into cash
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/50 transition-all duration-300 text-center glow drop-shadow-lg"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 