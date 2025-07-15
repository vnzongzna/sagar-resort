import { CheckCircle, Star, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import luxuryRoom from '@/assets/luxury-room.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "5-Star Luxury",
      description: "Experience world-class amenities and service"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Personalized Service",
      description: "Dedicated staff to cater to your every need"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Concierge",
      description: "Round-the-clock assistance for all your requests"
    }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title">Feel Luxury, Think Sagar Resort</h2>
              <p className="section-subtitle">
                Nestled in the pristine mountains, Sagar Resort offers an unparalleled luxury experience 
                where every detail is crafted to perfection. From our elegantly appointed rooms to our 
                world-class facilities, we create memories that last a lifetime.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Check Into Another World</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our resort combines traditional architecture with modern luxury, offering breathtaking 
                views of snow-capped peaks and serene valleys. Every room is designed to provide comfort 
                and tranquility, making your stay truly unforgettable.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="luxury-card border-none p-4">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-3">
                        {feature.icon}
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button className="luxury-button">Discover More</Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={luxuryRoom} 
                alt="Luxury Resort Room" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-overlay/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 luxury-card p-6 max-w-xs">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Rooms</h4>
                    <p className="text-sm text-muted-foreground">Mountain View</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience luxury in our meticulously designed rooms with panoramic mountain views.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;