import { Wifi, Car, Utensils, Dumbbell, Waves, TreePine, Coffee, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import poolArea from '@/assets/pool-area.jpg';

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
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment"
    },
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: "Swimming Pool",
      description: "Heated outdoor pool with mountain views"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Featured Facility */}
        <div className="relative rounded-2xl overflow-hidden shadow-luxury">
          <img 
            src={poolArea} 
            alt="Swimming Pool Area" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
            <div className="text-center">
              <h3 className="hero-text text-3xl md:text-4xl font-bold mb-4">
                Luxury Swimming Pool
              </h3>
              <p className="hero-text text-lg mb-6 max-w-2xl mx-auto">
                Relax and unwind in our heated outdoor pool surrounded by breathtaking mountain views
              </p>
              <div className="flex justify-center space-x-4">
                <div className="luxury-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">25m</div>
                  <div className="text-sm text-muted-foreground">Pool Length</div>
                </div>
                <div className="luxury-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">Heated</div>
                  <div className="text-sm text-muted-foreground">Year Round</div>
                </div>
                <div className="luxury-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;