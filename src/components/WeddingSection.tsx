import { Heart, Camera, Music, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';

const WeddingSection = () => {
  const weddingServices = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Ceremony Planning",
      description: "Complete wedding planning and coordination"
    },
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Photography",
      description: "Professional wedding photography and videography"
    },
    {
      icon: <Music className="h-6 w-6 text-primary" />,
      title: "Entertainment",
      description: "Live music and entertainment arrangements"
    },
    {
      icon: <Utensils className="h-6 w-6 text-primary" />,
      title: "Catering",
      description: "Exquisite multi-cuisine wedding menus"
    }
  ];

  return (
    <section id="wedding" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={weddingCeremony} 
                alt="Wedding Ceremony" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-overlay/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-luxury text-primary-foreground px-6 py-3 rounded-full shadow-luxury">
              <span className="font-semibold">Dream Weddings</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title">Wedding</h2>
              <p className="section-subtitle">
                Create magical memories with our comprehensive wedding services. From intimate ceremonies 
                to grand celebrations, we ensure your special day is perfect in every detail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {weddingServices.map((service, index) => (
                <Card key={index} className="luxury-card border-none p-4 hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-3">Wedding Packages</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Intimate Wedding (50 guests)</span>
                  <span className="font-medium">Starting from $15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Grand Wedding (200 guests)</span>
                  <span className="font-medium">Starting from $35,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Destination Wedding</span>
                  <span className="font-medium">Custom Pricing</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="luxury-button">View Packages</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingSection;