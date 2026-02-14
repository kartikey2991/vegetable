import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              FreshExpress
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-foreground text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
