'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ReviewsSection() {
  const reviewSectionRef = useRef(null);
  const reviewTitleRef = useRef(null);
  const reviewCardsRef = useRef([]);

  const addToReviewCardsRef = (el) => {
    if (el && !reviewCardsRef.current.includes(el)) {
      reviewCardsRef.current.push(el);
    }
  };

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

  const reviews = [
    {
      name: "Rahul Patel",
      rating: 5,
      content: "Absolutely loved the authentic Gujarati thali! The flavors took me back to my grandmother's kitchen. The service was excellent and the ambiance is very cozy.",
      date: "2 weeks ago"
    },
    {
      name: "Priya Shah",
      rating: 4,
      content: "The dhokla here is the best I've had outside Gujarat! Perfect texture and flavor. The staff is very friendly and the place is always clean.",
      date: "1 month ago"
    },
    {
      name: "Amit Kumar",
      rating: 5,
      content: "Authentic taste and generous portions. The undhiyu during winter season is a must-try! Highly recommended for traditional Gujarati food lovers.",
      date: "3 weeks ago"
    }
  ];

  useEffect(() => {
    if (reviewSectionRef.current) {
      const reviewTl = gsap.timeline({
        scrollTrigger: {
          trigger: reviewSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      reviewTl
        .fromTo(reviewTitleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }
        );
    }

    if (reviewCardsRef.current.length > 0) {
      gsap.fromTo(reviewCardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: reviewSectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="reviews" ref={reviewSectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 ref={reviewTitleRef} className="text-4xl font-bold text-orange-900 text-center mb-4">
          Customer Reviews
        </h2>
        <p className="text-lg text-brown-600 text-center mb-12">
          What our customers say about us
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} ref={addToReviewCardsRef} className="border-0 shadow-lg bg-orange-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brown-700">
                  "{review.content}"
                </CardDescription>
                <div className="flex items-center gap-2 mt-4 text-sm text-brown-600">
                  <Clock className="h-3 w-3" />
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-orange-800 text-orange-800 hover:bg-orange-50">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}