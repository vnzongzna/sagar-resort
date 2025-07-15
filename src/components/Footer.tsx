import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Facilities", href: "#facilities" },
      { name: "Gallery", href: "#gallery" }
    ],
    "Services": [
      { name: "Accommodation", href: "#services" },
      { name: "Dining", href: "#services" },
      { name: "Wedding", href: "#wedding" },
      { name: "Spa & Wellness", href: "#services" }
    ],
    "Policies": [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Cancellation Policy", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-luxury-dark text-luxury-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sagar Resort</h3>
                <p className="text-xs text-luxury-cream/70">Luxury Mountain Experience</p>
              </div>
            </div>
            
            <p className="text-luxury-cream/80 leading-relaxed">
              Experience unparalleled luxury in the heart of the mountains. Where every moment 
              becomes a cherished memory.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-luxury-cream/80">
                  Sagar Resort, Mountain Valley, Himachal Pradesh - 175001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-luxury-cream/80">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-luxury-cream/80">info@sagarresort.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-luxury-cream/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-luxury-cream/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-luxury-cream/70">
              © 2024 Sagar Resort. All rights reserved. Made with ❤️ for luxury experiences.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-luxury-cream/70">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-luxury-cream/70 hover:text-primary transition-colors p-2 hover:bg-luxury-cream/10 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;