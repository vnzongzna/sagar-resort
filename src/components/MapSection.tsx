
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.123456789!2d76.12345!3d27.98765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe%20Sagar%20Resort!5e0!3m2!1sen!2sin!4v1234567890";
  
  const locationDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      details: ["Dhai Pedi, Ahinsa Circle, Old Jaipur Road", "Alwar, Rajasthan (India) Pin - 301001"]
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Contact",
      details: ["+91 9119115185", "+91 9119115186"]
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Reception",
      details: ["24/7 Available", "Always at your service"]
    }
  ];

  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Located in the heart of Alwar, Rajasthan, our resort offers easy accessibility 
            while maintaining a serene, peaceful environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Location Details */}
          <div className="lg:col-span-1 space-y-6">
            {locationDetails.map((detail, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{detail.title}</h4>
                      {detail.details.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-sm text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button className="luxury-button w-full" asChild>
              <a 
                href="https://maps.app.goo.gl/CcqS3Ux5Jk1q8DtK9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Google Maps
              </a>
            </Button>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="luxury-card overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sagar Resort Location"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
