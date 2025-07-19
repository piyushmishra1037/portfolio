"use client";

import { useRef, useState } from "react";
import type React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github as GitHub,
  Mail,
  FileText,
  Linkedin as LinkedinIcon,
  Phone,
  MapPin,
  Send,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "service_your_service_id",  // Replace with your EmailJS Service ID
        "template_your_template_id", // Replace with your EmailJS Template ID
        formRef.current,
        "your_public_key"           // Replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "piyushmishra1085@gmail.com",
      link: "mailto:piyushmishra1085@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9076530457",
      link: "tel:+919076530457",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amethi, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      href: "https://linkedin.com/in/your-profile-url",
      color: "hover:text-blue-600",
    },
    {
      icon: GitHub,
      name: "GitHub",
      href: "https://github.com/your-github-url",
      color: "hover:text-gray-800",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:piyushmishra1085@gmail.com",
      color: "hover:text-red-600",
    },
  ];

  return ( 
    <div id="contact" className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love
            to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-foreground mb-4">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        size="icon"
                        className={`w-12 h-12 rounded-full transition-all duration-300 ${social.color}`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 rounded-full hover:text-green-600 transition-all duration-300"
                      onClick={handleDownloadResume}
                      aria-label="Download Resume"
                    >
                      <FileText className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="user_name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="user_name"
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="user_email"
                        type="email"
                        name="user_email"
                        placeholder="your.email@example.com"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      className="w-full resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-2">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-muted-foreground">
                Whether you&apos;re looking for a freelance developer, have a job
                opportunity, or just want to connect, I&apos;m always open to
                interesting conversations and collaborations.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-4 left-4">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
