import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show toast message instead of actual form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Pakistan"
    },
    {
      icon: "fas fa-envelope",
      title: "Email", 
      value: "ansabarfanmiana@gmail.com"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/ansabarfanmiana"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-contact-title">Get In Touch</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-contact-subtitle">Ready to drive data-driven insights for your organization</p>
        </div>
        
        
      </div>
    </section>
  );
}
