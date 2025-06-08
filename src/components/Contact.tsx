
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Instagram, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:rishirajbal@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in AI/ML, quantum computing, and blockchain technology. 
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-blue-500/20 rounded-full">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">rishirajbal@example.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/5 backdrop-blur-sm border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Social Media</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/Rishirajbal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-purple-600/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Github size={24} className="text-purple-400 group-hover:text-purple-300" />
                  <span className="text-white group-hover:text-purple-300">GitHub</span>
                </a>
                
                <a 
                  href="https://in.linkedin.com/in/rishiraj-bal-3a3778315" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Linkedin size={24} className="text-blue-400 group-hover:text-blue-300" />
                  <span className="text-white group-hover:text-blue-300">LinkedIn</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/the___rishiraj?utm_source=qr&igsh=NW4xOTBvZmx5YXJq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Instagram size={24} className="text-pink-400 group-hover:text-pink-300" />
                  <span className="text-white group-hover:text-pink-300">Instagram</span>
                </a>
                
                <a 
                  href="https://drive.google.com/file/d/1x_ZSYQ3GtoukjiefktiORZYK_GG8TD_t/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-green-600/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Download size={24} className="text-green-400 group-hover:text-green-300" />
                  <span className="text-white group-hover:text-green-300">Resume</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            Built with ❤️ by Rishiraj Bal ⚙️
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Rishiraj Bal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
