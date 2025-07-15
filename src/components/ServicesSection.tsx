import { MapPin, Clock, Users, Shield, Car, Utensils, Dumbbell, Waves } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import luxuryRoom from '@/assets/luxury-room.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "The Core",
      description: "Premium accommodation with mountain views and luxury amenities",
      image: luxuryRoom,
      features: ["Mountain View", "King Size Bed", "Premium Amenities", "24/7 Service"]
    },
    {
      title: "Dining Experience",
      description: "Multi-cuisine restaurants offering local and international flavors",
      image: luxuryRoom,
      features: ["Fine Dining", "Local Cuisine", "Room Service", "Bar & Lounge"]
    },
    {
      title: "Adventure Activities",
      description: "Exciting outdoor activities and guided tours in the mountains",
      image: luxuryRoom,
      features: ["Hiking Trails", "Mountain Climbing", "Nature Walks", "Photography Tours"]
    }
  ];

  const coreServices = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Prime Location",
      description: "Strategically located in the heart of the mountains"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Service",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Personalized Care",
      description: "Dedicated staff to ensure exceptional service"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety & Security",
      description: "Complete security and safety measures"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Services We Provide</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to make your stay 
            comfortable, memorable, and truly exceptional.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <Card key={index} className="luxury-card group hover:shadow-luxury transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="luxury-card group hover:shadow-luxury transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-overlay/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-luxury-cream mb-2">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="luxury-button w-full mt-6">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;