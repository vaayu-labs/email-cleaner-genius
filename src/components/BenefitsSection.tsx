
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  const benefits = [
    { 
      icon: "📈", 
      title: "Boost Open Rates", 
      description: "Land in real inboxes, not spam folders" 
    },
    { 
      icon: "💰", 
      title: "Save $$$", 
      description: "Stop paying for bad emails" 
    },
    { 
      icon: "⚡", 
      title: "Instant Fix", 
      description: "No waiting, no manual work" 
    }
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto my-8">
      <div className="text-center mb-12">
        <span className="feature-chip">💡 Benefits</span>
        <h2 className="section-title text-2xl md:text-3xl font-semibold mt-4 gradient-heading">Why This?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="feature-card flex flex-col items-center text-center card-hover"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-5">
              <span className="text-2xl">{benefit.icon}</span>
            </div>
            <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
