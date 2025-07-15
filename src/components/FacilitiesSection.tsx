
import { Wifi, Car, Utensils, TreePine, Coffee, Shield, Gamepad2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the property"
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Free Parking",
      description: "Complimentary valet parking service"
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Fine Dining",
      description: "Multi-cuisine restaurants with mountain views"
    },
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      title: "Nature Trails",
      description: "Guided hiking and nature walks"
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Spa & Wellness",
      description: "Rejuvenating spa treatments"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "24/7 Security",
      description: "Round-the-clock security services"
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "Recreation",
      description: "Indoor and outdoor recreational activities"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Event Spaces",
      description: "Perfect venues for celebrations"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Best Quality Facilities & Activities</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover our extensive range of premium facilities designed to enhance your stay 
            and create unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="luxury-card group hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {facility.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
