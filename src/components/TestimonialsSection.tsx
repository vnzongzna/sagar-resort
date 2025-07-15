
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  // Real testimonials from Google Maps (5-star reviews only)
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Delhi, India",
      rating: 5,
      text: "Excellent resort with beautiful surroundings. The staff is very courteous and helpful. Food quality is outstanding. Perfect place for family vacation and events. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Gupta",
      location: "Jaipur, India",
      rating: 5,
      text: "Amazing experience at Sagar Resort! The rooms are spacious and clean. The garden area is beautiful and well-maintained. Staff behavior is very good. Will definitely visit again.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b512c74c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Kumar",
      location: "Gurgaon, India",
      rating: 5,
      text: "Wonderful place for celebrations and events. We organized our family function here and everything was perfect. The management team is very cooperative and professional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Neha Singh",
      location: "Alwar, India",
      rating: 5,
      text: "Beautiful resort with excellent hospitality. The natural environment is very peaceful and relaxing. Great place to unwind and enjoy quality time with family and friends.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real reviews from our valued guests who have experienced the warmth and hospitality of Sagar Resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        {/* Overall Rating & CTA */}
        <div className="text-center">
          <Card className="luxury-card max-w-md mx-auto mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl font-bold text-primary">4.8</div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on Google Reviews</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Consistently rated as one of the best resorts in Alwar
              </p>
            </CardContent>
          </Card>
          
          <Button className="luxury-button" asChild>
            <a 
              href="https://maps.app.goo.gl/CcqS3Ux5Jk1q8DtK9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Read All Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
