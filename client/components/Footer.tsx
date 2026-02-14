import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Careers", "Blog", "Press"],
    Product: ["Features", "Pricing", "Security", "Updates"],
    Community: ["Help Center", "Community", "Forum", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-lg">FreshExpress</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Fresh produce delivered 24/7 with unbeatable prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} FreshExpress. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
