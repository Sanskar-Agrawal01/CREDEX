import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SoftSell made selling our unused licenses incredibly easy. The process was smooth and we received payment within hours.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions"
    },
    {
      quote: "The best platform for software license resale. Their valuation was fair and the customer service was exceptional.",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Global Innovations"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-foreground/70 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-foreground/80">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 