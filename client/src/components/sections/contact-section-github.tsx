import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);
      
      // For GitHub Pages version, redirect to email instead of API call
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
      window.open(`mailto:roshanlanghi28@gmail.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Message prepared",
        description: "Your email client has been opened with your message. Please send the email to complete.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to prepare email",
        description: "Please contact me directly via email at roshanlanghi28@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-wrapper">
      <div className="container-padding">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-heading-line"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me through the contact form or social media.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact info */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark-400 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Email</h4>
                    <a 
                      href="mailto:roshanlanghi28@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      roshanlanghi28@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Kopargaon, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Follow me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/roshanlanghi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-200 dark:bg-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/roshan-langhi-88b502304/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-200 dark:bg-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-400 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send me a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-500 text-gray-800 dark:text-gray-200" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-500 text-gray-800 dark:text-gray-200" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            className="border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-500 text-gray-800 dark:text-gray-200" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-500 text-gray-800 dark:text-gray-200" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary" 
                    disabled={isSubmitting}
                  >
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}