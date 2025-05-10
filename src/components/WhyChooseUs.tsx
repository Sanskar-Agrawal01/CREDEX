import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="text-primary h-6 w-6" />,
      title: "Secure Transactions",
      description: "Bank-level security for all your transactions and data"
    },
    {
      icon: <Clock className="text-primary h-6 w-6" />,
      title: "Quick Process",
      description: "From valuation to payment in as little as 24 hours"
    },
    {
      icon: <Star className="text-primary h-6 w-6" />,
      title: "Best Market Rates",
      description: "Get the highest value for your software licenses"
    }
  ];

  return (
    <section id="why-us" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            The trusted platform for software license resale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 