import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const ContactForm = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    details: ["+27 (0) 12 345 6789", "+27 (0) 87 654 3210"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@mokotla.com", "projects@mokotla.com"]
  }, {
    icon: MapPin,
    title: "Location",
    details: ["123 Construction Avenue", "Johannesburg, South Africa, 2000"]
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday-Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
  }];
  return <section id="contact" className="py-20 bg-mokotla-lightgray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Get in touch with our team to discuss your project requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-mokotla-blue mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mokotla-gray mb-1">
                    Full Name *
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mokotla-yellow" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mokotla-gray mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mokotla-yellow" placeholder="Your email" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-mokotla-gray mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mokotla-yellow" placeholder="Your phone" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-mokotla-gray mb-1">
                    Subject *
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mokotla-yellow" placeholder="Message subject" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mokotla-gray mb-1">
                  Your Message *
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mokotla-yellow" placeholder="Tell us about your project..." required></textarea>
              </div>
              <Button type="submit" className="w-full bg-mokotla-blue hover:bg-mokotla-yellow text-white hover:text-mokotla-blue font-bold py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-mokotla-blue p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-mokotla-yellow/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-mokotla-yellow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => <p key={idx} className="text-gray-300">
                          {detail}
                        </p>)}
                    </div>
                  </div>)}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;