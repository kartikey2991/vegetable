import { useState } from "react";
import { ChevronDown, Check, Apple, Leaf, Truck, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Hero Section
  const HeroSection = () => (
    <section
      className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Ffa38015c3c21441380745dda6d835078%2F8bedeee2f40544fcb6afa35730c863d9)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gradient Fade Overlay on Left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 30%, transparent 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Fresh Produce Delivered{" "}
              <span className="text-primary">24/7</span> Unbeatable Prices
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(53, 18, 18, 1)" }}>
              Get farm-fresh vegetables and fruits delivered to your doorstep in 3 days.
              Quality guaranteed, prices you'll love.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg mb-8">
              Get Started Today
            </button>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-foreground">2000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Order Anytime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Fresh Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Why Choose FreshExpress
  const FeaturesSection = () => (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FreshExpress?
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring farm-fresh quality to your table with unmatched speed and prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "100% Fresh",
              description: "Handpicked directly from farms and delivered within 3 days for maximum freshness.",
            },
            {
              icon: Truck,
              title: "24/7 Delivery",
              description: "Order anytime and get deliveries scheduled at your convenience, day or night.",
            },
            {
              icon: Clock,
              title: "Best Prices",
              description: "Save up to 50% compared to traditional retailers with our direct-to-consumer model.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Shop by Category
  const CategoriesSection = () => (
    <section id="shop" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Explore our wide range of fresh produce
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors hidden sm:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Fresh Vegetables", color: "from-green-200 to-green-100" },
            { name: "Organic Fruits", color: "from-orange-200 to-orange-100" },
            { name: "Fresh Salads", color: "from-lime-200 to-lime-100" },
            { name: "Exotic Produce", color: "from-yellow-200 to-yellow-100" },
          ].map((category, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 h-64 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow group`}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Apple className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Fresh in 3 Steps
  const TimelineSection = () => (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fresh In 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            How we get farm-fresh produce to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Browse & Select",
              description: "Explore our collection of fresh produce and add your favorites to cart.",
            },
            {
              step: "2",
              title: "We Pick & Pack",
              description: "Our team carefully selects and packs your order with care.",
            },
            {
              step: "3",
              title: "Delivered Fresh",
              description: "Get your fresh produce delivered within 3 days guaranteed.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </div>
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Comparison
  const PricingSection = () => (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See How Much You Save
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare our prices with traditional retailers
          </p>
        </div>

        <div className="bg-secondary rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">Product</th>
                  <th className="px-6 py-4 text-center font-semibold">Traditional</th>
                  <th className="px-6 py-4 text-center font-semibold">FreshExpress</th>
                  <th className="px-6 py-4 text-center font-semibold">You Save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { product: "Tomatoes (1kg)", traditional: "$5.99", fresh: "$2.99", save: "50%" },
                  { product: "Lettuce (2pcs)", traditional: "$4.49", fresh: "$1.99", save: "56%" },
                  { product: "Carrots (1kg)", traditional: "$3.99", fresh: "$1.49", save: "63%" },
                  { product: "Spinach (500g)", traditional: "$6.99", fresh: "$2.99", save: "57%" },
                  { product: "Broccoli (500g)", traditional: "$4.99", fresh: "$1.99", save: "60%" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-secondary"}`}
                  >
                    <td className="px-6 py-4 text-foreground font-medium">{item.product}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {item.traditional}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">
                      {item.fresh}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">
                      {item.save}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
          <p className="text-lg text-foreground">
            Average savings per order: <span className="font-bold text-primary">45%</span>
          </p>
        </div>
      </div>
    </section>
  );

  // Testimonials
  const TestimonialsSection = () => (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers say about FreshExpress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Busy Professional",
              content:
                "FreshExpress has been a game-changer for me. Fresh produce delivered to my door and at a fraction of the price!",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Health Enthusiast",
              content:
                "The quality is amazing and the prices are unbeatable. I've been a customer for 6 months now.",
              rating: 5,
            },
            {
              name: "Emily Rodriguez",
              role: "Family of 4",
              content:
                "Love the convenience and the savings! Our weekly grocery bill has been cut in half.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // App Promotion
  const AppSection = () => (
    <section className="py-16 md:py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Order Freshness on the Go
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Download our mobile app for exclusive deals, easy ordering, and 
              instant notifications when your fresh produce is on its way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Download on iOS
              </button>
              <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
                Get on Android
              </button>
            </div>
          </div>

          <div className="h-96 bg-white/10 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <Truck className="w-24 h-24 text-primary/40 mx-auto mb-4" />
              <p className="text-white/60">Mobile App Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Contact Form Section
  const ContactSection = () => (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: "📧",
                  title: "Email Us",
                  description: "Send us your questions",
                  link: "support@freshexpress.com",
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  description: "Available 24/7",
                  link: "+1 (555) 123-4567",
                },
                {
                  icon: "📍",
                  title: "Visit Us",
                  description: "Find our office",
                  link: "123 Fresh Street, Garden City, GC 12345",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-1">{item.description}</p>
                  <p className="text-primary font-medium">{item.link}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-foreground font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  rows={4}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section id="faqs" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about FreshExpress
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "How fresh is the produce?",
              answer:
                "All our produce is handpicked from farms and delivered within 3 days. We guarantee 100% freshness or your money back.",
            },
            {
              question: "What areas do you deliver to?",
              answer:
                "We currently deliver to metropolitan areas. Check your zip code on our website to see if we service your location.",
            },
            {
              question: "Can I customize my order?",
              answer:
                "Yes! You can select specific items, quantities, and delivery dates. We also offer subscription plans for regular deliveries.",
            },
            {
              question: "What's your return policy?",
              answer:
                "If you're not satisfied with any produce, contact us within 24 hours of delivery for a full refund or replacement.",
            },
            {
              question: "Do you offer organic produce?",
              answer:
                "Yes! We have a dedicated organic section with certified organic vegetables and fruits.",
            },
            {
              question: "How do I track my order?",
              answer:
                "You'll receive real-time updates via email and SMS. You can also track your order in the app or website.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-foreground hover:bg-secondary/50 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openFAQ === idx ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === idx && (
                <div className="px-6 py-4 bg-secondary/30 border-t border-border text-muted-foreground">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <TimelineSection />
        <PricingSection />
        <TestimonialsSection />
        <AppSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
