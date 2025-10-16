import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, Phone, MapPin, Star, Clock, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{rating}.0</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-brown-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-brown-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center">
                <Image 
                  src="/Images/logo.png" 
                  alt="Sorathiyo Thaal Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full" 
                />
              </a>
              <h1 className="text-2xl font-normal text-orange-900">સોરઠીયો થાળ</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-brown-700 hover:text-orange-800 font-medium">Menu</a>
              <a href="#about" className="text-brown-700 hover:text-orange-800 font-medium">About</a>
              <a href="#reviews" className="text-brown-700 hover:text-orange-800 font-medium">Reviews</a>
              <a href="#contact" className="text-brown-700 hover:text-orange-800 font-medium">Contact</a>
            </nav>
            <Button className="bg-orange-800 hover:bg-orange-900 text-white hidden">Reserve</Button>
          </div>
        </div>
      </header>

      {/* Animated Sections */}
      <HeroSection />
      <GallerySection />
      
      {/* Static Server-rendered Sections */}
      <section id="info" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-12">Restaurant Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-orange-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-orange-800" />
                  <CardTitle className="text-xl text-orange-900">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brown-700">
                  Gangotri Icon, Vasna Bhayli Main Rd,<br />
                  opp. Gokul Party Plot,<br />
                  Saiyed Vasna,<br />
                  Vadodara, Gujarat 390007
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-orange-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-orange-800" />
                  <CardTitle className="text-xl text-orange-900">Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brown-700">
                  <div className="space-y-2">
                    <a href="tel:+919510091909" className="font-semibold text-orange-800 hover:text-orange-900">
                      +91 95100 91909
                    </a>
                    <p className="text-sm text-brown-600">Call to reserve or inquire</p>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-orange-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-orange-800" />
                  <CardTitle className="text-xl text-orange-900">Rating & Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brown-700">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <StarRating rating={4} />
                    </div>
                    <p className="text-sm">
                      Authentic Gujarati Thali Restaurant<br />
                      Vegetarian · Family Friendly<br />
                      Dine-in · Takeaway
                    </p>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
 
      <AboutSection />
      <ReviewsSection />

      {/* Location Section */}
      <section id="location" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Visit Us</h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Find us at Gangotri Icon, Vasna Bhayli Main Road, opposite Gokul Party Plot
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-orange-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-orange-800" />
                    <CardTitle className="text-xl text-orange-900">Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brown-700 space-y-2">
                    <p className="font-semibold">Gangotri Icon</p>
                    <p>Vasna Bhayli Main Rd</p>
                    <p>opp. Gokul Party Plot</p>
                    <p>Saiyed Vasna</p>
                    <p><strong>Vadodara, Gujarat 390007</strong></p>
                  </CardDescription>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-orange-800 text-orange-800 hover:bg-orange-50 w-full"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </Button>
                <Button className="bg-orange-800 hover:bg-orange-900 text-white w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.416776607582!2d73.1392558!3d22.3022299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9d99904d661%3A0xef94602866abcc14!2sSorathiyo%20Thal!5e0!3m2!1sen!2sin!4v1697490000000!5m2!1sen!2sin"
                width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-orange-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <a href="/" className="flex items-center">
              <Image 
                src="/Images/logo.png" 
                alt="Sorathiyo Thaal Logo" 
                width={40} 
                height={40} 
                className="rounded-full" 
              />
              <h3 className="text-xl font-bold ml-2">સોરઠીયો થાળ</h3>
            </a>
          </div>
          <p className="text-brown-300 mb-8">Taste the soul of Gujarat.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+919510091909" className="flex items-center gap-2 hover:underline text-brown-300">
              <Phone className="h-4 w-4" />
              +91 95100 91909
            </a>
            <a href="https://maps.app.goo.gl/example" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline text-brown-300"
            >
              <MapPin className="h-4 w-4" />
              Location
            </a>
            <a href="#menu" className="flex items-center gap-2 hover:underline text-brown-300">
              <Menu className="h-4 w-4" />
              Menu
            </a>
            <a href="#about" className="flex items-center gap-2 hover:underline text-brown-300">
              About
            </a>
          </div>
          <div className="text-brown-400 text-sm">
            &copy; 2025 સોરઠીયો થાળ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}