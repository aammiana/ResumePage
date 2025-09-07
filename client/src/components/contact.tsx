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
        
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-6" data-testid="text-contact-info-title">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4" data-testid={`contact-info-${index}`}>
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <p className="font-medium" data-testid={`contact-title-${index}`}>{info.title}</p>
                      <p className="text-muted-foreground" data-testid={`contact-value-${index}`}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
