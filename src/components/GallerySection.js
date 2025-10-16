'use client';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GallerySection() {
  const galleryRef = useRef(null);
  const galleryTitleRef = useRef(null);
  const carouselRef = useRef(null);

  const restaurantImages = [
    "https://lh3.googleusercontent.com/p/AF1QipMQyba1wVfMYwgJWVZdU_OIAqA0wjXUgyA0n5Ou=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noQqsrz40DOobmyvpYFGbz4VZjurVdTwfCN-ao8Zdn7qXv3317htD2dOwynyBBOuzmoXLoCm0N-YSkV8ZMnNTsK2b5piFHLHWMlA9PwrKIkNsbzl5aVyrKkzpYPl2BNlAhJ1KUP_Q=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNWsZHUB3YBplhrVsFmr3_b-sfgz4MaIUM2Oi8b=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np8AY-lwhPVlrjtR-JvrepbdyvaLN-OS2bHAk5qKXRHADDsvAti0Unm08oIQYferwV6ARnbDEcgLVPsLhIIxfJd9KszbjtbQCfjD9SMjbC8Db7ViB1d0YXwCUCzi1HXcSRmdNxVkg=s1360-w1360-h1020-rw"
  ];

  useEffect(() => {
    if (galleryRef.current) {
      const galleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      galleryTl
        .fromTo(galleryTitleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }
        );
    }

    if (carouselRef.current) {
      gsap.fromTo(".carousel-image-container",
        {
          scale: 0.8,
          opacity: 0,
          y: 30
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: galleryRef.current,
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
    <section ref={galleryRef} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 ref={galleryTitleRef} className="text-3xl font-bold text-orange-900 text-center mb-12">
          Gallery
        </h2>
        <Carousel ref={carouselRef} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {restaurantImages.map((imageUrl, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="carousel-image-container relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={imageUrl}
                      alt={`Restaurant image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200" />
        </Carousel>
      </div>
    </section>
  );
}