import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["Dhai Pedi, Ahinsa Circle, Old Jaipur Road", "Alwar, Rajasthan (India) Pin - 301001"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: ["+91 9119115185", "+91 9119115186"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresses",
      details: ["thesagarresort@gmail.com", "reservations@sagarresort.com"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      details: ["24/7 Reception", "Restaurant: 6:00 AM - 11:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We'd love to hear from you. Contact us for reservations, inquiries, or to plan your perfect getaway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="luxury-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="luxury-card overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Sagar Resort Location</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="luxury-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 234 567 8900" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..." 
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button className="luxury-button w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;