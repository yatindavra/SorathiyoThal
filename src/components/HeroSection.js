'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const heroTitleWordsRef = useRef([]);
  const heroSubtitleRef = useRef(null);

  const addToWordRefs = (el) => {
    if (el && !heroTitleWordsRef.current.includes(el)) {
      heroTitleWordsRef.current.push(el);
    }
  };

  const splitGujaratiText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span
        key={index}
        ref={addToWordRefs}
        className="inline-block mr-2"
        style={{ opacity: 0 }}
      >
        {word}
      </span>
    ));
  };

  useEffect(() => {
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(heroTitleWordsRef.current,
        {
          y: 80,
          opacity: 0,
          rotationY: 45
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      )
      .fromTo(heroSubtitleRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.5"
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-cover bg-center h-96 md:h-screen flex items-center" 
      style={{ backgroundImage: "url('/Images/HeroBg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-800/60 to-transparent" />
      <div className="flex items-center justify-start max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-start text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {splitGujaratiText("સોરઠીયો થાળ")}
          </h1>
          <p ref={heroSubtitleRef} className="text-lg md:text-xl mb-8">
            Authentic Gujarati Flavors from the Heart of Gujarat
          </p>
          <Button size="lg" className="bg-orange-800 hover:bg-orange-900 text-white font-semibold hidden">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
}