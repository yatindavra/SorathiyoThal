'use client';
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const aboutSectionRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutTextLinesRef = useRef([]);

  const addToTextLineRefs = (el) => {
    if (el && !aboutTextLinesRef.current.includes(el)) {
      aboutTextLinesRef.current.push(el);
    }
  };

  const splitParagraphIntoLines = (text) => {
    const sentences = text.split('. ').filter(sentence => sentence.length > 0);
    return sentences.map((sentence, index) => (
      <p
        key={index}
        ref={addToTextLineRefs}
        className="inline"
        style={{ opacity: 0 }}
      >
        {sentence}{index < sentences.length - 1 ? '. ' : ''}
      </p>
    ));
  };

  useEffect(() => {
    if (aboutSectionRef.current) {
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      });

      aboutTl
        .fromTo(aboutTitleRef.current,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }
        )
        .fromTo(aboutTextLinesRef.current,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          },
          "-=0.3"
        );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={aboutSectionRef} className="py-20 px-4 bg-brown-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 ref={aboutTitleRef} className="text-4xl font-bold text-orange-900 mb-4">
          સોરઠીયો થાળ
        </h2>
        <div className="text-lg text-brown-600 leading-relaxed mb-8">
          {splitParagraphIntoLines("Bringing the vibrant and flavorful world of Gujarati cuisine to your table. From the bustling streets of Vadodara to our cozy restaurant, we serve authentic dishes made with love and traditional recipes passed down through generations. Experience the warmth of Gujarat in every bite.")}
        </div>
        <Button className="bg-orange-800 hover:bg-orange-900 text-white font-semibold hidden">
          Our Story
        </Button>
      </div>
    </section>
  );
}