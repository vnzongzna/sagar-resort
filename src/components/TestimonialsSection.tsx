import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The most beautiful resort I've ever stayed at. The mountain views are breathtaking, and the service is exceptional. Every detail was perfect, from the luxurious rooms to the incredible dining experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b512c74c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "San Francisco, USA",
      rating: 5,
      text: "Sagar Resort exceeded all our expectations. The wedding ceremony was magical, and the staff went above and beyond to make our special day perfect. The attention to detail was remarkable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "An absolutely incredible experience! The spa treatments were divine, the food was exceptional, and the natural beauty surrounding the resort is simply stunning. I can't wait to return.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Kumar",
      location: "Mumbai, India",
      rating: 5,
      text: "Perfect for a romantic getaway! The luxury accommodations, personalized service, and stunning mountain views created an unforgettable experience. Highly recommended for couples.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Hear what our guests have to say about their unforgettable experiences at Sagar Resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="luxury-card hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <Card className="luxury-card max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl font-bold text-primary">4.9</div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 200+ reviews</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Consistently rated as one of the best luxury resorts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;